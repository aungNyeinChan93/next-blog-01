import CreateArticle from "@/components/articles/create-atricle";
import React from "react";

const CreateArticlePage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-4 flex justify-center items-center">
        <CreateArticle />
      </main>
    </React.Fragment>
  );
};

export default CreateArticlePage;
