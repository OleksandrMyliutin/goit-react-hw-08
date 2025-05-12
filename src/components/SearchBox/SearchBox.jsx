import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/filtersSlice';
import { selectFilteredContacts } from '../../redux/filters/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilteredContacts);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="bg-base-200 border border-base-300 rounded-box p-6 w-full max-w-md mx-auto shadow-lg mt-4">
      <label className="label">Find contacts by name:</label>
      <input
        className="input input-bordered w-full"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}