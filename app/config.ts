export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:3000'
    : 'https://awesome-open-frames.vercel.app';
