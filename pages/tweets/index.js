import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import TweetForm from '../../components/TweetForm';
import TweetCard from '../../components/TweetCard';
import SearchBar from '../../components/SearchBar';
import { getTweets, addTweet, deleteTweet } from '../../lib/storage';
import Link from 'next/link';
export default function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    loadTweets();
  }, []);
  useEffect(() => {
    if (search.trim() === '') {
      setFilteredTweets(tweets);
    } else {
      const query = search.toLowerCase();
      setFilteredTweets(
        tweets.filter(tweet =>
          tweet.content.toLowerCase().includes(query) || tweet.author.toLowerCase().includes(query)
        )
      );
    }
  }, [search, tweets]);
  const loadTweets = () => setTweets(getTweets());
  const handleAddTweet = (tweetData) => {
    addTweet(tweetData);
    loadTweets();
    setShowForm(false);
  };
  const handleDeleteTweet = (id) => {
    deleteTweet(id);
    loadTweets();
  };
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark">
        <div className="bg-darker border-b border-gray-700 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/"><button className="text-gray-400 hover:text-white">← BACK</button></Link>
            <h1 className="text-2xl font-bold text-primary">THE TWEETS</h1>
            <div></div>
          </div>
        </div>
        {!showForm && (
          <div className="bg-darker border-b border-gray-700 px-4 py-6">
            <div className="max-w-2xl mx-auto">
              <button onClick={() => setShowForm(true)} className="w-full btn-primary text-center py-4 text-lg">
                + ADD TWEET EVIDENCE
              </button>
            </div>
          </div>
        )}
        {showForm && (
          <div className="bg-darker border-b border-gray-700 px-4 py-6">
            <div className="max-w-2xl mx-auto">
              <TweetForm onSubmit={handleAddTweet} onCancel={() => setShowForm(false)} />
            </div>
          </div>
        )}
        <div className="bg-dark px-4 py-6 border-b border-gray-700">
          <div className="max-w-2xl mx-auto">
            <SearchBar value={search} onChange={setSearch} placeholder="Search tweets..." />
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-gray-400 mb-6">{filteredTweets.length} TWEETS DOCUMENTED</div>
          {filteredTweets.length === 0 ? (
            <p className="text-gray-500 text-center py-12">No tweets found</p>
          ) : (
            <div className="space-y-4">
              {filteredTweets.map(tweet => (
                <TweetCard key={tweet.id} tweet={tweet} onDelete={handleDeleteTweet} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}