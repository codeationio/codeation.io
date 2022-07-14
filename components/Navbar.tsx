import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="flex h-24">
      <Image alt="Codeation.io" height={20} src="/images/codeation.io.svg" width={187} />
      <div className="ml-auto hidden items-center space-x-6 lg:flex">
        <h1 className="navbarH1">Home</h1>
        <h1 className="navbarH1">Services</h1>
        <h1 className="navbarH1">About us</h1>
        <button className="cursor-pointer rounded border-2 border-primary px-5 py-1 text-lg font-semibold text-primary">
          Contact us
        </button>
      </div>
    </div>
  );
};
export default Navbar;
