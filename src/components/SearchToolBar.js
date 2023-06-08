import React from 'react';

import {
  Input,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchToolBar = () => {
  return (
    <>
      <SimpleGrid w={{ base: '100%', sm: '50%', md: '50%' }} p="4">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="white" />}
          />
          <Input placeholder="Search" size="md" />
        </InputGroup>
      </SimpleGrid>
    </>
  );
};

export default SearchToolBar;
