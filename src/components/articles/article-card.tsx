import { ArticleType } from "@/features/articles/articles.serverUtil";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  article?: ArticleType;
}

const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <React.Fragment>
      <div className="bg-gray-100 rounded-md overflow-hidden shadow-lg my-3 hover:shadow-2xl hover:shadow-amber-300/80">
        <div className="bg-gray-50 aspect-[14/10]">
          <img
            src={
              article?.image
                ? article.image
                : "https://readymadeui.com/cardImg.webp"
            }
            alt="Blog Post 1"
            className="w-full h-full object-contain p-2 object-top"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            {article?.title}
          </h3>
          <p className="text-slate-600 text-[15px] leading-relaxed line-clamp-3">
            {article?.body ||
              `Stay ahead of the curve with the latest creative design trends
            shaping the digital world.`}
          </p>
          <Link
            href={`articles/${article?.id}`}
            className="mt-6 inline-block px-3 py-1.5 rounded-md tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ArticleCard;
