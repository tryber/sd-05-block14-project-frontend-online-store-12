export async function getCategories() {
  const product = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const produtcJson = await product.json();
  return produtcJson;
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
