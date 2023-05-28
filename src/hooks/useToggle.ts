import { useCallback, useState } from "react";

export const useToggle = (defaultValue?: boolean) => {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue((x) => !x), []);

  return [value, toggle, setValue] as const;
};

export default useToggle;
