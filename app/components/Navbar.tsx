
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-white">
            <div>
                <h1 className="text-2xl font-bold">Dark Mode prod</h1>
            </div>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div>
                <ThemeToggle />
            </div>
        </nav>
    );
}