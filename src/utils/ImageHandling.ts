export function ImageHandling(imageUrl: string | null | undefined): string {
  const fallback = '/kirby.jpg';
  if (!imageUrl || imageUrl.trim() === '') {
    return fallback;
  }
  return imageUrl;
}
