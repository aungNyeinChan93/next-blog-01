"use client";

import React, { useActionState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { createCommentAction } from "@/features/comments/comments-action";
import toast from "react-hot-toast";
import { useRouter, redirect } from "next/navigation";

const CommentDialog = ({ article_id }: { article_id?: string | null }) => {
  const router = useRouter();
  const [state, formAction] = useActionState(createCommentAction, undefined);
  if (state?.success) {
    toast.success("comment success");
    return redirect(`/articles/${article_id}`);
  }
  return (
    <React.Fragment>
      <Dialog>
        <DialogTrigger>Review</DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Comment Here!</DialogTitle>
            <DialogDescription className="">
              <Card className="">
                <CardContent>
                  <form action={formAction}>
                    <input
                      type="hidden"
                      name="article_id"
                      value={article_id ?? ""}
                    />
                    <div className="mt-3">
                      {!state?.success && (
                        <p className="text-red-600">{state?.errors?.body}</p>
                      )}
                      <Textarea
                        placeholder="Enter comment !"
                        className="w-full h-50 mt-5"
                        name="body"
                      />
                    </div>
                    <div className="mt-3">
                      <Button variant={"outline"} type="submit">
                        Confirm{" "}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default CommentDialog;
