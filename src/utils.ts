const formatTimeUnit = (timeUnit: number) =>
  timeUnit.toString().padStart(2, '0');

export const formatTime = (seconds: number) => {
  const min = Math.floor(seconds / 60);
  const sec = seconds - min * 60;

  return `${formatTimeUnit(min)}:${formatTimeUnit(sec)}`;
};
