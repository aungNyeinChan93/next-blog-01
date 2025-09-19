"use client";

import { fielUpload } from "@/features/articles/articles.serverUtil";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const DemoOnePage = () => {
  const [image, setImage] = useState<string | File>("");
  return (
    <React.Fragment>
      <main>
        <form
          action={async () => {
            const filePath = await fielUpload(image as File, "/tests");
            toast.success(filePath);
          }}
        >
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files![0])}
          />
          <button type="submit">Save</button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default DemoOnePage;
