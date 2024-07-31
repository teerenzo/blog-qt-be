import { Router } from "express";
import authRoute from "./authRoute.js";
import blogRoute from "./blogRoute.js";

const route = Router();

route.use("/auth", authRoute);
route.use("/blogs", blogRoute);

export default route;
