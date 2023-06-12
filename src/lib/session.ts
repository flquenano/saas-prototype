import { UserSession } from "@/pages/api/user/login";
import { NextApiRequest } from "next";
type NextIronRequest = NextApiRequest;

export const session = {
  cookieName: "myapp_cookiename",
  password: "complex_password_at_least_32_characters_long",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    maxAge: undefined,
    secure: process.env.NODE_ENV === "production"
  }
};

declare module "iron-session" {
  interface IronSessionData {
    user?: UserSession;
  }
}
