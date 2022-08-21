import Image from 'next/future/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="flex items-center px-4 py-6 lg:h-24 xl:h-24">
      <Link href="/">
        <a>
          <figure className="flex">
            <Image
              alt="Codeation.io - BRIDGING THE GAP BETWEEN TECHNOLOGY AND BUSINESS"
              className="alternate:brightness-0  alternate:invert"
              height={20}
              src="/images/codeation.io.svg"
              width={187}
            />
          </figure>
        </a>
      </Link>
      <div className="ml-auto hidden items-center space-x-20 font-khula lg:flex xl:flex">
        <Link href="/">
          <a className="nav-item">Home</a>
        </Link>
        <Link href="/about">
          <a className="nav-item">About Us</a>
        </Link>
        <Link href="/#services">
          <a className="nav-item">Services</a>
        </Link>
        <Link href="/contact-us">
          <a className="nav-btn">Contact us</a>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
