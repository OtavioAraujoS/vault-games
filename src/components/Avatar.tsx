import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from '@/components/ui/avatar';

interface AvatarProps {
  src: string;
  alt: string;
  fallback?: string;
}

export function Avatar({ src, alt, fallback }: AvatarProps) {
  return (
    <ShadcnAvatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback || 'ST'}</AvatarFallback>
    </ShadcnAvatar>
  );
}
