require("dotenv").config();
import { IgApiClient } from "instagram-private-api";

export const USER_NAME = process.env.USERNAME;
export const PASSWORD = process.env.PASSWORD;
export interface IClient {
  ig: IgApiClient;
  auth: any;
}

export interface IOptionDescription {
  short_name: string;
  long_name: string;
  description: string;
}
