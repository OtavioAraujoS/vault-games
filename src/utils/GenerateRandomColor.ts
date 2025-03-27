export const generateRandomColor = (): string => {
  const red = Math.floor(40 + Math.random() * 50);
  const green = Math.floor(70 + Math.random() * 50);
  const blue = Math.floor(20 + Math.random() * 105);
  return `#${((1 << 24) + (red << 16) + (green << 8) + blue)
    .toString(16)
    .slice(1)}`;
};
