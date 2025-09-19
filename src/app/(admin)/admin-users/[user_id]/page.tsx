import { getUserById } from "@/features/users/users-utils";
import React, { FC } from "react";

interface Props {
  params: Promise<{ user_id: string }>;
}

const AdminDetailAccount: FC<Props> = async ({ params }) => {
  const { user_id } = await params;
  const user = await getUserById(user_id);
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default AdminDetailAccount;
