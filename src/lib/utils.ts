import { UserSession, UserView } from "@/pages/api/user/login";

export const userSessionToView = (userSession: UserSession): UserView => {
  return {
    id: userSession.id,
    name: userSession.name,
    email: userSession.email,
    dob: userSession.dob,
    role: userSession?.isProvider ? "provider" : "client",
    ...(userSession.isDependent && { isDependent: userSession.isDependent })
  };
};

export const transformSessionToView = (userSession: UserSession) => {
  console.log(userSession);
};
