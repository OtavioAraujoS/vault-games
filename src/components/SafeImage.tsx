type SafeImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function SafeImage({ src, alt, ...props }: SafeImageProps) {
  const fallbackSrc = '/kirby.jpg';

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!e.currentTarget.src.endsWith(fallbackSrc)) {
      e.currentTarget.src = fallbackSrc;
    }
  };

  return (
    <img src={src || fallbackSrc} alt={alt} onError={handleError} {...props} />
  );
}
