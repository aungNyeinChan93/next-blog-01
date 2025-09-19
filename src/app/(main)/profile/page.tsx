import { getServerSession } from "@/features/auth/auth-serverUtil";
import React from "react";

const UsersPage = async () => {
  const session = await getServerSession();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-4 bg-green-50">
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default UsersPage;
