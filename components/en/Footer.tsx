// components/Footer.tsx

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="container mx-auto px-4 text-center text-sm">
        <p className="mb-2 font-medium">© <i>Lovja 2025</i> All rights reserved.</p>
        {/* <p className="mb-2 font-medium">© <Link href="/" className="hover:underline"><i>BellunaDigital 2025</i></Link> Minden jog fenntartva.</p> */}
        <div className="flex justify-center space-x-4">
          <Link href="/aszf" className="hover:underline font-semibold">
          Terms & Conditions
          </Link>
          <Link href="/adatvedelem" className="hover:underline font-semibold">
          Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
