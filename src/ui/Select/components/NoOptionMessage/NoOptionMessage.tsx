import { memo } from "react";
import { components } from "react-select";
import type { NoOptionMessageProps } from "./types";
import Typography from "@/ui/Typography/Typography";
// import EmptyState from '@/ui/EmptyState';

const NoOptionMessage: React.FC<NoOptionMessageProps> = ({
  description = "We can`t find any options by this value.",
  ...props
}) => {
  return (
    <components.NoOptionsMessage {...props}>
      <Typography variant="base" component="span">
        {description}
      </Typography>
      {/* <EmptyState imgWidth={155} imgHeight={155} description={description} /> */}
    </components.NoOptionsMessage>
  );
};

export default memo(NoOptionMessage);
