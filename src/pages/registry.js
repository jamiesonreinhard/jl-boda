import React from "react";
import Layout from "@/components/layout";
import Link from "next/link";

const Registry = () => {
  return <Layout>
    <div className="py-[140px] w-full max-w-[90%] mx-auto">
        <div
          className="z-[10] bg-white/[0.9] p-[24px] lg:p-[40px] flex flex-col items-center
            gap-[20px] text-[#7baac8] text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-[16px]">
            Registry
          </h2>
          <p className="font-semibold text-darkGray text-xl mb-[40px]">
            {`Thank you for helping us with our honeymoon!!!`}
          </p>
          <Link
            href={'https://www.honeyfund.com/wedding/reinhard-castro-sanchez-01-27-2024'}
            target="_blank"
            className="cursor-pointer text-[40px] bg-black rounded-[8px] px-[16px] py-[8px] text-[#d56647]"
          >
            Honeyfund
          </Link>
        </div>
    </div>
  </Layout>;
};

export default Registry;
