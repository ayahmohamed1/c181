import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Happy Birthday habiby! 🎂',
  description: 'A special birthday message for habiby',
  openGraph: {
    title: 'Happy Birthday habiby! 🎂',
    description: 'A special birthday message for habiby',
    url: '/',
    siteName: 'Happy Birthday',
    images: [
      {
        url: '/images/chat.jpg',
        alt: 'Happy Birthday',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Birthday habiby! 🎂',
    description: 'A special birthday message for habiby',
    images: ['/images/chat.jpg'],
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.aya
  return <GiftClient data={data} />
}
