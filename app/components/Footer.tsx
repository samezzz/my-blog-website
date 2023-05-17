import React from 'react'
import { FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  return (
    <section>
      <div className="flex flex-row justify-center align-middle gap-4 text-white text-4xl lg:text-5xl">
        <Link href="/">
          <FaLaptop />
        </Link>
        <Link href="/">
          <FaGithub />
        </Link>
        <Link href="/">
          <FaTwitter />
        </Link>
      </div>
    </section>
  )
}
