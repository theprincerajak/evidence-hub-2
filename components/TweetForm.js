import { useState } from 'react';

export default function TweetForm({ onSubmit, onCancel }) {
  const [tweetUrl, setTweetUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!tweetUrl.trim()) {
      setError('Please paste a tweet link');
      return;
    }

    if (!tweetUrl.includes('x.com') && !tweetUrl.includes('twitter.com')) {
      setError('Please paste a valid X/Twitter link (https://x.com/user/status/...))');
      return;
    }

    setLoading(true);

    // Extract author from URL
    const authorMatch = tweetUrl.match(/x\.com\/([a-zA-Z0-9_]+)/);
    const author = authorMatch ? `@${authorMatch[1]}` : '@User';

    // Create tweet data
    const tweetData = {
      tweetUrl: tweetUrl,
      author: author,
      content: 'Tweet saved',
      date: new Date().toLocaleDateString(),
    };

    setTimeout(() => {
      onSubmit(tweetData);
      setTweetUrl('');
      setLoading(false);
    }, 300);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="url"
        value={tweetUrl}
        onChange={(e) => setTweetUrl(e.target.value)}
        placeholder="https://x.com/user/status/..."
        className="w-full bg-dark border border-gray-600 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:border-primary outline-none"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="flex gap-3">
        <button type="submit" disabled={loading} className="btn-primary flex-1 disabled:opacity-50">
          {loading ? 'ADDING...' : 'ADD TWEET'}
        </button>
        <button type="button" onClick={onCancel} className="btn-secondary flex-1">
          CANCEL
        </button>
      </div>
    </form>
  );
}
