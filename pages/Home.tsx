import Navbar from "components/Navbar"
import Image from "next/image"

const Hero = () =>{
    return (
        <>
        <Navbar />
        <div>
            <div>

            </div>
            <div>
            <Image src="/images/hero_section.svg" alt="Hero_Section" width={460} height={470} />
            </div>
        </div>
        </>
    )

}
export default Hero