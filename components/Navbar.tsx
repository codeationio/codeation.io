import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="flex h-24">
      <Image
        alt="Codeation.io"
        className="alternate:brightness-0  alternate:invert"
        height={20}
        src="/images/codeation.io.svg"
        width={187}
      />
      <div className="ml-auto hidden items-center space-x-6 lg:flex">
        <h1 className="navbarH1">
          <a href="/">Home</a>
        </h1>
        <h1 className="navbarH1">
          <a href="/">Services</a>
        </h1>
        <h1 className="navbarH1">
          <a href="/about">About us</a>
        </h1>
        <button className="navbarBtn">Contact us</button>
      </div>
    </div>
  );
};
export default Navbar;
