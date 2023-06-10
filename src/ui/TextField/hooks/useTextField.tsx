import { useCallback, useId, useMemo } from "react";
import type { TextFieldProps } from "../types";
import useToggle from "@/hooks/useToggle";
import { DEFAULT_INPUT_PLACEHOLDERS } from "../constants";
import clsx from "clsx";
import s from "../TextField.module.css";
import { RiEyeCloseFill, RiEyeFill, RiSearch2Line } from "react-icons/ri";
import Button from "@/ui/Button";
import { ICON_L_SIZE } from "@/constants";

export const useTextField = ({
  id,
  className,
  errorMessage,
  placeholder,
  type = "text",
  disabled,
  leftAddon,
  rightAddon,
  label,
  leftIcon,
  rightIcon,
  ...rest
}: TextFieldProps) => {
  const generatedInputId = useId();
  const [isPasswordVisible, toggleIsPasswordVisible] = useToggle();

  const passwordIconClickHandler = useCallback(() => {
    toggleIsPasswordVisible();
  }, [toggleIsPasswordVisible]);

  const memoizedPlaceholder = useMemo(() => {
    if (!placeholder) {
      return type in DEFAULT_INPUT_PLACEHOLDERS
        ? DEFAULT_INPUT_PLACEHOLDERS[type]
        : "";
    }

    return placeholder;
  }, [placeholder, type]);

  const memoizedInputType = useMemo(() => {
    if (type === "password") {
      return isPasswordVisible ? "text" : "password";
    }

    return type;
  }, [isPasswordVisible, type]);

  const leftAddonJSX = useMemo(() => {
    const LeftIcon = leftIcon;

    switch (true) {
      case !!leftAddon: {
        return <div className={s["addon-wrap"]}>{leftAddon}</div>;
      }
      case !!LeftIcon:
      case type === "search": {
        return (
          <div
            className={clsx(
              s["icon-wrap"],
              s["icon-left"],
              type === "search" && s.search
            )}
          >
            {type === "search" ? (
              <RiSearch2Line className={s.icon} size={ICON_L_SIZE} />
            ) : LeftIcon ? (
              <LeftIcon className={s.icon} size={ICON_L_SIZE} />
            ) : null}
          </div>
        );
      }
      default: {
        return null;
      }
    }
  }, [leftAddon, leftIcon, type]);

  const rightAddonJSX = useMemo(() => {
    const RightIcon = rightIcon;

    switch (true) {
      case !!RightIcon: {
        return (
          <div className={clsx(s["icon-wrap"], s["icon-right"])}>
            {RightIcon ? (
              <RightIcon className={s.icon} size={ICON_L_SIZE} />
            ) : null}
          </div>
        );
        break;
      }
      case !!rightAddon:
      case type === "password": {
        const getPasswordJSX = () => {
          if (isPasswordVisible) {
            return <RiEyeCloseFill className={s.icon} size={ICON_L_SIZE} />;
          }

          return <RiEyeFill className={s.icon} size={ICON_L_SIZE} />;
        };

        return (
          <div className={s["addon-wrap"]}>
            {type === "password" ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                iconChild={getPasswordJSX()}
                onClick={passwordIconClickHandler}
              />
            ) : (
              rightAddon
            )}
          </div>
        );
      }
      default: {
        return null;
      }
    }
  }, [
    isPasswordVisible,
    passwordIconClickHandler,
    rightAddon,
    rightIcon,
    type,
  ]);

  const memoizedClasses = useMemo(() => {
    return {
      wrap: clsx(
        s.wrap,
        className,
        !!errorMessage && s.error,
        disabled && s.disabled
      ),
      inner: clsx(
        s.inner,
        s[type],
        !!leftAddonJSX && s["with-icon-left"],
        !!rightAddonJSX && s["with-icon-right"]
      ),
      label: label ? s.label : undefined,
      input: s.input,
    };
  }, [
    className,
    disabled,
    errorMessage,
    label,
    leftAddonJSX,
    rightAddonJSX,
    type,
  ]);

  return {
    id: id ?? generatedInputId,
    placeholder: memoizedPlaceholder,
    type: memoizedInputType,
    label,
    errorMessage,
    classes: memoizedClasses,
    leftAddonJSX,
    rightAddonJSX,
    disabled,
    ...rest,
  };
};
