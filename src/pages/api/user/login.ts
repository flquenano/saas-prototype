import { session } from "@/lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

interface User {
  readonly id: string | number;
  name: string;
  readonly email: string;
  dob: string;
}

interface Client {
  isDependent: boolean;
}

interface Provider {
  isProvider: boolean;
  is211: boolean;
  isAdmin: boolean;
}

export interface UserSession extends User, Partial<Client>, Partial<Provider> {
  idToken: string;
  appToken: string;
}

// Consolidate

interface ProviderView {
  provider: boolean;
  orgAdmin: boolean;
  admin: boolean;
}

export interface UserView extends User, Partial<ProviderView> {
  role: "client" | "provider";
}

export default withIronSessionApiRoute(async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;

  const providerCred = {
    is211: true,
    isAdmin: true,
    isProvider: true
  };

  const userData: UserSession = {
    id: 230,
    idToken: "pjdc-91283c90-1u2d9",
    appToken: "=123=k9123c10-=823mv-c90u45",
    name: "firstname lastname",
    email: "email@ibmch.com",
    dob: "09/29/1001",
    ...(username === "provider" && providerCred)
  };

  req.session.user = userData;
  await req.session.save();

  // Add condition on what data structure to be sent based from role
  const userView: UserView = {
    id: "230",
    name: "firstname lastname",
    email: "email@ibmch.com",
    dob: "09/29/1001",
    ...(true && { isDependent: true }),
    role: username === "provider" ? "provider" : "client"
  };

  if (username !== "provider") {
    return res.send({ user: userView });
  }

  return res.send({ user: userView });
},
session);
