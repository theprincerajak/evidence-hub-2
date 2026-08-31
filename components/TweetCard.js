export default function TweetCard({ tweet, onDelete }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <p className="font-bold text-black text-base">{tweet.author}</p>
          <p className="text-gray-600 text-sm">{tweet.date}</p>
        </div>
        <button
          onClick={() => onDelete(tweet.id)}
          className="text-gray-400 hover:text-red-500 transition text-xl"
        >
          ✕
        </button>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-3"></div>

      {/* Link Preview */}
      <a
        href={tweet.tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4 hover:bg-gray-100 transition"
      >
        <p className="text-primary font-bold text-sm">X.COM</p>
        <p className="text-black text-sm font-bold truncate">{tweet.author}</p>
        <p className="text-gray-600 text-xs line-clamp-2">Click to view full tweet</p>
      </a>

      {/* Actions */}
      <div className="flex justify-between text-gray-500 text-sm">
        <button className="flex items-center gap-2 hover:text-blue-400">💬</button>
        <button className="flex items-center gap-2 hover:text-green-400">♻️</button>
        <button className="flex items-center gap-2 hover:text-red-400">❤️</button>
        <a href={tweet.tweetUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">📤</a>
      </div>
    </div>
  );
}
