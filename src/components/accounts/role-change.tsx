"use client";

import React, { useActionState } from "react";

import {
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@radix-ui/react-dropdown-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { changeRoleAction } from "@/features/account/account-action";
import { UserType } from "@/features/users/users-utils";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

interface Props {
  user?: UserType | null;
}

const RoleChange = ({ user }: Props) => {
  const [state, formAction] = useActionState(changeRoleAction, undefined);

  if (state?.success) {
    toast.success("update role success");
    return redirect("/admin-users");
  }

  return (
    <React.Fragment>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="px-2">
          Change Role
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent className="p-2 space-y-2">
            <form action={formAction} className="flex flex-col gap-2">
              <input type="hidden" name="user_id" value={user?.id} />
              <Select name="role">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="super">Super</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" variant={"destructive"}>
                Change
              </Button>
            </form>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    </React.Fragment>
  );
};

export default RoleChange;
