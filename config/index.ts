const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;
const MONGODB_IP = process.env.MONGODB_IP;
const MONGODB_PORT = process.env.MONGODB_PORT;

export const SERVER_PORT = process.env.PORT;
export const MONGODB_URI = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_IP}:${MONGODB_PORT}/${MONGODB_DB_NAME}`;
export const BASE_ROUTE = "/api/v1";
