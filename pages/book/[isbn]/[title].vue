<script setup>
import algoliarecommend from "@algolia/recommend";
import aa from "search-insights";
import { useShare } from "@vueuse/core";

const { count } = useCounter();
const { share, isSupported } = useShare();

aa("setUserToken", "test-user-321");
const runtimeConfig = useRuntimeConfig();

const route = useRoute();
const algolia = useAlgoliaRef();
const queryID = route.query.queryID;

const index = algolia.initIndex("resources");
const { hits } = await index.search(route.params.isbn, {
  hitsPerPage: 1,
  restrictSearchableAttributes: ["isbn"],
});
const product = hits[0];

const { getProduct, addLineItem, cartLines, getCart, cartState } =
  await useShopify();
const shopifyProduct = await getProduct("dinosaur-atlas");

const recommend = algoliarecommend(
  runtimeConfig.algolia.applicationId,
  runtimeConfig.algolia.apiKey
);
const { results } = await recommend.getRelatedProducts([
  {
    indexName: "resources",
    objectID: product.id,
    maxRecommendations: 6,
    queryParameters: { filters: "market:uk" },
  },
]);
const relatedProducts = results[0].hits;

const addToCartClicked = async (id, count) => {
  addLineItem(id, count);
};

const buyButtonClicked = async (id) => {
  // aa("sendEvents", [
  //   {
  //     index: "resources",
  //     eventType: "conversion",
  //     eventName: "Buy button clicked",
  //     userToken: "test-user-321",
  //     queryID: queryID,
  //     objectIDs: [product.id],
  //     timestamp: new Date().getTime(),
  //   },
  // ]);
};
function startShare() {
  share({
    title: product.title,
    text: product.title,
    url: location.href,
  });
}

useHead({
  title: product.title,
  meta: [{ name: "description", content: product.description }],
});
</script>

<template>
  <div class="w-full">
    <p>{{ cartLines }}</p>
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 h-60 md:h-80">
        <BgImage :src="product.thumbnail" :alt="product.title" />
      </div>
      <div class="w-full md:w-1/2 pt-4 pl-0 md:pt-0 md:pl-4">
        <h1 class="text-3xl">{{ product.title }}</h1>
        <h2>{{ product.isbn }}</h2>
        <span class="">Levels</span>
        <ul class="flex flex-row flex-wrap list-none m-1 p0">
          <li
            v-for="(level, index) in product.levels"
            class="m-1 p-1 py-0 rounded bg-pink-400 text-black"
          >
            <span class="whitespace-nowrap"> {{ level }}</span>
          </li>
        </ul>
        <span class="">Subjects</span>
        <ul class="flex flex-row flex-wrap list-none m-1 p0">
          <li
            v-for="subject in product.subjects"
            class="m-1 p-1 py-0 rounded bg-sky-400 text-black"
          >
            {{ subject }}s
          </li>
        </ul>
        <table v-if="shopifyProduct" class="m-1 p0 w-full">
          <thead>
            <tr>
              <th>Format</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="variant in shopifyProduct.variants" class="m-1 p-1">
              <td>{{ variant.title }}</td>
              <td class="text-right">
                {{
                  new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: `${variant.price.currencyCode}`,
                  }).format(variant.price.amount)
                }}
              </td>
              <td class="text-center">
                <button
                  @click="addToCartClicked(variant.id, 1)"
                  :data-id="variant.id"
                >
                  <Icon name="ic:baseline-add-shopping-cart" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <button
          v-if="isSupported"
          @click="startShare"
          class="bg-orange-500 my-2 p-2 rounded-sm text-light-300 flex flex-row align-center"
        >
          <span>Share <Icon name="ic:baseline-share" /></span>
        </button>
      </div>
    </div>
    <div v-html="product.description" class="prose-xl mt-4"></div>
    <h3 class="text-2xl my-4">Recommendations</h3>
    <ul
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6"
    >
      <li v-for="product in relatedProducts">
        <div
          class="max-w-sm rounded-lg border bg-light-100 border-gray-200 shadow-md dark:bg-dark-300 dark:border-gray-700 object-contain"
        >
          <div class="w-full h-60">
            <NuxtLink :to="`/book/${product.isbn}/${product.title}`" class="">
              <BgImage :src="product.thumbnail" :alt="product.title" />
            </NuxtLink>
          </div>
          <div class="p-4">
            <h4
              class="mb-2 text-md tracking-tight text-gray-900 dark:text-white"
            >
              {{ product.title }}
            </h4>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
