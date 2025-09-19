"use client";

import React from "react";
import ArticleCard from "./article-card";
import { ArticleType } from "@/features/articles/articles.serverUtil";

interface Props {
  articles?: ArticleType[] | null;
}

const ArticleLists = ({ articles }: Props) => {
  return (
    <React.Fragment>
      <div className=" bg-slate-50 rounded-2xl p-2">
        <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-8 underline  mt-3">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
            {articles &&
              Array.isArray(articles) &&
              articles?.map((article) => (
                <ArticleCard key={article?.id} article={article} />
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ArticleLists;
