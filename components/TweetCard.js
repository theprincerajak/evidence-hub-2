export default function TweetCard({ tweet, onDelete }) {
  return (
    <div className="card border-l-4 border-l-primary">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="font-bold text-white">{tweet.author}</p>
          {tweet.date && <p className="text-sm text-gray-400">{tweet.date}</p>}
        </div>
        <button onClick={() => onDelete(tweet.id)} className="text-gray-400 hover:text-red-500">✕</button>
      </div>
      <p className="text-gray-300 mb-4">{tweet.content}</p>
      <a href={tweet.tweetUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-orange-600 text-sm">View Tweet →</a>
    </div>
  );
}