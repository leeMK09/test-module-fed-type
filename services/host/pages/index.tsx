import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
const OrderTitle = dynamic(() => import('order/title'), {
  ssr: false,
});

export default function Home() {
  const [state, setState] = useState();

  return (
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>PAGES | HOME</div>

      <code>remote/order/title</code>
      <div>State: {state}</div>
      <OrderTitle setState={setState} />
    </main>
  )
}
