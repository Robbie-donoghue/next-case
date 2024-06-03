import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="bg-gray-900 py-4 ">
        <div className="container mx-auto flex justify-between items-center px-4  ">
          <Link
            href="https://react.dev"
            className="text-white font-bold text-lg hover:underline"
          >
            React docs
          </Link>
          <Link
            href="https://nextjs.org/docs"
            className="text-white font-bold text-lg hover:underline"
          >
            Next docs
          </Link>
          <Link
            href="https://zod.dev/?id=introduction"
            className="text-white font-bold text-lg hover:underline"
          >
            zods painful docs
          </Link>
        </div>
      </nav>
    </>
  );
}
