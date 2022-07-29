// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiHandler } from 'next';
import { appendSheet } from 'services/googleSheet.server';
import { verifyRecaptcha } from 'utils/recaptcha.server';

const contactUs: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end('Method not allowed');
    return;
  }

  const { email, firstName, lastName, message, number, token } = req.body;

  const result = await verifyRecaptcha(token);
  if (!result.success) {
    res.status(400).end('Bad request');
    return;
  }

  // Appned to Google Sheet
  const rows = [[firstName, lastName, email, number, message, new Date().toLocaleString()]];
  const range = 'ContactForm';
  await appendSheet(range, rows);

  res.status(200).json({ body: req.body, message: 'Thanks for contacting us!', status: 'success' });
};

export default contactUs;
