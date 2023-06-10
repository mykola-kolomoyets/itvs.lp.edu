import { memo } from "react";
import type { TextFieldProps } from "./types";
import s from "./TextField.module.css";
import { useTextField } from "./hooks/useTextField";
import Typography from "../Typography";

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    id,
    classes,
    label,
    type,
    leftAddonJSX,
    rightAddonJSX,
    errorMessage,
    ...rest
  } = useTextField(props);
  return (
    <div className={classes.wrap}>
      {label ? (
        <label className={classes.label} htmlFor={id}>
          <Typography variant="sm" component="span">
            {label}
          </Typography>
        </label>
      ) : null}
      <div className={s["input-wrap"]}>
        <div className={classes.inner}>
          {leftAddonJSX}
          <input
            id={id}
            className={classes.input}
            // ref={ref}
            {...rest}
            type={type}
          />
          {rightAddonJSX}
        </div>
      </div>
      {/* {errorMessage ? (
        <ErrorMessage className={s["error-wrap"]}>{errorMessage}</ErrorMessage>
      ) : null} */}
    </div>
  );
};

export default memo(TextField);
