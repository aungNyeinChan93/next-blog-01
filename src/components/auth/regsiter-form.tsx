"use client";

import React, { useActionState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { registerAction } from "@/features/auth/auth-action";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(registerAction, undefined);

  if (state?.success) {
    toast.success("register success", { duration: 3000 });
    return redirect("/");
  }

  return (
    <React.Fragment>
      <Card className="w-full sm:w-md lg:w-lg max-w-lg">
        <CardHeader>
          <CardTitle>Register to your account</CardTitle>
          <CardDescription>
            Enter your email below to Register to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign In</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                {!state?.success && (
                  <p className="text-red-600 ">{state?.errors?.name}</p>
                )}
                <Label htmlFor="email">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                />
              </div>
              <div className="grid gap-2">
                {!state?.success && (
                  <p className="text-red-600 ">{state?.errors?.email}</p>
                )}

                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  name="email"
                />
              </div>
              <div className="grid gap-2">
                {!state?.success && (
                  <p className="text-red-600 ">{state?.errors?.password}</p>
                )}
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" name="password" />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default RegisterForm;
