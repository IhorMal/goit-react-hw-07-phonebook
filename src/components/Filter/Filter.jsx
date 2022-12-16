import { useSelector, useDispatch } from "react-redux";
import { contactSearch } from "redux/sliceFilter";
import { filterSelector, newContactSelector } from "redux/selector";
import { deleteContact } from "redux/operations";


export const Filter = () => {
    const dispatch = useDispatch()
    const newContact = useSelector(newContactSelector)
    const filter = useSelector(filterSelector)

  function filterContact() {
    return newContact.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase())
    })
  }

    return (
    <div>
        <p>Find contacts by name</p>
        <input type="text" name="filter"  onChange={(e) => dispatch(contactSearch(e.target.value))} />
        {filter !== '' && (
            <ul>
            {filterContact().map(({ name, id, phone }) => (
                <li key={id}>
                    {name}: {phone}
                    <button type='button' onClick={() => dispatch(deleteContact(id))}>dalet</button>
                </li>
            ))}
        </ul>
        )}
    </div>
    )
}


// class Filter extends Component {
//     render() {
//         const { filterContact, addFind, filter, dalet } = this.props;
//         const filt = filterContact();
//         return (
//         <div>
//             <p>Find contacts by name</p>
//             <input type="text" name="filter" value={filter} onChange={addFind} />
//             {filter !== '' && (
//                 <ul>
//                 {filt.map(({ name, id, number }) => (
//                     <li key={id}>
//                         {name}: {number}
//                         <button type='button' onClick={() => dalet(id)}>dalet</button>
//                     </li>
//                 ))}
//             </ul>
//             )}

//         </div>
//     )
// }
// };

// export {Filter}