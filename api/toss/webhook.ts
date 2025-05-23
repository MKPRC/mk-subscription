import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const event = req.body;
  console.log('📩 Toss Webhook 수신:', event);

  if (event.status === 'DONE') {
    console.log('✅ 결제 완료:', event.customerKey);
  } else if (event.status === 'CANCELED') {
    console.log('❌ 결제 취소:', event.customerKey);
  }

  res.status(200).json({ message: 'ok' });
}

export const config = {
  api: {
    bodyParser: true,
  },
};
