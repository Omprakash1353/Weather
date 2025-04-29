import { Github } from "lucide-react";

export function Header() {
  return (
    <header className="flex justify-between items-center absolute top-5 px-5 w-full">
      <div className="text-xl sm:text-2xl md:text-xl font-semibold text-white rounded-2xl bg-white/20 backdrop-blur-lg px-4 py-2">
        <a
          href="https://github.com/Omprakash1353/Math_Server/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-900 transition duration-200"
        >
          Math Server Github
        </a>
      </div>

      <div className="rounded-full bg-white/20 backdrop-blur-lg p-2 sm:p-3 md:p-4 lg:p-5 shadow-lg">
        <a
          href="https://github.com/Omprakash1353/Weather"
          target="_blank"
          rel="noopener noreferrer"
          aria-haspopup="true"
          aria-label="GitHub"
          className="text-white text-3xl hover:text-gray-900 duration-200 transition"
        >
          <Github />
        </a>
      </div>
    </header>
  );
}
