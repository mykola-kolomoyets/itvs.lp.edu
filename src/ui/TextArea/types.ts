import type { WithClassName } from "@/types";

export type TextAreaProps = WithClassName<{
  /**
		Label of input
	*/
  label?: string;
  /**
			If truthy, error state will be shown.
	*/
  errorMessage?: string;
}> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
