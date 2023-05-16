import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav>
      <div>
        <h1>
          <Link href="/">

          </Link>
        </h1>
        <div>
          <Link href="/">
            <FaYoutube />
          </Link>
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
      </div>
    </nav>
  )
}