import ArticleLists from "@/components/articles/article-lists";
import Header from "@/components/share/header";
import {
  type ArticleType,
  getAllArticles,
} from "@/features/articles/articles.serverUtil";
import React from "react";

const ArticlesPage = async () => {
  const articles: ArticleType[] | undefined = await getAllArticles();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-4 ">
        <div className="flex flex-col gap-4">
          <Header
            className="text-sky-600 text-xl tracking-wider font-semibold"
            href={"/articles/create"}
          >
            Articles
          </Header>
          <section>
            <ArticleLists articles={articles} />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ArticlesPage;
