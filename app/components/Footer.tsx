import React from 'react'
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  return (
    <section className="flex flex-col text-gray-100">
      <div className="flex flex-row justify-center align-middle gap-4 text-white text-4xl lg:text-5xl">
        <Link href="https://www.linkedin.com/in/samuel-essilfie-274684252/">
          <FaLinkedinIn />
        </Link>
        <Link href="https://github.com/samezzz">
          <FaGithub />
        </Link>
        <Link href="https://twitter.com/_Samess">
          <FaTwitter />
        </Link>
      </div>
      <div className="mx-auto my-6 text-center text-gray-400 ">&copy; 2023 MINDSHARE MEMOIRS. All rights reserved.
      </div>
    </section>
  )
}
