import { memo } from "react";
import { useRouter } from "next/router";
import { AuthError } from "./types";
import { AUTH_ERRORS } from "./constants";
import Typography from "@/ui/Typography";
import s from "./AuthError.module.css";

const AuthError: React.FC = () => {
  const { query } = useRouter();

  const error = query.error as string;

  return (
    <div className={s.wrap}>
      {<Typography>{AUTH_ERRORS[error as AuthError]}</Typography>}
    </div>
  );
};

export default memo(AuthError);
