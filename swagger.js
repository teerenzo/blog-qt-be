import { Router } from "express";
import { serve, setup } from "swagger-ui-express";
import dotenv from "dotenv";

dotenv.config();

const docrouter = Router();
const host = process.env.SWAGGER_SERVER || "http://localhost:4000/api/v1";

const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    title: "Blog API",
    version: "1.0.0",
    description: "Blog Application API",
  },
  servers: [
    {
      url: host,
    },
  ],
  paths: {
    "/auth/register": {
      post: {
        tags: ["User"],
        description: "Register a new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          201: {
            description: "User registered successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                      properties: {
                        token: {
                          type: "string",
                          description: "JWT token for authenticated user",
                        },
                        user: {
                          type: "object",
                          $ref: "#/components/schemas/User",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          409: {
            description: "Conflict, such as email already exists",
          },
        },
      },
    },
    "/auth/login": {
      post: {
        tags: ["User"],
        description: "Login a user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Login",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Login successful",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    token: {
                      type: "string",
                      description: "JWT token for authenticated user",
                    },
                    user: {
                      type: "object",
                      $ref: "#/components/schemas/User",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized, incorrect credentials",
          },
        },
      },
    },
    "/blogs": {
      get: {
        tags: ["blog"],
        description: "Get all blogs",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          200: {
            description: "Successfully retrieved blogs",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
      post: {
        tags: ["blog"],
        description: "Create a new blog",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                $ref: "#/components/schemas/blog",
              },
            },
          },
        },
        responses: {
          201: {
            description: "blog created successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
    },
    "/blogs/{id}": {
      get: {
        tags: ["blog"],
        description: "Get a single blog by ID",

        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            description: "Successfully retrieved blog",
          },
          404: {
            description: "blog not found",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
      put: {
        tags: ["blog"],
        description: "Update a blog by ID",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/blog",
              },
            },
          },
        },
        responses: {
          200: {
            description: "blog updated successfully",
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "blog not found",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
      delete: {
        tags: ["blog"],
        description: "Delete a blog by ID",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            description: "blog deleted successfully",
          },
          404: {
            description: "blog not found",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
    },
    "/blogs/{blogId}/comment": {
      post: {
        tags: ["blog"],
        description: "Create a new comment for a blog",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "blogId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Comment",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Comment created successfully",
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "blog not found",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
            example: "John",
          },
          lastName: {
            type: "string",
            example: "Doe",
          },
          email: {
            type: "string",
            format: "email",
            example: "john.doe@example.com",
          },
          password: {
            type: "string",
            example: "password123",
          },
        },
        required: ["firstName", "lastName", "email", "password"],
      },
      Login: {
        type: "object",
        properties: {
          email: {
            type: "string",
            format: "email",
            example: "john.doe@example.com",
          },
          password: {
            type: "string",
            example: "password123",
          },
        },
        required: ["email", "password"],
      },
      blog: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "Title of the blog",
          },
          content: {
            type: "string",
            description: "Content of the blog",
          },
          files: {
            type: "string",
            description: "Image file for the blog",
            format: "binary",
          },
        },
        required: ["title", "content"],
      },
      Comment: {
        type: "object",
        properties: {
          content: {
            type: "string",
            description: "Content of the comment",
          },
        },
        required: ["content", "userId", "blogId"],
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

docrouter.use("/", serve, setup(swaggerDocument));

export default docrouter;
