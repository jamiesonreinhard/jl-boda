import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import { useRouter } from "next/router";
import Link from "next/link";

const Home = () => {

  const [viewportWidth, setViewportWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const router = useRouter();

  function daysUntilJanuary27_2024() {
    const today = new Date();
    const targetDate = new Date('2024-01-27');

    // Calculate the difference in milliseconds
    const difference = targetDate - today;

    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return days;
}

  useEffect(() => {
    setViewportWidth(window.innerWidth)
    setViewportHeight(window.innerHeight)

    const handleResize = () => {
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    const passwordEntered = localStorage.getItem('passwordEntered');

    if (!passwordEntered) {
      router.replace('/password');
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Layout>
        <div className="w-screen h-screen relative">
          <Image
            src="/images/walking.jpg"
            alt="walking"
            width={viewportWidth}
            height={viewportHeight}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute top-[50%] left-[50%] lg:left-[200px]
            -translate-y-[50%] -translate-x-[50%] lg:-translate-x-0
            bg-white/[0.9] p-[24px] lg:p-[40px] flex flex-col items-center
            gap-[20px] cursive text-[#7baac8] w-[90%] lg:w-auto text-center"
          >
            <div className="flex flex-col gap-[12px] items-center">
              <h3 className="text-[64px]">La boda de</h3>
              <h1 className="text-[64px] lg:text-[80px]">Leslie & Jamieson</h1>
            </div>
            <h5 className="text-[40px] lg:text-[48px]">Tepoztlan, Morelos, Mexico</h5>
            <h5 className="text-[40px] lg:text-[48px]">January 27, 2024</h5>
            <div className="flex flex-col items-center gap-4 input-font">
              <h4 className="text-black text-[32px] lg:text-[40px] font-bold">
                {daysUntilJanuary27_2024()} days to go!
              </h4>
              <Link href="/info" className="bg-[#fe8cec] hover:bg-[#f641c0] text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform transition duration-500 hover:scale-110">
                {`Last Minute Info!`}
              </Link>
            </div>
            
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home;
