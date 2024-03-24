import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Buy',
      action: 'link',
      target: `https://github.com/open-frames/awesome-open-frames`,
    },
    {
      label: 'Get Info',
      action: 'post',
    },
  ],
  postUrl: `${NEXT_PUBLIC_URL}/api/prs`,
  // image: `${NEXT_PUBLIC_URL}/picture.png`,
  image: `${NEXT_PUBLIC_URL}/frames/image`,
});

export const metadata: Metadata = {
  title: 'Shop Frame',
  description: 'Shop Frames',
  openGraph: {
    title: 'Shop Frame',
    description: 'Shop Frames',
    images: [`${NEXT_PUBLIC_URL}/picture.png`],
  },
  other: {
    ...frameMetadata,
    'of:accepts:xmtp': '2024-03-23',
  },
};

export default function Page() {
  return (
    <>
      <h1>Shop Frame</h1>
    </>
  );
}
