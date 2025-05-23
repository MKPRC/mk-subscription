import { useEffect } from 'react';

export default function Subscribe() {
  const requestBilling = () => {
    const tossPayments = (window as any).TossPayments('mkincm05pq');

    tossPayments.requestBillingAuth('카드', {
      amount: 9900,
      customerKey: 'mk_user_1234',
      orderId: 'order_' + Date.now(),
      orderName: 'MK 구독 멤버십',
      successUrl: 'https://www.mkprotocol.com/api/toss/success',
      failUrl: 'https://www.mkprotocol.com/subscribe?fail=true',
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.tosspayments.com/v1/billing';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-blue-50 text-gray-800 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">✨ MK 정기 구독</h1>
        <p className="text-base mb-4">구독을 시작하려면 아래 버튼을 눌러주세요.</p>
        <button
          onClick={requestBilling}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
        >
          구독 시작하기 (₩9,900/월)
        </button>
      </div>
    </main>
  );
}
