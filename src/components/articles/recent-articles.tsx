import { ArticleType } from "@/features/articles/articles.serverUtil";
import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import RecentArticelCard from "./recent-article-card";

interface Props {
  articles?: ArticleType[] | null | any;
}

const RecentArticles = ({ articles }: Props) => {
  return (
    <React.Fragment>
      <Card className="flex justify-center items-center bg-slate-50 px-4">
        <h3 className="text-xl underline underline-offset-4 text-slate-500 font-sans font-semibold text-start">
          Recent Articles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-10 ">
          {articles?.map((article: ArticleType) => (
            <RecentArticelCard key={article.id} article={article} />
          ))}
        </div>
      </Card>
    </React.Fragment>
  );
};

export default RecentArticles;
