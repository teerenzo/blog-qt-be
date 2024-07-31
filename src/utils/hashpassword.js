
import bcrypt  from 'bcryptjs';
import crypto from 'crypto';

export const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
}

export const comparePassword = (password, hashedPassword) => {
    const comparedPassword = bcrypt.compareSync(password, hashedPassword);
    return comparedPassword;
}



