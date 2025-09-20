import RecentArticles from "@/components/articles/recent-articles";
import UserProfile from "@/components/profile/user-profile";
import Header from "@/components/share/header";
import { getArticelById } from "@/features/articles/articles.serverUtil";
import {
  getServerSession,
  ServerSession,
} from "@/features/auth/auth-serverUtil";
import { getUserById, UserType } from "@/features/users/users-utils";
import { Settings, Users } from "lucide-react";
import React from "react";

const ProfilePage = async () => {
  const session: ServerSession | undefined | null = await getServerSession();

  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-4">
        <div className="flex flex-col gap-4">
          <Header
            className="text-2xl text-sky-500 tracking-wider font-mono font-semibold "
            href={"/profile/setting"}
            icon={<Settings />}
          >
            Profile
          </Header>
          <section>
            <UserProfile user_id={session?.user?.id} />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ProfilePage;
