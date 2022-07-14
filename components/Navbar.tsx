import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="flex h-24 max-w-full justify-between">
      <div className="flex w-1/2">
        <Image alt="Codeation.io" height={20} src="/images/codeation.io.svg" width={187} />
      </div>
      <div className="flex w-1/3 items-center justify-between ">
        <h1 className="navbarH1">Home</h1>
        <h1 className="navbarH1">Services</h1>
        <h1 className="navbarH1">About us</h1>
        <button className="navbarBtn">Contact us</button>
      </div>
    </div>
  );
};
export default Navbar;
