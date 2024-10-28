import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w=7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              CineBuzz
            </Link>
            <div className="hidden md:flex space-x-4 ml-10">
              <Link
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover: text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:bg-gray-700 hover: text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:bg-gray-700 hover: text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}