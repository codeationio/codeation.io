import Image from 'next/future/image';
import { FormEventHandler, useState } from 'react';
import { isValidEmail } from 'utils';

import Input from './input';
import Section from './Section';

const GetInTouch = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<Record<string, string>>({});
  const [email, setEmail] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    setLoading(true);
    e.preventDefault();
    grecaptcha.ready(async () => {
      const token = await grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT, { action: 'submit' });

      if (!isValidEmail(email)) {
        setError((e) => ({ ...e, email: 'Email to sahi dedo yr.' }));
        setLoading(false);
        return;
      }

      await fetch('/api/v1/subscribe', {
        body: JSON.stringify({
          email,
          token,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      setError((e) => ({ ...e, email: '' }));
      setLoading(false);
      setSubmitted(true);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Section className="flex h-auto flex-col justify-around space-y-7 sm:h-64 sm:flex-row sm:p-0 xl:h-40 xl:flex-row xl:p-0">
        <h1 className="flex flex-col justify-center text-2xl font-semibold leading-10 text-secondary md:text-4xl xl:text-4xl">
          Ready to work with us? <br /> <span className="text-primary">Get in touch </span>{' '}
        </h1>
        <div className="relative flex items-center">
          <div className="flex h-14 rounded-lg bg-white">
            <Input
              className={`${error.email && 'border border-r-0 border-error'} ${submitted && 'border border-r-0 border-primary'}`}
              disabled={loading || submitted}
              error={error.email}
              name="email"
              placeholder="Your Email : "
              type="email"
              value={email}
              variant="filled"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="flex items-center justify-center rounded-r-lg bg-primary px-7 disabled:opacity-70"
              disabled={loading || submitted}
              type="submit">
              <Image alt="Get in touch" className="h-full" height="28" src="/images/send_icon.svg" width="28" />
            </button>
          </div>
          {submitted && (
            <p className="text-md absolute bottom-0 text-primary">Thank you for showing interest. Look forward to hearing back from us.</p>
          )}
        </div>
      </Section>
    </form>
  );
};
export default GetInTouch;
