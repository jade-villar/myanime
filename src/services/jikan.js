import axios from "axios";

const JIKAN_BASE_URL = "https://api.jikan.moe/v4";

export async function getAnime(id) {
  const response = await axios.get(`${JIKAN_BASE_URL}/anime/${id}/full`);
  return response.data;
}

export async function getAnimeRecommenations(id) {
  const response = await axios.get(`${JIKAN_BASE_URL}/anime/${id}/recommendations`);
  return response.data;
}

export async function getProducer(id) {
  const response = await axios.get(`${JIKAN_BASE_URL}/producers/${id}`);
  return response.data;
}

export async function getProducerAnimes({ id, type, genre, orderBy, sort, page }) {
  const response = await axios.get(`${JIKAN_BASE_URL}/anime`, {
    params: {
      producers: id,
      type: type,
      genres: genre,
      order_by: orderBy,
      sort: sort,
      page: page,
      limit: 25,
    },
  });

  return response.data;
}

export async function getAnimeSearch({ query, type, orderByPopularity, sortAsc, page }) {
  if (query === "") {
    return;
  }

  const response = await axios.get(`${JIKAN_BASE_URL}/anime`, {
    params: {
      sfw: true,
      q: query,
      type: type,
      order_by: orderByPopularity,
      sort: sortAsc,
      page: page,
      limit: 10,
    },
  });

  return response.data;
}

export async function getTopRatedAnimes({ type, genre, sortDesc, page }) {
  const response = await axios.get(`${JIKAN_BASE_URL}/anime`, {
    params: {
      sfw: true,
      type: type,
      order_by: "score",
      max_score: 10,
      min_score: 0.001,
      genres: genre,
      sort: sortDesc,
      page: page,
      limit: 10,
    },
  });
  
  return response.data;
}

export async function getTopPopularAnimes({ startDate, endDate, type, genre, sortAsc, page }) {
  let finalStartDate = "";
  let finalEndDate = "";

  if (startDate) finalStartDate = `${startDate}-01-01`;
  if (endDate) finalEndDate = `${endDate}-06-30`;

  const response = await axios.get(`${JIKAN_BASE_URL}/anime`, {
    params: {
      sfw: true,
      order_by: "popularity",
      start_date: finalStartDate,
      end_date: finalEndDate,
      type: type,
      genres: genre,
      sort: sortAsc,
      page: page,
      limit: 25,
    },
  });

  return response.data;
}

export async function getSeasonNow({ type, page }) {
  const response = await axios.get(`${JIKAN_BASE_URL}/seasons/now`, {
    params: {
      sfw: true,
      continuing: true,
      filter: type,
      page: page,
      limit: 25,
    },
  });

  return response.data;
}

export async function getSeasonAnimes({ year, season, type, page }) {
  const response = await axios.get(`${JIKAN_BASE_URL}/seasons/${year}/${season}`, {
    params: {
      sfw: true,
      filter: type,
      page: page,
      limit: 25,
    },
  });

  return response.data;
}
