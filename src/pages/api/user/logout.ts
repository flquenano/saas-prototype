import { session } from "@/lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(async function logoutRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Make api call to save to audit log

  req.session.destroy();
  res.send({});
},
session);
