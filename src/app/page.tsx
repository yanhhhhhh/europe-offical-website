import { redirect } from 'next/navigation';
import { defaultLocale } from '@/constants/navigation';

export default function Home() {
  redirect(`/${defaultLocale}`);
}
