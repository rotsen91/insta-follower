require("dotenv").config();
import { IgApiClient } from "instagram-private-api";
import { AccountRepositoryLoginResponseLogged_in_user } from "instagram-private-api/dist/responses";

export const USER_NAME = process.env.USERNAME;
export const PASSWORD = process.env.PASSWORD;
export interface IClient {
  ig: IgApiClient;
  auth: AccountRepositoryLoginResponseLogged_in_user;
}

export interface IOptionDescription {
  short_name: string;
  long_name: string;
  description: string;
}
