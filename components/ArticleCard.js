export default function ArticleCard({ article, onDelete }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <p className="font-bold text-black text-base line-clamp-2">{article.title}</p>
          <p className="text-gray-600 text-sm">{article.source} • {article.date}</p>
        </div>
        <button
          onClick={() => onDelete(article.id)}
          className="text-gray-400 hover:text-red-500 transition text-xl ml-2"
        >
          ✕
        </button>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-3"></div>

      {/* Description */}
      {article.description && (
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{article.description}</p>
      )}

      {/* Link Preview */}
      <a
        href={article.articleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition"
      >
        <p className="text-primary font-bold text-sm">READ ARTICLE</p>
        <p className="text-gray-600 text-xs truncate">{article.articleUrl}</p>
      </a>
    </div>
  );
}
