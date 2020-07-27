export async function getCategories() {
  const product = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const produtcJson = await product.json();
  return produtcJson;
}

export async function getProductsFromCategoryAndQuery(CATEGORY_ID, QUERY) {
  if (CATEGORY_ID === '' && QUERY !== '') {
    return (await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`)).json();
  } else if (CATEGORY_ID !== '' && QUERY === '') {
    return (await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}`)).json();
  } else if (CATEGORY_ID !== '' && QUERY !== '') {
    return (await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}`)).json();
  }
  return console.log('ERRO, coloque parametros válidos');
}
