import Button from '../Button';
import { RiSendPlaneFill } from 'react-icons/ri';

const Form = () => {
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/register', {
      body: JSON.stringify({
        name: event.target.name.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    // result.user => 'Ada Lovelace'
  };
  return (
    <div>
      <p className="text-5xl text-center font-normal mb-5">
        Have Some Questions?
      </p>
      <form onSubmit={registerUser}>
        <div className="flex flex-row justify-between mt-12 ">
          <div className="flex flex-col text-xl w-1/2 ">
            <input
              name="email"
              type="text"
              autoComplete="name"
              required
              placeholder="Email Here"
              className="w-11/12 h-20 mb-5 rounded-3xl p-6"
            />
            <input
              name="sub1"
              type="text"
              autoComplete="name"
              required
              placeholder="Your Subject"
              className=" w-11/12 h-20 mb-5 rounded-3xl p-6"
            />
            <input
              id="sub1"
              name="sub1"
              type="text"
              autoComplete="name"
              required
              placeholder="Your Subject"
              className="h-20 w-11/12 mb-5 rounded-3xl p-6"
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <textarea
              id="sub1"
              name="sub1"
              type="text"
              autoComplete="name"
              required
              placeholder="Your Questions or request goes here"
              className="w-auto h-52 mb-5 text-xl rounded-3xl p-6"
            />
            <Button
              type="submit"
              className="border w-auto p-[24px] text-2xl bg-primary font-medium rounded-3xl text-white flex justify-center items-end"
            >
              Send Message
              <RiSendPlaneFill />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
