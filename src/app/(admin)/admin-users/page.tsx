import { getAllUsers, UserType } from "@/features/users/users-utils";
import React from "react";

const AdminUsersPage = async () => {
  const users: UserType[] | undefined = await getAllUsers();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-between items-center bg-green-50">
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default AdminUsersPage;
