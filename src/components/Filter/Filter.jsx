import React from 'react';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { setFilterTerm } from '../../redux/contacts/filterSlice';
// import { selectContactsFilterTerm } from 'redux/contacts/contactsSelectors';
import { contactsSelectors, filterSlice } from 'redux/contacts';
const Filter = () => {
  const dispatch = useDispatch();
  const filterTerm = useSelector(contactsSelectors.selectContactsFilterTerm);

  const changeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSlice.setFilterTerm(value));
  };
  return (
    <FilterContainer>
      <FilterLabel>
        Find contact...
        <FilterInput
          type="text"
          value={filterTerm}
          placeholder="Enter name..."
          onChange={changeFilter}
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
