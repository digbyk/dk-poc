<script setup>
import { ref } from "vue";
import {
  AisInstantSearch,
  AisSearchBox,
  AisAutocomplete,
  AisHighlight,
  AisSnippet,
  AisConfigure,
  AisHitsPerPage,
  AisInfiniteHits,
  AisRefinementList,
  AisCurrentRefinements,
} from "vue-instantsearch/vue3/es";
import aa from "search-insights";
import { createInsightsMiddleware } from "instantsearch.js/es/middlewares";
import { history } from "instantsearch.js/es/lib/routers";

const indexName = "resources";
const algolia = useAlgoliaRef();
aa("setUserToken", "test-user-321");
const insightsMiddleware = createInsightsMiddleware({
  insightsClient: aa,
});
const showFilters = ref(false);
const toggleFilters = () => {
  document.getElementById("filters").classList.toggle("hidden");
  showFilters.value = !showFilters.value;
};
const middlewares = [insightsMiddleware];
const routing = {
  router: history(),
};
useHead({
  title: "Search",
  meta: [{ name: "description", content: "Searching" }],
});
</script>

<template>
  <div class="w-full">
    <ais-instant-search
      :index-name="indexName"
      :search-client="algolia"
      :middlewares="middlewares"
      :routing="routing"
    >
      <ais-configure
        clickAnalytics="true"
        attributesToSnippet="title,description:40"
        snippetEllipsisText="&hellip;"
        hitsPerPage="10"
        filters="market:uk"
      />
      <div class="w-full">
        <ais-search-box
          placeholder="Search for anything..."
          class="w-full flex place-content-center border-width-1 border-gray-600 dark:border-stone-300"
        />
        <ais-current-refinements class="w-full flex flex-row flex-wrap" />
      </div>
      <div class="w-full flex flex-col md:flex-row">
        <div class="w-full md:w-1/4 p-2">
          <div :open="showFilters" class="">
            <div
              @click="toggleFilters()"
              class="text-xl flex flex-row align-center justify-between"
            >
              <span>Filters</span>
              <div
                v-if="!showFilters"
                class="i-ic-keyboard-arrow-down md:hidden my-2 md:ml-4 text-xl cursor-pointer"
              />
              <div
                v-if="showFilters"
                class="i-ic-keyboard-arrow-up md:hidden my-2 md:ml-4 text-xl cursor-pointer"
              />
            </div>
            <div id="filters" class="hidden md:flex flex-col">
              <h3 class="text-xl my-2 mx-0">Type</h3>
              <ais-refinement-list attribute="type" operator="or" :limit="20" />
              <h3 class="text-xl my-2 mx-0">Level</h3>
              <ais-refinement-list
                attribute="levels"
                operator="or"
                :limit="8"
                :show-more="true"
              />
              <h3 class="text-xl my-2 mx-0">Subject</h3>
              <ais-refinement-list
                attribute="subjects"
                operator="or"
                :limit="8"
                :show-more="true"
              />
            </div>
          </div>
        </div>
        <div class="flex-1 flex-grow md:p-2">
          <ais-infinite-hits>
            <template
              v-slot="{
                items,
                refinePrevious,
                refineNext,
                isLastPage,
                sendEvent,
              }"
            >
              <div
                v-for="item in items"
                :key="item.objectID"
                class="m-0 mb-2 mt-1"
              >
                <div
                  class="rounded-lg border bg-white/10 border-gray-200 shadow-md dark:bg-dark-300/10 dark:border-gray-700 flex flex-col md:flex-row items-stretch"
                >
                  <div class="flex flex-col w-full md:w-60">
                    <NuxtLink
                      :to="`/book/${item.isbn}/${item.title}?queryID=${item.__queryID}`"
                      class="h-full"
                    >
                      <BgImage
                        :src="item.thumbnail"
                        :alt="item.title"
                        @click="sendEvent('conversion', item, 'Viewed')"
                      />
                    </NuxtLink>
                  </div>
                  <div class="flex flex-col flex-1 py-2 px-4">
                    <h4 class="text-lg font-semibold mx-0 my-2">
                      <ais-snippet attribute="title" :hit="item" />
                    </h4>
                    <div>
                      <ais-snippet attribute="description" :hit="item" />
                    </div>
                    <div>
                      <span class="">Levels</span>
                      <ul class="flex flex-row flex-wrap list-none m-1 p0">
                        <li
                          v-for="(level, index) in item.levels"
                          class="m-1 p-1 py-0 rounded bg-pink-400 text-black"
                        >
                          <span class="whitespace-nowrap"> {{ level }}</span>
                        </li>
                      </ul>
                      <span class="">Subjects</span>
                      <ul class="flex flex-row flex-wrap list-none m-1 p0">
                        <li
                          v-for="subject in item.subjects"
                          class="m-1 p-1 py-0 rounded bg-sky-400 text-black"
                        >
                          {{ subject }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!isLastPage" class="flex place-content-center">
                <button @click="refineNext" class="">Show more results</button>
              </div>
            </template>
          </ais-infinite-hits>
        </div>
      </div>
    </ais-instant-search>
  </div>
</template>

<style>
.ais-SearchBox-form {
  width: 100%;
}
.ais-SearchBox-input {
  text-align: center;
}
.ais-InfiniteHits-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.ais-RefinementList-list {
  padding: 0.5rem 0;
  margin: 0;
}
.ais-RefinementList-item {
  list-style-type: none;
}
.ais-RefinementList-label {
  display: flex;
  flex-direction: row;
}
.ais-RefinementList-labelText {
  flex-grow: 1;
}
.ais-RefinementList-count {
  align-self: flex-end;
}
.ais-RefinementList-label {
  align-items: center;
}
.ais-RefinementList-checkbox {
  margin-right: 0.5rem;
}
.ais-CurrentRefinements-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.ais-CurrentRefinements-item {
  margin: 0 0.5rem;
  flex-direction: row;
  flex-wrap: wrap;
}
.ais-SearchBox-form {
  display: flex;
  flex-direction: row;
}
.ais-SearchBox-input {
  font-size: 1rem;
  padding: 0.5rem;
  flex-grow: 2;
  color: #333;
  font-size: 1.5rem;
  border-radius: 0.5rem;
}
.ais-SearchBox-submit {
  background-color: green;
  display: none;
}
.ais-RefinementList-count {
  border-radius: 0.5rem;
}
.ais-CurrentRefinements-item {
  margin-right: 0.3rem;
  margin-top: 0.3rem;
  padding: 0.3rem 0.5rem;
  display: -ms-flexbox;
  display: flex;
  background-color: #495588;
  border-radius: 5px;
}
.ais-CurrentRefinements-category {
  margin-left: 0.3em;
  display: flex;
}
.ais-CurrentRefinements-categoryLabel,
.ais-CurrentRefinements-delete,
.ais-CurrentRefinements-label {
  white-space: nowrap;
  color: #fff;
}
.ais-CurrentRefinements-delete {
  margin-left: 0.3rem;
  background: none;
  cursor: pointer;
}
</style>
