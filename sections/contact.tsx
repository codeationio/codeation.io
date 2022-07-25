import Input from 'components/input';
import Image from 'next/image';

const Contact = () => {
  return (
    <form className="flex  flex-col space-y-12 rounded-lg bg-light-grey p-10">
      <h4 className="flex items-center space-x-4 text-4xl font-semibold text-secondary">
        <span className="flex rounded bg-primary p-2">
          <Image alt="mail" height={45} src="/images/mail.svg" width={45} />
        </span>
        <span>Say Hey!!</span>
      </h4>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Input name="First Name" placeholder="First Name" type="text" />
          <Input name="last name" placeholder="Last Name" type="text" />
        </div>
        <div className="flex space-x-4">
          <Input name="email" placeholder="Your Email" type="email" />
          <Input name="phone number" placeholder="Your Phone No." type="tel" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-khula text-grey" htmlFor="message">
            Message:
          </label>
          <textarea
            className="rounded px-5 py-4 font-khula text-secondary outline-0"
            cols={20}
            id="message"
            placeholder="Your text here"
            rows={7}></textarea>
        </div>
        <input
          alt="Submit"
          className="rounded bg-primary py-4 text-xl text-white"
          type="submit"
          value={`Send`}
        />
      </div>
    </form>
  );
};
export default Contact;
