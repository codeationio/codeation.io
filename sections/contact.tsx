import Button from 'components/Button';
import Input from 'components/input';
import Image from 'next/future/image';
import { FormEventHandler, useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<Record<string, string>>({});

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    setLoading(true);
    const target = e.currentTarget;
    e.preventDefault();
    grecaptcha.ready(async () => {
      const token = await grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT, { action: 'submit' });

      const data = new FormData(document.querySelector('form'));

      const dataObj = {};

      data.forEach((val, key) => (dataObj[key] = val));

      const err = {};

      if (!dataObj['email']) {
        err['email'] = "Email is required. Don't bypass it.";
      }
      if (!dataObj['firstName']) {
        err['firstName'] = "Don't wanna give your first name? Who will we reach out to then?";
      }
      if (!dataObj['lastName']) {
        err['lastName'] = 'Last name is required as well!';
      }

      setError(err);

      if (Object.keys(err).length) {
        return;
      }

      await fetch('/api/v1/contact', {
        body: JSON.stringify({
          ...dataObj,
          token,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      target.reset();
      setLoading(false);
      setSubmitted(true);
    });
  };

  return (
    <form className="flex flex-col space-y-12 rounded-lg bg-light-grey p-10" onSubmit={handleSubmit}>
      <h4 className="flex items-center space-x-4 text-4xl font-semibold text-secondary">
        <span className="flex rounded bg-primary p-2">
          <Image alt="mail" height={45} src="/images/mail.svg" width={45} />
        </span>
        <span>Say Hey!!</span>
      </h4>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <Input required error={error.firstName} name="firstName" placeholder="First Name" type="text" />
          <Input error={error.lastName} name="lastName" placeholder="Last Name" type="text" />
        </div>

        <div className="flex space-x-4">
          <Input required error={error.email} name="email" placeholder="Your Email" type="email" />
          <Input required error={error.number} name="number" placeholder="Your Phone No." type="tel" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-khula text-grey" htmlFor="message">
            Message:
          </label>
          <textarea
            required
            className="rounded px-5 py-4 font-khula text-secondary outline-0"
            cols={20}
            name="message"
            placeholder="Your text here"
            rows={7}
          />
        </div>
        <Button disabled={submitted} loading={loading} type="submit">
          {loading ? 'Sending...' : 'Send'}
        </Button>
        {submitted && <p className="text-md text-primary">Thank you for the message. We will reach out to you ASAP.</p>}
      </div>
    </form>
  );
};
export default Contact;
