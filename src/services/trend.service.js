import googleTrends from "google-trends-api";

export async function fetchTrend() {
  const res = await googleTrends.dailyTrends({ geo: "US" });
  const data = JSON.parse(res);

  return data.default.trendingSearchesDays[0].trendingSearches[0].title.query;
}
