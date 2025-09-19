import Header from "@/components/share/header";
import { UserCog } from "lucide-react";
import React from "react";

const AdminDashboardPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-4 ">
        <Header href={"/admin-users"} icon={<UserCog />}>
          Admin Dashborad
        </Header>
      </main>
    </React.Fragment>
  );
};

export default AdminDashboardPage;
