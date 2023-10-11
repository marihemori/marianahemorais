"use client";

import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-[2rem] z-50 flex items-center justify-between mt-6">
      <div>
        <h1 className="text-zinc-800 text-3xl font-semibold">
          <Link href="/">Mariana.</Link>
        </h1>
      </div>
      <div className="bg-white text-black rounded-full">
        <Dropdown className="bg-white text-black">
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="flex items-center gap-2 px-5 py-1 font-medium text-zinc-700 hover:text-black transition text-xl"
            >
              Download CV <HiDownload />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className="rounded-full">
            <DropdownItem key="new" className="rounded-full">
              <a
                href="/pdf/resume.pdf"
                download
                className="flex items-center gap-2 text-xl px-5 py-1 rounded-full"
              >
                Download EN-US <HiDownload />
              </a>
            </DropdownItem>
            <DropdownItem key="download">
              <a
                className="flex items-center gap-2 text-xl px-5 py-1 "
                href="/pdf/curriculo.pdf"
                download
              >
                Download PT-BR <HiDownload />
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
}
