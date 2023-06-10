import { memo } from "react";
import type { DropdownIndicatorProps } from "./types";
import { components } from "react-select";
import { RiArrowDownSFill } from "react-icons/ri";
import { ICON_M_SIZE } from "@/constants";

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <RiArrowDownSFill size={ICON_M_SIZE} />
    </components.DropdownIndicator>
  );
};

export default memo(DropdownIndicator);
