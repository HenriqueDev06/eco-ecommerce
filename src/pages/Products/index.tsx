import React, { FC, useState } from 'react';
import { Container } from './styles';

import { ProductCard, ListContainer } from '../../components/productsList';
import { productsData } from '../../mocks/productsData';
import SearchBar from '../../components/searchBar';

const ProductsPage: FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = (inputValue) => {
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryFilter = (category) => {
    const filtered = productsData.filter(
      (product) => product.category === category,
    );
    setFilteredProducts(filtered);
  };

  return (
    <Container>
      <SearchBar
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
      />
      <ListContainer>
        {filteredProducts.map(({ id, name, price, img }) => (
          <ProductCard key={id} id={id} name={name} price={price} img={img} />
        ))}
      </ListContainer>
    </Container>
  );
};
export { ProductsPage };
