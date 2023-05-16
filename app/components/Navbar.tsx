import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"

export default function Navbar() {
  <nav>
    <div>
      <h1>
        <Link>

        </Link>
      </h1>
      <div>
        <Link>
          <FaYoutube />
        </Link>
        <Link>
          <FaLaptop />
        </Link>
        <Link>
          <FaGithub />
        </Link>
        <Link>
          <FaTwitter />
        </Link>
      </div>
    </div>
  </nav>
}