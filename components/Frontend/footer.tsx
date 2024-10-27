import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    1on1 Coaching
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Company Review
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Accounts Review
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    HR Consulting
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    SEO Optimisation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Meet the Team
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Careers
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                Helpful Links
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/login"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    href="/signup"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    sign up
                  </Link>
                </li>

                <li>
                  <Link
                    href="/ListService"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    List your service
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">Downloads</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Marketing Calendar
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    SEO Infographics
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                stay upto date
              </p>

              <Button className="mt-6">Subscribe to newsletter</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy; 2022. Company Name. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
