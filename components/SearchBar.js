export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="relative">
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full bg-darker border border-gray-600 rounded px-4 py-3 text-white" />
      <span className="absolute right-4 top-3 text-gray-500">🔍</span>
    </div>
  );
}