import { ArticleType } from "@/features/articles/articles.serverUtil";
import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Link from "next/link";

interface Props {
  article?: ArticleType | null;
}
const RecentArticelCard = ({ article }: Props) => {
  return (
    <React.Fragment>
      <Link href={`articles/${article?.id}`}>
        <Card className="p-4 min-h-70" key={article?.id}>
          <CardTitle className=" line-clamp-1">
            {article?.title || "Title"}
          </CardTitle>
          <CardContent>
            <div className="w-full h-auto">
              <img
                src={article?.image as string}
                className="w-full h-auto object-contain"
                alt="img"
              />
            </div>
            <p className="text-xs font-light text-gray-500 line-clamp-2 mt-5">
              {article?.body}
            </p>
          </CardContent>
        </Card>
      </Link>
    </React.Fragment>
  );
};

export default RecentArticelCard;
