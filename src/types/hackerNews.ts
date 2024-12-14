export interface HackerNewsItem {
  id: number;
  type: "story" | "comment" | "job" | "poll" | "pollopt";
  by?: string;
  time: number;
  title?: string;
  url?: string;
  score?: number;
  descendants?: number;
}
