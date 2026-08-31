import { useState } from 'react';

export default function ArticleForm({ onSubmit, onCancel }) {
  const [articleUrl, setArticleUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!articleUrl.trim()) {
      setError('Please paste an article link');
      return;
    }

    if (!articleUrl.startsWith('http')) {
      setError('Please paste a valid URL');
      return;
    }

    setLoading(true);

    const articleData = {
      articleUrl: articleUrl,
      title: 'Article saved',
      source: new URL(articleUrl).hostname,
      date: new Date().toLocaleDateString(),
      description: 'Click to view full article',
    };

    setTimeout(() => {
      onSubmit(articleData);
      setArticleUrl('');
      setLoading(false);
    }, 300);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="url"
        value={articleUrl}
        onChange={(e) => setArticleUrl(e.target.value)}
        placeholder="https://example.com/article..."
        className="w-full bg-dark border border-gray-600 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:border-primary outline-none"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="flex gap-3">
        <button type="submit" disabled={loading} className="btn-primary flex-1 disabled:opacity-50">
          {loading ? 'ADDING...' : 'ADD ARTICLE'}
        </button>
        <button type="button" onClick={onCancel} className="btn-secondary flex-1">
          CANCEL
        </button>
      </div>
    </form>
  );
}
