"use client";

import React, { ChangeEvent, useActionState, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import { createArticleAction } from "@/features/articles/articles-action";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const CreateArticle = () => {
  const [imagePreview, setImagePreview] = useState<File | undefined>(undefined);

  const [state, formAction] = useActionState(createArticleAction, undefined);

  if (state?.success) {
    toast.success("create article success ");
    return redirect("/articles");
  }
  return (
    <React.Fragment>
      <section className="">
        <Card className="w-sm mx-3 sm:w-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl tracking-wider">
                Create Article
              </CardTitle>
              <CardAction>
                <Link href={"/articles"}>
                  <ArrowBigLeft />
                </Link>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <form action={formAction}>
              <div className="mt-3">
                {!state?.success && (
                  <p className="text-red-600">{state?.errors?.title}</p>
                )}
                {!state?.success && (
                  <p className="text-red-600">{state?.errors?.other}</p>
                )}
                <Label>Title</Label>
                <Input
                  type="text"
                  placeholder="enter your title"
                  name="title"
                  className="py-5 mt-1"
                />
              </div>
              <div className="mt-3">
                {!state?.success && (
                  <p className="text-red-600">{state?.errors?.body}</p>
                )}

                <Label>Body</Label>
                <Textarea
                  className="h-30 mt-1"
                  placeholder="enter your article"
                  name="body"
                />
              </div>
              <div className="mt-3">
                {!state?.success && (
                  <p className="text-red-600">{state?.errors?.image}</p>
                )}

                <Label>Image</Label>
                <Input
                  type="file"
                  name="image"
                  className=" mt-1"
                  onChange={(e) => setImagePreview(e.target.files![0])}
                />
              </div>
              {/* image preview */}
              {imagePreview && (
                <>
                  <Card className="mt-6 w-full">
                    <img
                      src={imagePreview && URL.createObjectURL(imagePreview)}
                      alt="image"
                      className=" w-full h-60 rounded-2xl object-contain"
                    />
                  </Card>
                </>
              )}
              <div className="mt-3">
                <Button
                  type="submit"
                  className=" block h-12 w-full"
                  variant={"outline"}
                >
                  Save
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default CreateArticle;
