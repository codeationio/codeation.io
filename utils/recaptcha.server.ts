export type RecaptchaVerifyResponse = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
  action: string;
  'error-codes': string[];
};

export const verifyRecaptcha = async (token: string): Promise<RecaptchaVerifyResponse> => {
  return fetch('https://www.google.com/recaptcha/api/siteverify', {
    body: `secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  }).then((res) => res.json());
};
