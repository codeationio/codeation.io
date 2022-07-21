import Input from "components/input";
import Image from 'next/image';

const Contact = () => {
    return (
        <form className="bg-light-grey rounded-lg p-10 flex flex-col space-y-12">
            <h4 className="text-4xl	font-semibold text-secondary flex items-center space-x-4">
                <span className="p-2 bg-primary rounded flex">
                    <Image alt="mail" height={45} src="/images/mail.svg" width={45} />
                </span>
                <span>Say Hey!!</span></h4>
            <div className="flex flex-col space-y-6">
                <div className="flex space-x-4">
                    <Input type="text" name="First Name" placeholder="First Name"/>
                    <Input type="text" name="last name" placeholder="Last Name"/>
                </div>
                <div className="flex space-x-4">
                    <Input type="email" name="email" placeholder="Your Email"/>
                    <Input type="number" name="phone number" placeholder="Your Phone No."/>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-grey font-khula">Message:</label>
                    <textarea cols={20} rows={7} id='message' className="outline-0 px-5 py-4 rounded font-khula text-secondary" placeholder="Your text here"></textarea>
                </div>
                <input type="submit" value="Send" className="bg-primary text-white py-4 rounded text-xl"/>
            </div>
        </form>
    );
};
export default Contact;