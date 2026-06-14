import { MediaLinks } from '@/constants/footer';

export default function FooterMedia() {
  return (
    <div className="flex gap-[20px]">
      {MediaLinks.map((media) => (
        <a
          key={media.name}
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
        >
          <media.icon />
        </a>
      ))}
    </div>
  );
}
