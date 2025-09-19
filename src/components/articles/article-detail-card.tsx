import { ArticleType } from "@/features/articles/articles.serverUtil";
import React, { FC } from "react";
import { Card } from "../ui/card";
import CommentDialog from "../comments/comment-dialog";
import { json } from "zod";
import Header from "../share/header";
import { XCircle } from "lucide-react";

interface Props {
  article?: ArticleType | null;
}

const ArticleDetailCard: FC<Props> = ({ article }) => {
  return (
    <React.Fragment>
      {/* detail card section */}
      <section>
        <div className="bg-gray-50  w-full rounded-lg overflow-hidden max-w-7xl mx-auto mt-4 p-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold text-slate-900 leading-tight">
                {article?.title}
              </h2>
              <p className="mt-4 text-sm text-slate-500 leading-loose">
                {article?.body}
              </p>

              <div className="px-5 inline-block   py-3 mt-8 rounded-md text-white text-sm font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 cursor-pointer">
                <CommentDialog article_id={article?.id} />
              </div>
            </div>

            <div className="h-full">
              <img
                src={
                  article?.image
                    ? article?.image
                    : "https://readymadeui.com/cardImg.webp"
                }
                className="w-full h-full object-center object-fill shrink-0 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* comment sextion */}
      <section className="">
        <Card className="p-4 mt-4 bg-slate-50">
          <Header href={"#"} icon={<XCircle />}>
            Comments
          </Header>
          <pre>{JSON.stringify(article?.comments, null, 2)}</pre>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default ArticleDetailCard;
