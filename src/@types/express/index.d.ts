import * as express from "express";
import { IUserRequest } from "../../services/users/userCreate.service";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        email: string;
      };
    }
  }
}
