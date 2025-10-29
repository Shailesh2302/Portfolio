import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6 px-8">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Your Name</Link>
        <ul className="flex gap-6">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}