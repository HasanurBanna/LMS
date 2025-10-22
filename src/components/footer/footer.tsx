import Link from "next/link";
import Logo from "../logo/logo";

const Footer = () => {
  return (
    <>
      <footer className="bg-bgfooter dark:bg-transparent  px-15 py-15 flex justify-center items-center">
        <div>
          {/* logo */}
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="px-16 mb-8 md:mb-0">
              <Logo />
            </div>
            <h1 className="text-white py-8 md:py-0 px-8  border-t md:border-l md:border-t-0 md:max-w-[170px] font-semibold">
              Virtual class for Zoom
            </h1>
          </div>

          {/* subscribe option */}
          <div className="flex flex-col justify-center items-center py-8">
            <h1 className="text-gray-400">Subscribe to get our Newsletter</h1>
            <div className="mt-3 flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="pr-10 pl-4 py-2 border-gray-400 text-gray-300 border rounded-full"
              />
              <Link
                href={"/#"}
                className="px-8 py-2 bg-bgsecondary text-white rounded-full"
              >
                Subscribe
              </Link>
            </div>
          </div>

          {/* copyright section amd footer link */}
          <div>
            <div className="text-lg text-gray-400 flex flex-wrap justify-center gap-4 mt-6">
              <Link href={"/"}>Careers</Link>
              <span>|</span>
              <Link href={"/"}>Privacy Policy</Link>
              <span>|</span>
              <Link href={"/"}>Terms & Conditions</Link>
            </div>
            <p className="text-lg text-gray-400 mt-2 text-center">
              © 2021 Class Technologies Inc.{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
