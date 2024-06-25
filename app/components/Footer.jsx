import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <div className="bg-gray-900 text-white">
      <div className="relative py-4">
        <div className="text-center">
          <Link
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Privacy
          </Link>
          <span className="mx-2 text-gray-500">|</span>
          <Link
            href="https://jstemplate.net/terms-license"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Terms
          </Link>
          <span className="mx-2 text-gray-500">|</span>
          <p className="text-gray-400" suppressHydrationWarning>
            Copyright © {current_year}, Robbie-Donoghue. All Rights Reserved.
          </p>
        </div>
        <Link
          href="https://github.com/Robbie-donoghue"
          className="absolute bottom-4 right-4"
        >
          <Image
            src="https://www.pngkey.com/png/detail/178-1787508_github-icon-download-at-icons8-white-github-icon.png"
            alt={`image of github cat`}
            width={50}
            height={50}
            className="w-12 h-12 object-cover object-fit-cover"
          />
        </Link>
      </div>
    </div>
  );
}
