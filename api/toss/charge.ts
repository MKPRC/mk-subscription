import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { billingKey, customerKey } = req.body;

  const response = await fetch('https://api.tosspayments.com/v1/billing/authorizations', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.TOSS_SECRET_KEY + ':').toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      billingKey,
      customerKey,
      amount: 9900,
      orderId: 'auto_' + Date.now(),
      orderName: 'MK Flow 정기 결제'
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
