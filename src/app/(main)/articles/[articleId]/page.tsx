import ArticleDetailCard from "@/components/articles/article-detail-card";
import Header from "@/components/share/header";
import {
  ArticleType,
  getArticelById,
} from "@/features/articles/articles.serverUtil";
import { ArrowBigLeft, XCircle } from "lucide-react";
import React, { FC } from "react";

interface Props {
  params: Promise<{ articleId: string }>;
}

const DetailArticlePage: FC<Props> = async ({ params }) => {
  const { articleId } = await params;
  const article: ArticleType | null = await getArticelById(articleId);
  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-4">
        <div className="flex flex-col gap-4">
          <Header
            icon={<ArrowBigLeft />}
            href={"/articles"}
            className="text-sky-600 text-2xl tracking-wide font-semibold font-sans"
          >
            Detail Article
          </Header>
          <section>
            <ArticleDetailCard article={article} />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default DetailArticlePage;
