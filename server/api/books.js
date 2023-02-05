export default defineEventHandler(async (event) => {
  const result = $fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  return result;
});
