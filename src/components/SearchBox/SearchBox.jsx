import css from '../SearchBox/SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice.js';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const searchName = e.target.value;
    dispatch(changeFilter(searchName));
  };

  return (
    <div className={css.searchWrapper}>
      <label className={css.label}>
        <span className={css.text}>Find contacts by name</span>
        <input
          type="text"
          placeholder="Enter name"
          name="searchName"
          onChange={handleChange}
          className={css.searchName}
        />
      </label>
    </div>
  );
};

export default SearchBox;
