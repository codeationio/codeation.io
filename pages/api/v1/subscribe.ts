import { NextApiHandler } from 'next';
import { appendSheet } from 'services/googleSheet.server';
import { verifyRecaptcha } from 'utils/recaptcha.server';

const subscribe: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end('Method not allowed');
    return;
  }

  const { email, token } = req.body;

  const result = await verifyRecaptcha(token);
  if (!result.success) {
    res.status(400).end('Bad request');
    return;
  }

  const rows = [[new Date().toLocaleString(), email]];
  const range = 'Subscribe';
  await appendSheet(range, rows);

  res.status(200).json({ body: req.body, message: 'Thanks for subscribing to us!', status: 'success' });
};

export default subscribe;
