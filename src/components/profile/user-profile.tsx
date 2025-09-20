// UserDashboard.tsx
import React, { FC } from "react";
import { Home, User, Settings, LogOut } from "lucide-react";
import { getUserById, UserType } from "@/features/users/users-utils";
import RecentArticles from "../articles/recent-articles";

interface Props {
  user_id?: string | null;
}

const UserProfile: FC<Props> = async ({ user_id }) => {
  const user: UserType | null = user_id ? await getUserById(user_id) : null;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-slate-500 text-slate-50 shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            Welcome back, {user?.name}👋
          </h1>
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-gray-600">Total Articles</h2>
              <p className="mt-2 text-3xl font-bold text-blue-600">
                {user?._count.articles}
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-gray-600">Total Comments</h2>
              <p className="mt-2 text-3xl font-bold text-green-600">
                {user?._count.comments}
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-gray-600">User Role</h2>
              <p className="mt-2 text-2xl font-bold text-purple-600">
                {user?.role}
              </p>
            </div>
          </div>

          {/* Table */}
          {/* <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3">Date</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">2025-09-10</td>
                  <td className="p-3">Order #1234</td>
                  <td className="p-3 text-green-600">+$120</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">2025-09-09</td>
                  <td className="p-3">Subscription</td>
                  <td className="p-3 text-red-600">- $15</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-lg">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">2025-09-08</td>
                  <td className="p-3">Refund</td>
                  <td className="p-3 text-green-600">+$50</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">
                      Processing
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}

          {/* Recent card */}
          <div>
            <RecentArticles articles={user?.articles} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
