import { memo } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { RiHeading, RiMenuAddLine, RiParagraph } from "react-icons/ri";
import clsx from "clsx";
import type { AddElementDropdownProps } from "./types";
import { DropdownContent, DropdownMenuItem } from "@/ui/Dropdown";
import Button from "@/ui/Button";
import s from "./AddElementDropdown.module.css";

const AddElementDropdown: React.FC<AddElementDropdownProps> = ({
  className,
  onAddHeadingTwoClick,
  onAddParagraphClick,
}) => {
  return (
    <div className={clsx(s.wrap, className)}>
      <DropdownMenu>
        <DropdownMenuTrigger className={s["trigger-wrap"]} asChild>
          <Button
            className={s.trigger}
            variant="primary"
            size="sm"
            icon={<RiMenuAddLine className={s["trigger-icon"]} />}
            iconSide="left"
          >
            Додати елемент
          </Button>
        </DropdownMenuTrigger>
        <DropdownContent align="center">
          <DropdownMenuItem
            className={s.item}
            text="Заголовок"
            Icon={RiHeading}
            onSelect={onAddHeadingTwoClick}
          />
          <DropdownMenuItem
            className={s.item}
            text="Абзац"
            Icon={RiParagraph}
            onSelect={onAddParagraphClick}
          />
        </DropdownContent>
      </DropdownMenu>
    </div>
  );
};

export default memo(AddElementDropdown);
