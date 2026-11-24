const seasons = ["winter", "spring", "summer", "fall"];

function getSeason(date = new Date()) {
  const month = date.getMonth();
  const year = date.getFullYear();

  const seasonIndex = Math.floor(month / 3);
  const season = seasons[seasonIndex];

  const nextSeasonIndex = (seasonIndex + 1) % 4;
  const nextSeason = seasons[nextSeasonIndex];
  const nextYear = nextSeasonIndex === 0 ? year + 1 : year;

  return {
    current: { season: season, year: year },
    next: { season: nextSeason, year: nextYear },
  };
}

export default getSeason;
