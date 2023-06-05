import React, { FC, useState, useEffect } from 'react';
import { Container, InputContainer, SearchButton } from './styles';
import { AiOutlineSearch, AiOutlineArrowLeft } from 'react-icons/ai';

import { useHistory, useParams } from 'react-router-dom';

interface SearchBarProps {
  onSearch: (inputValue: string) => void;
  onCategoryFilter: (category: string) => void;
}

interface ParamTypes {
  categorie: string;
}

const SearchBar: FC<SearchBarProps> = ({ onCategoryFilter, onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  let history = useHistory();
  const { categorie } = useParams<ParamTypes>();

  const handleSearch = () => {
    onSearch(inputValue);
  };

  useEffect(() => {
    setSelectedCategory(categorie);
  }, []);

  const handleBack = () => {
    history.replace('/');
  };

  const handleCategoryChange = (category) => {
    // history.push(`/?categorie=${category}`);
    history.replace({ search: `/?categorie=${category}` });
    setSelectedCategory(category);
    onCategoryFilter(category);
  };

  return (
    <Container>
      <InputContainer>
        <AiOutlineArrowLeft id="back" onClick={handleBack} />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite sua pesquisa..."
        />
        <SearchButton onClick={handleSearch}>
          <AiOutlineSearch size={20} />
        </SearchButton>
      </InputContainer>
      <div id="categories">
        <span
          className={selectedCategory === 'microfone' ? 'selected' : ''}
          onClick={() => handleCategoryChange('microfone')}
        >
          Microfones
        </span>
        <span
          className={selectedCategory === 'camera' ? 'selected' : ''}
          onClick={() => handleCategoryChange('camera')}
        >
          Cameras
        </span>
        <span
          className={selectedCategory === 'fone' ? 'selected' : ''}
          onClick={() => handleCategoryChange('fone')}
        >
          Fones
        </span>
        <span
          className={selectedCategory === 'suporte' ? 'selected' : ''}
          onClick={() => handleCategoryChange('suporte')}
        >
          Suportes
        </span>
      </div>
    </Container>
  );
};
export default SearchBar;
