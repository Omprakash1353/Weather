import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

interface WeatherSearchProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export const WeatherSearch = ({ onSearch, isLoading }: WeatherSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      setSearchQuery("");
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 sm:gap-3"
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search city..."
            className="w-full p-2 sm:p-3 md:p-4 pl-8 sm:pl-10 md:pl-12 rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            disabled={isLoading}
          />
          <Search
            size={16}
            className="absolute left-2.5 sm:left-3 md:left-4 top-2.5 sm:top-3.5 md:top-4 text-gray-400"
          />
        </div>
        <button
          type="submit"
          className={`p-2 sm:p-3 md:p-4 bg-blue-500 text-white rounded-full shadow-md flex items-center justify-center ${
            isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
          aria-label="Search"
          disabled={isLoading}
        >
          <Search size={16} className="sm:hidden" />
          <Search size={18} className="hidden sm:block md:hidden" />
          <Search size={20} className="hidden md:block" />
        </button>
      </form>
    </div>
  );
};

export default WeatherSearch;
