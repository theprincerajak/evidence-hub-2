import Link from 'next/link';
export default function Header() {
  return (
    <header className="bg-darker border-b-4 border-primary sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/"><span className="text-2xl font-bold text-primary cursor-pointer">EVIDENCE HUB</span></Link>
        <nav className="flex gap-6">
          <Link href="/tweets"><span className="text-gray-300 hover:text-primary cursor-pointer">Tweets</span></Link>
          <Link href="/articles"><span className="text-gray-300 hover:text-primary cursor-pointer">Articles</span></Link>
        </nav>
      </div>
    </header>
  );
}