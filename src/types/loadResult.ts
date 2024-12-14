import type { TopStory } from "./TopStory";

export interface LoadResult {
  topStories: TopStory[];
  error?: string;
}
