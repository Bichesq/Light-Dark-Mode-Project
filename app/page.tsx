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

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h3>The Man of the people</h3>
          <div className="border-2 border-gray-300 p-4 rounded-lg w-100 h-50">
            <h4>John Smith</h4>
            <p>Age: 30</p>
            <p>Occupation: Software Engineer</p>
          </div>
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
