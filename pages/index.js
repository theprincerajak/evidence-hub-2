import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import { getTweetsCount, getArticlesCount } from '../lib/storage';
export default function Home() {
  const [tweetCount, setTweetCount] = useState(0);
  const [articleCount, setArticleCount] = useState(0);
  useEffect(() => {
    setTweetCount(getTweetsCount());
    setArticleCount(getArticlesCount());
  }, []);
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark">
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">THEY BETRAYED</span>
            <br />
            <span className="text-primary">INDIA</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
            Documenting evidence. The truth speaks for itself.
          </p>
          <div className="mb-12">
            <p className="text-6xl md:text-7xl font-bold text-primary mb-2">
              {tweetCount + articleCount}
            </p>
            <p className="text-gray-400 text-lg tracking-wider">EVIDENCE DOCUMENTED</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <Link href="/tweets">
              <button className="btn-primary w-full md:w-auto text-lg">THE TWEETS →</button>
            </Link>
            <Link href="/articles">
              <button className="btn-secondary w-full md:w-auto text-lg">THE ARTICLES →</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}