import { useState } from 'react';
export default function ArticleForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({ articleUrl: '', title: '', source: '', date: '', description: '' });
  const [error, setError] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!formData.articleUrl || !formData.title || !formData.source) {
      setError('Please fill all required fields');
      return;
    }
    onSubmit(formData);
    setFormData({ articleUrl: '', title: '', source: '', date: '', description: '' });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-2">Article URL *</label>
        <input type="url" name="articleUrl" value={formData.articleUrl} onChange={handleChange} placeholder="https://example.com/article" className="w-full bg-dark border border-gray-600 rounded px-4 py-2 text-white" />
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Title *</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Article title..." className="w-full bg-dark border border-gray-600 rounded px-4 py-2 text-white" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 mb-2">Source *</label>
          <input type="text" name="source" value={formData.source} onChange={handleChange} placeholder="News outlet" className="w-full bg-dark border border-gray-600 rounded px-4 py-2 text-white" />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-dark border border-gray-600 rounded px-4 py-2 text-white" />
        </div>
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Brief description..." rows="4" className="w-full bg-dark border border-gray-600 rounded px-4 py-2 text-white" />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="flex gap-4">
        <button type="submit" className="btn-primary flex-1">SUBMIT</button>
        <button type="button" onClick={onCancel} className="btn-secondary flex-1">CANCEL</button>
      </div>
    </form>
  );
}