import { session } from "@/lib/session";
import { withIronSessionSsr } from "iron-session/next";
import { InferGetServerSidePropsType } from "next";
import React from "react";
import { UserSession, UserView } from "../api/user/login";
import { userSessionToView } from "@/lib/utils";

export const getServerSideProps = withIronSessionSsr(async ({ req, res }) => {
  const user = userSessionToView(req.session.user as UserSession);
  return {
    props: { user }
  };
}, session);

const ParticipantRegistry = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div></div>;
};

export default ParticipantRegistry;
