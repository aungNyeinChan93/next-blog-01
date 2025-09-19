"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginAction } from "@/features/auth/auth-action";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useActionState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(loginAction, undefined);
  if (state?.success) {
    toast.success("login success");
    return router.push("/");
  }
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center p-4 bg-green-50">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <div className=" flex justify-between items-center">
              <CardTitle>Lgoin Form</CardTitle>
              <CardAction>
                <Button type="button" asChild variant={"secondary"}>
                  <Link href={"register"}>Sign Up</Link>
                </Button>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <form action={formAction}>
              <div className="mt-3">
                {!state?.success && (
                  <p className="text-red-600 "> {state?.errors?.email}</p>
                )}
                {!state?.success && (
                  <p className="text-red-600 "> {state?.errors?.other}</p>
                )}

                <Label>Email</Label>
                <Input type="email" placeholder="Enter Email" name="email" />
              </div>
              <div className="mt-3">
                {!state?.success && (
                  <p className="text-red-600 "> {state?.errors?.password}</p>
                )}

                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                />
              </div>
              <div className="mt-3">
                <Button variant={"outline"} type="submit">
                  Sign In
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
