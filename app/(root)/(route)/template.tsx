"use client";

import PageWrapper from "@/components/animate-wrapper";
import { PropsWithChildren } from "react";

const Temp = ({ children }: PropsWithChildren) => {
  return <PageWrapper>{children}</PageWrapper>;
};

export default Temp;
