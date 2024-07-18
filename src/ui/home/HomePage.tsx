import React from "react";
import { Text } from '@/components';
import clsx from 'clsx';


export default function HomePage() {
  return (
    <main 
      className={clsx(
        'relative',
        'w-full',
        'justify-center'
      )}>
      <Text textType="heading" className={clsx('text-4xl')}>Exchange Rates</Text>
      <br/>
      <section>
        <div className={clsx('flex', 'flex-col')}>
          <Text textType="subtitle" className={clsx('text-sm', 'text-gray-500')}>
            1 Rupiah Indonesia sama dengan
          </Text>
          <Text textType="subtitle" className={clsx('text-sm', 'text-gray-500')}>
            0,000000 Dolar
          </Text>
          <Text textType="subtitle" className={clsx('text-sm', 'text-gray-500')}>
            Amerika serikat
          </Text>
        </div>
      </section>
      <section></section>
    </main>
  );
}
