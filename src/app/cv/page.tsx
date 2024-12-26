"use client";
import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";
import Link from "next/link";
import React from "react";

function CVPage() {
  return (
    <section className="px-4 w-full min-h-screen grid place-content-center">
      <Link
        className="text-2xl flex items-center hover:underline"
        href={"/Elijah_Pyatikhatko_CV.pdf"}
        target="_blank"
      >
        Open file in browser
        <Share className="ml-2" />
      </Link>
      <p className="mt-4 text-xs text-muted-foreground">
        I consent to the use of my personal data for recruitment purposes, in
        line with the GDPR (EU) 2016/679. <br /> My information will be stored
        and processed solely for the duration of the hiring process.
      </p>
    </section>
  );
}

export default CVPage;
