import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import { useRouter } from "next/router";

const Home = () => {

  const [viewportWidth, setViewportWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const router = useRouter();

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
        <div className="">
          
        </div>
      </Layout>
    </>
  )
}

export default Home;
