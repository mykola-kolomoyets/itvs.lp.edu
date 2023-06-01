import type { NextPage } from "next";
import AuthError from "@/modules/auth/AuthError";

const AuthErrorPage: NextPage = () => {
  return <AuthError />;
};

export default AuthErrorPage;
