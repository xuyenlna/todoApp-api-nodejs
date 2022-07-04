require("dotenv").config();

export const env = {
  MONGDOBD_URI: process.env.MONGDODB_URI,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  DATABASE_NAME: process.env.DATABASE_NAME,
};
