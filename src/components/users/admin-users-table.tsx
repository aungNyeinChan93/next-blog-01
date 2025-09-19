import React, { FC, use } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "../ui/card";
import { UserType } from "@/features/users/users-utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoreHorizontal, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import RoleChange from "../accounts/role-change";

interface Props {
  users?: Array<UserType> | null;
}

const AdminUsersTable: FC<Props> = ({ users }) => {
  return (
    <React.Fragment>
      <Card className=" w-full max-w-6xl mx-auto">
        <Table className="">
          <TableCaption>A list of users</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="">Role</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users &&
              users?.map((user) => (
                <TableRow>
                  <TableCell className="font-medium">
                    <Image
                      className="rounded-full bg-red-50 px-2 py-5"
                      width={50}
                      height={50}
                      alt="avator"
                      src={(user!.image as string) || "/next.svg"}
                    />
                  </TableCell>
                  <TableCell>{user?.name}</TableCell>
                  <TableCell>{user?.email}</TableCell>
                  <TableCell className="">{user?.role}</TableCell>
                  <TableCell className="text-right">
                    <Button variant={"outline"} type="button">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <MoreHorizontal className="!text-red-600" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Account Setting</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Link href={`admin-users/${user?.id}`}>
                              Profile
                            </Link>
                          </DropdownMenuItem>
                          <RoleChange user={user} />
                          <DropdownMenuItem>Team</DropdownMenuItem>
                          <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow className="">
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className=" flex justify-end space-x-2 items-center">
                <span className="text-red-600 text-base">{users?.length}</span>
                <User size={30} className="text-red-600" />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    </React.Fragment>
  );
};

export default AdminUsersTable;
