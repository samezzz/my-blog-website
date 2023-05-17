import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="p-3 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid">
          <Link href="/" className="text-white/90 no-underline hover:text-white">
            Learn with me
          </Link>
        </h1>
      </div>
    </nav>
  )
}