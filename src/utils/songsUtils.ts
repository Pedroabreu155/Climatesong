// eslint-disable-next-line consistent-return
export const getSongGenre = (temperature: number) => {
  if (temperature >= 32) {
    return 'genre-global-chart-7'; // ROCK
  }
  if (temperature < 32 && temperature >= 24) {
    return 'genre-global-chart-1'; // Pop
  }
};
