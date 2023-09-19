import { ModeToggle } from "@/components/mode-toggle";
import Nav from "@/components/nav";
import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Nav />

      {children}
    </>
  );
};

export default RootLayout;
