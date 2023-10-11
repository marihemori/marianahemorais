import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function sectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl font-bold mb-16 text-left w-full">{children}</h2>
  );
}
