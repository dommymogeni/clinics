import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <form className="mx-auto max-w-full">
      <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Search
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-7">
          <SearchIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </div>

        <input
          type="search"
          id="default-search"
          className="block w-full rounded-full border border-gray-300 bg-gray-50 p-4 ps-12 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search doctors, procedures..."
          required
        />

        <button
          type="submit"
          className="absolute bottom-1.5 end-2.5 rounded-full bg-blue-700 px-4 py-3 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}
