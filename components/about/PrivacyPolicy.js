import React from "react";
import Link from "next/link";

export default function PrivacyPolicy({ data }) {
  return (
    <>
      <div className="container mx-auto py-16 grid gap-10">
        <div className="flex gap-5">
          <img src="/icon_section_black.svg" alt="" />
          <h4 className="font-bold">Our Privacy Policy</h4>
        </div>
        <p className="">
          Platformable is committed to managing people´s data responsibly. Check
          out our Privacy Policy
        </p>
        <Link href="/privacy-policy" className="underline font-black text-xl">
          Check out our Privacy Policy
        </Link>
      </div>
      <section id="Partner" className="bg-[#F4F1FF] py-20">
        <div className="container mx-auto flex md:flex-nowrap flex-wrap gap-x-5">
          <img src="/migracode.png" alt="Migracode image" />
          <div
            dangerouslySetInnerHTML={{
              __html: data?.partner_description,
            }}
          />
        </div>
      </section>
    </>
  );
}
