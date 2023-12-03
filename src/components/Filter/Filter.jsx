import React from 'react';
import {
  FilterContainer,
  FilterLabel,
  FilterInput,
  Box,
} from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, filterSlice } from 'redux/contacts';

import { Avatar } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { avatarStyle } from 'pages/StylesPages';

const Filter = () => {
  const dispatch = useDispatch();
  const filterTerm = useSelector(contactsSelectors.selectContactsFilterTerm);

  const changeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSlice.setFilterTerm(value));
  };
  return (
    <Box>
      <Avatar sx={avatarStyle}>
        <PersonSearchIcon />
      </Avatar>
      <FilterContainer>
        <FilterLabel>
          <FilterInput
            type="text"
            value={filterTerm}
            placeholder="Find contact by name..."
            onChange={changeFilter}
          />
        </FilterLabel>
      </FilterContainer>
    </Box>
  );
};

export default Filter;
