"use client";

import React from "react";
import { Button } from "../ui/button";
import { logoutAction } from "@/features/auth/auth-action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Button
        type="button"
        variant={"outline"}
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
        rel="noopener noreferrer"
        onClick={async () => {
          const success = await logoutAction();
          if (!success) return toast.error("sign out fail");
          toast.success("sign out success", { duration: 3000 });
          return router.push("/register");
        }}
      >
        Sign Out
      </Button>
    </React.Fragment>
  );
};

export default SignOut;
