import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function sectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-3xl font-medium mb-8 text-center">{children}</h2>;
}
