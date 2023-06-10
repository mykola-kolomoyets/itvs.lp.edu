import type { IconType } from "react-icons";
import type { WithClassName } from "@/types";

type LeftPart = {
  /**
		Left addon of input
 */
  leftAddon?: React.ReactNode;
  /**
		Left icon of input
*/
  leftIcon?: IconType;
};

type RightPart = {
  /**
		Right addon of input
 */
  rightAddon?: React.ReactNode | null | undefined;
  /**
		Right icon of input
*/
  rightIcon?: IconType;
};

export type TextFieldProps = WithClassName<{
  /**
		Label of input
	*/
  label?: string;
  /**
			If truthy, error state will be shown.
	*/
  errorMessage?: string;
}> &
  LeftPart &
  RightPart &
  React.InputHTMLAttributes<HTMLInputElement>;
