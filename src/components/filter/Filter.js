import { StyledLabel, StyledInputSearch } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <StyledLabel>
        Find contacts by name
        <StyledInputSearch
          type="text"
          value={value}
          onChange={evt => {
            onChange(evt.target.value);
          }}
        />
      </StyledLabel>
    </>
  );
};
