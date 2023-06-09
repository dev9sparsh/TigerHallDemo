/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { Input, SimpleGrid, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchToolBar = ({ ApiHook, LoaderHook }) => {
  let default_limit = 5;
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 300);

  // The Debouncing Hook Effect
  useEffect(() => {
    if (debouncedValue) {
      ApiHook({
        variables: { limit: default_limit, searchKeyword: debouncedValue }
      });
      LoaderHook(true);
    } else {
      ApiHook({
        variables: { limit: default_limit, searchKeyword: '' }
      });
    }
  }, [debouncedValue]);

  return (
    <>
      <SimpleGrid w={{ base: '100%', sm: '50%', md: '50%' }} p="4">
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="current" />} />
          <Input
            placeholder="Search"
            size="md"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <ColorModeSwitcher />
        </InputGroup>
      </SimpleGrid>
    </>
  );
};

export default SearchToolBar;
