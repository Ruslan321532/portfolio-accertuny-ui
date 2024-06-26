'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Tabs } from '@/src/components/ui/tabs';

export function TabsProjects() {
  const tabs = [
    {
      title: 'Trello Clone',
      value: 'trello-clone',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Trello With ShadcnUi</p>
          <ImageContainer
            src="/project/trello-clone.jpg"
            href="https://trello-clone-rusya.netlify.app/"
          />
        </div>
      ),
    },
    {
      title: 'Movix TV',
      value: 'movix-tv',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Website for watching movies/series</p>
          <ImageContainer
            src="/project/movix-tv.jpg"
            href="https://rusya-mv-tv.netlify.app/"
          />
        </div>
      ),
    },
    {
      title: 'Portfolio',
      value: 'portfolio',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>My new Portfolio</p>
          <ImageContainer
            src="/project/portfolio.jpg"
            href="https://github.com/Ruslan321532/portfolio"
          />
        </div>
      ),
    },
  ];

  return (
    <div id='projects' className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 gap-10">
      <h2 className="font-bold text-4xl text-white">Best Project</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

function ImageContainer({ src, href }: { src: string; href: string }) {
  return (
    <Link href={href ?? ''} target="_blank">
      <Image
        src={src}
        alt="dummy image"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto "
      />
    </Link>
  );
}
