import Image from "next/image"
const Navbar = () => {
    return (
        <div className="flex justify-center h-24 " >
            <div className="w-1/2 flex" >
                <Image src="/images/codeation.io.svg" alt="Codeation.io" width={187} height={20} />
            </div>
            <div className="flex w-1/3 justify-between items-center " >
                <h1 className="navbarH1" >Home</h1>
                <h1 className="navbarH1">Services</h1>
                <h1 className="navbarH1">About us</h1>
                <button className="navbarBtn">Contact us</button>
            </div>

        </div>
    )
}
export default Navbar