import type { ContentType, Post } from "@/types/post.types";
import type { DevlogContentType } from "@/types/devlog.types";
import type { SearchRequest } from "~/types/search.types";
import { Ref } from "vue";

interface ContentSearchComposableReturn {
  isLoading: Ref<boolean>;
  searchInput: Ref<string>;
  searchResult: Ref<Post[]>;
}

export const useContentSearch = (type: ContentType | DevlogContentType): ContentSearchComposableReturn => {

  // Search
  const searchInput = ref("");
  const searchResult = ref<Post[]>([]);
  const isLoading = ref(false);

  /**
   * Method for searching for posts
   * @param query Text query, that contain tag, part of description or title
   */
  const search = async (query: string) => {
    const parameters: SearchRequest = {
      query: query.replaceAll("#", ""),
      type
    };
    
    const { data } = await useFetch("/api/search", {
      method: "post",
      body: parameters,
    });

    if (data.value === null) return;

    searchResult.value = data.value.posts;
  };

  // Debounce
  const DEBOUNCE_TIME = 400; // ms
  let lastInteractionTime = -1;
  let timerId: ReturnType<typeof setTimeout> | number = 0;

  /**
   * Utility for start debounce timeout
   * @param query Search query
   */
  const startDebounceSearch = (query: string) => {
    isLoading.value = true;
    timerId = setTimeout(async () => {
      await search(query);
      isLoading.value = false;
    }, DEBOUNCE_TIME);
  };
  
  // Watching for search input
  // Debounce if user types too fast
  watch(searchInput, async (query) => {
    const currentTime = Date.now();
    
    // If input empty do nothing
    if (!searchInput.value) {
      return;
    }
    
    // Case when user type too fast
    // note: if user doesn't type after this case - time will execute callback
    //       in next iteration currentTime - lastInteractionTime will be > DEBOUNCE_TIME
    if (currentTime - lastInteractionTime < DEBOUNCE_TIME) {
      clearTimeout(timerId);
      startDebounceSearch(query);
      return;
    }

    // If user types for the first time debounce it
    lastInteractionTime = currentTime;
    startDebounceSearch(query);
  });
  
  return {
    searchInput,
    searchResult,
    isLoading,
  };
};