import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import ArticleForm from '../../components/ArticleForm';
import ArticleCard from '../../components/ArticleCard';
import SearchBar from '../../components/SearchBar';
import { getArticles, addArticle, deleteArticle } from '../../lib/storage';
import Link from 'next/link';
export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    loadArticles();
  }, []);
  useEffect(() => {
    if (search.trim() === '') {
      setFilteredArticles(articles);
    } else {
      const query = search.toLowerCase();
      setFilteredArticles(
        articles.filter(article =>
          article.title.toLowerCase().includes(query) || article.source.toLowerCase().includes(query)
        )
      );
    }
  }, [search, articles]);
  const loadArticles = () => setArticles(getArticles());
  const handleAddArticle = (articleData) => {
    addArticle(articleData);
    loadArticles();
    setShowForm(false);
  };
  const handleDeleteArticle = (id) => {
    deleteArticle(id);
    loadArticles();
  };
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark">
        <div className="bg-darker border-b border-gray-700 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/"><button className="text-gray-400 hover:text-white">← BACK</button></Link>
            <h1 className="text-2xl font-bold text-primary">THE ARTICLES</h1>
            <div></div>
          </div>
        </div>
        {!showForm && (
          <div className="bg-darker border-b border-gray-700 px-4 py-6">
            <div className="max-w-2xl mx-auto">
              <button onClick={() => setShowForm(true)} className="w-full btn-primary text-center py-4 text-lg">
                + ADD ARTICLE EVIDENCE
              </button>
            </div>
          </div>
        )}
        {showForm && (
          <div className="bg-darker border-b border-gray-700 px-4 py-6">
            <div className="max-w-2xl mx-auto">
              <ArticleForm onSubmit={handleAddArticle} onCancel={() => setShowForm(false)} />
            </div>
          </div>
        )}
        <div className="bg-dark px-4 py-6 border-b border-gray-700">
          <div className="max-w-2xl mx-auto">
            <SearchBar value={search} onChange={setSearch} placeholder="Search articles..." />
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-gray-400 mb-6">{filteredArticles.length} ARTICLES DOCUMENTED</div>
          {filteredArticles.length === 0 ? (
            <p className="text-gray-500 text-center py-12">No articles found</p>
          ) : (
            <div className="space-y-6">
              {filteredArticles.map(article => (
                <ArticleCard key={article.id} article={article} onDelete={handleDeleteArticle} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}