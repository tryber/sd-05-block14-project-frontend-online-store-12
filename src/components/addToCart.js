addToCart() {
  const { product } = this.state;

  let carrinhoCompras = JSON.parse(localStorage.getItem('carrinhoCompras'));

  if (carrinhoCompras !== null) {
    const produtoNoCarrinho = carrinhoCompras.some((produto) => produto.id === product.id);

    if (produtoNoCarrinho) {
      let index = 0;
      carrinhoCompras.map((produto, i) => {
        if (produto.id === product.id) {
          index = i;
          return '';
        }
        return '';
      });
      carrinhoCompras[index].quantidade += 1;
      localStorage.setItem('carrinhoCompras', JSON.stringify(carrinhoCompras));
    } else {
      product.quantidade = 1;
      carrinhoCompras.push(product);
      localStorage.setItem('carrinhoCompras', JSON.stringify(carrinhoCompras));
    }
  } else {
    carrinhoCompras = [];
    product.quantidade = 1;
    carrinhoCompras.push(product);
    localStorage.setItem('carrinhoCompras', JSON.stringify(carrinhoCompras));
  }
}
