import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start pt-20 min-h-screen text-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome!</h1>
      <p className="text-lg text-gray-600">
        Here are some of the most recent movies
      </p>
    </div>
  );
}
