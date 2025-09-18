import Header from "@/components/share/header";
import React from "react";

const ArticlesPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-4">
        <Header
          className="text-sky-600 text-xl tracking-wider font-semibold"
          href={"/articles/create"}
        >
          Articles
        </Header>
      </main>
    </React.Fragment>
  );
};

export default ArticlesPage;
