import Link from "next/link";
import React, { ComponentProps, FC, ReactNode } from "react";
import { Button } from "../ui/button";

interface Props extends Partial<ComponentProps<typeof Link>> {
  children: ReactNode;
}

const Header: FC<Props> = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <main className="w-full mx-10 p-4 bg-slate-50 h-auto rounded my-1">
        <div className="flex justify-between items-center">
          <h3 className={props.className}>{children}</h3>
          <Button asChild variant={"outline"}>
            <Link {...(props as ComponentProps<typeof Link>)}>➕</Link>
          </Button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Header;
