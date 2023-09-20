import propTypes from 'prop-types';
import { FilterDiv, FilterLabel, FilterName } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => (
  <FilterDiv>
    <FilterLabel>Find contacts by name</FilterLabel>
    <FilterName
    type="text" 
    value={value} 
    onChange={onChangeFilter}
    />
  </FilterDiv>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};