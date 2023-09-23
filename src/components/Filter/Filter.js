import propTypes from 'prop-types';
import { FilterDiv, FilterLabel, FilterName } from './Filter.styled';

export const Filter = (props) => {
  const { filter } = props;

return (
      <FilterDiv>
        <FilterLabel>Find contacts by name</FilterLabel>
        <FilterName
          type="text" 
          onChange={filter}
          placeholder="Search Contact"
        />
    </FilterDiv>
  )
}


Filter.propTypes = {
  filter: propTypes.func
};