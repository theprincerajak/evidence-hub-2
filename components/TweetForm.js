import { useState } from 'react';
export default function TweetForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({ tweetUrl: '', author: '', content: '', date: '' });
  const [error, setError] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!formData.tweetUrl || !formData.author || !formData.content) {
      setError('Please fill all required fields');
      return;
    }
    onSubmit(formData);
    setFormData({ tweetUrl: '', author: '', content: '', date: '' });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-2">Tweet URL *</label>
        <input type="url" name="tweetUrl" value={formData.tweetUrl} onChange={handleChange} placeholder="https://x.com/user/status/..." className="w-full bg-dark border border-gray-600 rounded px-4 py-2 text-white" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 mb-2">Author *</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="@username" className="w-full bg-dark border border-gray-600 rounded px-4 py-2 text-white" />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-dark border border-gray-600 rounded px-4 py-2 text-white" />
        </div>
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Content *</label>
        <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Tweet content..." rows="4" className="w-full bg-dark border border-gray-600 rounded px-4 py-2 text-white" />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="flex gap-4">
        <button type="submit" className="btn-primary flex-1">SUBMIT</button>
        <button type="button" onClick={onCancel} className="btn-secondary flex-1">CANCEL</button>
      </div>
    </form>
  );
}