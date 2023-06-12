import { session } from "@/lib/session";
import { withIronSessionSsr } from "iron-session/next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async ({ req, res }) => {
    return {
      props: { user: req.session.user }
    };
  },
  session
);

const Login: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  return <div></div>;
};

export default Login;
