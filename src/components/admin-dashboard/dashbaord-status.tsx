import { getAllArticles } from "@/features/articles/articles.serverUtil";
import {
  getAllCommentsByArticleId,
  totalComment,
} from "@/features/comments/comments-serverUtils";
import { getAllUsers } from "@/features/users/users-utils";
import React from "react";
import { promise } from "zod";

const DashboardStatus = async () => {
  const [users, articles, total] = await Promise.all([
    getAllUsers(),
    getAllArticles(),
    totalComment(),
  ]);
  return (
    <React.Fragment>
      <section>
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-12">
          <div className="max-w-screen-xl mx-auto">
            {/* header */}
            <h2 className="text-4xl font-semibold text-white mb-8">
              Our App Statistics
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* user serction */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-14 h-14">
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-slate-900">
                    Total Users
                  </h4>
                  <p className="text-[15px] text-slate-600 mt-2 leading-relaxed">
                    We’ve welcomed over {users?.length} active users who
                    regularly engage with our platform and content.
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mt-3">
                    {users?.length}
                  </p>
                </div>
              </div>

              {/* articles section */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 w-14 h-14">
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-slate-900">
                    Articles
                  </h4>
                  <p className="text-[15px] text-slate-600 mt-2 leading-relaxed">
                    Our platform has generated {articles?.length} articles
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mt-3">
                    {articles?.length}
                  </p>
                </div>
              </div>

              {/*comments section */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3 w-14 h-14">
                  <svg
                    className="h-8 w-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-slate-900">
                    Comments
                  </h4>
                  <p className="text-[15px] text-slate-600 mt-2 leading-relaxed">
                    Only {total} review this month — all promptly resolved by
                    our support team.
                  </p>
                  <p className="text-slate-900 font-medium text-[15px] mt-3">
                    {total}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DashboardStatus;
