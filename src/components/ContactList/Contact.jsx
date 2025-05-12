import { useDispatch } from 'react-redux';
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContactThunk } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function Contact({id, name, number}) {
  const dispatch = useDispatch(selectFilteredContacts);

  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };
  
  return (
    <div className="card bg-neutral text-neutral-content w-full max-w-xl shadow-md">
      <div className="card-body p-4 ">
        <div className="flex items-center justify-between gap-4 flex-col">
          <ul className="flex card-title">
            <li><IoPerson /></li>
            <li className="flex items-center gap-2 text-md">{name}</li>
          </ul>
          <ul className="flex card-title">
            <li ><FaPhoneAlt /></li>
            <li className="flex items-center gap-2 text-md">{number}</li>
          </ul>
          <div className="card-actions justify-end flex ">
            <button onClick={handleDelete} className="btn btn-primary">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}