import AdminUsersTable from "@/components/users/admin-users-table";
import { getAllUsers, UserType } from "@/features/users/users-utils";
import React from "react";

const AdminUsersPage = async () => {
  const users: UserType[] | undefined = await getAllUsers();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen  bg-green-50 p-4">
        <AdminUsersTable users={users} />
      </main>
    </React.Fragment>
  );
};

export default AdminUsersPage;
