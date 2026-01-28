import Link from "next/link";
// import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-[#159C47]"
        >
          Padisquare
        </Link>

        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
