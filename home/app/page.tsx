import dynamic from "next/dynamic";

const OrderPage = dynamic(() => import('order/component'));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Main | Page</div>

      <OrderPage />
    </main>
  );
}
