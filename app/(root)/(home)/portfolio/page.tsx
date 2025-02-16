import PortFolioSection from '@/components/PortFolioSection';
import { portfolios } from '@/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Portfolio - Roushan Kumar',
};

const Page = () => {
  return (
    <>
      <section className='max-width section-padding'>
        <div className='box text-center flex flex-col items-center gap-3'>
        <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5'>
          <Image src="/icons/stars.svg" alt="icon" width={35} height={35} />
        </div>
        <h2 className="text-gray-700">My Creative Portfolios</h2>
        <p className="text-gray-600">
        My creative portfolio showcases a range of innovative projects and designs that reflect my expertise and vision. Each piece demonstrates my commitment to delivering exceptional and impactful solutions.
        </p>
        </div>
      </section>

      <PortFolioSection data={portfolios} title={"Projects Done in 2023"}/>
    </>
  );
};

export default Page;
