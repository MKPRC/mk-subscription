import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { authKey, customerKey } = req.query;

  const result = await fetch('https://api.tosspayments.com/v1/billing/authorizations/issue', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.TOSS_SECRET_KEY + ':').toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ authKey, customerKey })
  });

  const data = await result.json();
  console.log('✅ 발급된 BillingKey:', data.billingKey);

  res.redirect('/subscribe?success=true');
}
