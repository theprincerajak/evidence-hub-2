export default function ArticleCard({ article, onDelete }) {
  return (
    <div className="card border-l-4 border-l-primary">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-white text-lg mb-1">{article.title}</h3>
          <div className="flex gap-3 text-sm text-gray-400">
            <span>{article.source}</span>
            {article.date && <span>•</span>}
            {article.date && <span>{article.date}</span>}
          </div>
        </div>
        <button onClick={() => onDelete(article.id)} className="text-gray-400 hover:text-red-500">✕</button>
      </div>
      {article.description && <p className="text-gray-300 mb-4">{article.description}</p>}
      <a href={article.articleUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-orange-600 text-sm">Read Article →</a>
    </div>
  );
}