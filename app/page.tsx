// app/page.tsx (Example component)
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main
        className="flex min-h-screen flex-col items-center justify-center p-24
                      bg-gray-100 text-gray-900
                      dark:bg-gray-900 dark:text-gray-100
                      transition-colors duration-300"
      >
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <h1 className="text-4xl font-bold mb-8">
            Welcome to Next.js Dark Mode!
          </h1>
        </div>

        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <h3 className="text-2xl font-medium mb-8">
            This app supports both light and dark themes with persistent
            storage.
          </h3>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          {/* ... other links/content with dark mode styles ... */}
        </div>
      </main>
    </>
  );
}
