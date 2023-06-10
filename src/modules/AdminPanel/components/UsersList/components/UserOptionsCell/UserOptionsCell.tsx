import { memo, useCallback, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Root as PopoverRoot,
  Trigger as PopoverTrigger,
} from "@radix-ui/react-popover";
import type { Option, UserRole } from "@/types";
import type { UserOptionsCellProps } from "./types";
import s from "./UserOptionsCell.module.css";
import Button from "@/ui/Button";
import { RiMore2Line, RiUserSettingsFill } from "react-icons/ri";
import { DropdownContent, DropdownMenuItem } from "@/ui/Dropdown";
import useToggle from "@/hooks/useToggle";
import PopoverContent from "@/ui/PopoverContent";
import Select from "@/ui/Select/Select";
import { USER_ROLE_OPTIONS } from "./constants";
import { useController, useForm } from "react-hook-form";
import { z } from "zod";
import { selectItemSchema } from "@/schemas";
import { api } from "@/utils/api";
import { useNotificationStore } from "@/components/Notification/store/useNotificationStore";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
import { USER_ROLES } from "@/constants";

const UserOptionsCell: React.FC<UserOptionsCellProps> = ({ user }) => {
  const { actions: notificationActions } = useNotificationStore();
  const [isRoleChangePopoverOpened, , setIsRoleChangePopoverOpened] =
    useToggle();
  const utils = api.useContext();
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(
      z
        .object({
          role: selectItemSchema,
        })
        .optional()
    ),
    defaultValues: {
      role: USER_ROLE_OPTIONS.find((option) => {
        return option.value === user.role;
      }) as Option,
    },
  });
  const { field: roleField } = useController({
    control,
    name: "role",
  });
  const { mutateAsync, isLoading } = api.users.updateUserRole.useMutation({
    onSuccess() {
      void utils.invalidate();
    },
  });

  const roleChangeHandler = useCallback(
    async (data: { role: Option }) => {
      await mutateAsync({
        id: user.id,
        role: data.role.value as UserRole,
      });
      notificationActions.openNotification("Роль користувача успішно змінена");
    },
    [mutateAsync, notificationActions, user.id]
  );

  const roleChangeSubmitHandler = handleSubmit(
    async (data) => {
      if (roleField.value.value === USER_ROLES.ADMIN) {
        return;
      }

      await roleChangeHandler(data);
    },
    (error) => {
      console.log(error);
    }
  );

  useEffect(() => {
    if (!isRoleChangePopoverOpened) {
      reset();
    }
  }, [isRoleChangePopoverOpened, reset]);

  return (
    <>
      <div className={s.wrap}>
        <DropdownMenu>
          <DropdownMenuTrigger className={s["trigger-wrap"]} asChild>
            <Button
              className={s.trigger}
              variant="ghost"
              size="sm"
              iconChild={<RiMore2Line className={s["trigger-icon"]} />}
            />
          </DropdownMenuTrigger>
          <DropdownContent align="end">
            <PopoverRoot
              modal
              open={isRoleChangePopoverOpened}
              onOpenChange={setIsRoleChangePopoverOpened}
            >
              <PopoverTrigger asChild>
                <DropdownMenuItem
                  className={s.item}
                  text="Змінити роль"
                  Icon={RiUserSettingsFill}
                  onSelect={(event) => {
                    event.preventDefault();
                    setIsRoleChangePopoverOpened(true);
                  }}
                />
              </PopoverTrigger>
              <PopoverContent title="Зміна ролі користувача">
                <div className={s["popover-content"]}>
                  <form
                    onSubmit={(event) => {
                      void roleChangeSubmitHandler(event);
                    }}
                  >
                    <Select
                      className={s.select}
                      label="Виберіть нову роль"
                      placeholder="Виберіть нову роль"
                      value={roleField.value}
                      options={USER_ROLE_OPTIONS}
                      onChange={roleField.onChange}
                    />
                    {roleField.value.value === USER_ROLES.ADMIN ? (
                      <ConfirmModal
                        title="Надання ролі 'Адміністратор'"
                        description={`Ви впевнені, що хочете недати користувачу ${
                          user.name ?? ""
                        } права доступу 'Адміністратора'?`}
                        triggerElement={
                          <Button
                            className={s.cta}
                            variant="primary"
                            size="sm"
                            type="button"
                            loading={isLoading}
                          >
                            Зберегти зміни
                          </Button>
                        }
                        isSubmitButtonLoading={isLoading}
                        primaryButtonLabel="Надати"
                        secondaryButtonLabel="Скасувати"
                        onSubmit={() => {
                          void roleChangeHandler({
                            role: USER_ROLE_OPTIONS[1] as Option,
                          });
                        }}
                      />
                    ) : (
                      <Button
                        className={s.cta}
                        variant="primary"
                        size="sm"
                        type="submit"
                        loading={isLoading}
                      >
                        Зберегти зміни
                      </Button>
                    )}
                  </form>
                </div>
              </PopoverContent>
            </PopoverRoot>
          </DropdownContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default memo(UserOptionsCell);
