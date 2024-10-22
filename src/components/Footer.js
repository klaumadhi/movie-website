import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
export const Footer = () => {
  return (
    <footer>
      <footer className="mt-auto bg-white shadow dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
            >
              <img src={Logo} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                MovieSpot
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://www.instagram.com/klaumadhi/"
                  rel="noreferrer"
                  target="_blank"
                  className="hover:underline me-4 md:me-6"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/klaurent-madhi-9b8607233/"
                  rel="noreferrer"
                  target="_blank"
                  className="hover:underline me-4 md:me-6"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/klaurent-madhi-9b8607233/"
                  rel="noreferrer"
                  target="_blank"
                  className="hover:underline me-4 md:me-6"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/klaurent-madhi-9b8607233/"
                  rel="noreferrer"
                  target="_blank"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              MovieSpot
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </footer>
  );
};
