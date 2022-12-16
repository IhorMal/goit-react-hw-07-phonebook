import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import Example from "components/loading/loading";
import { filterSelector, isLoadingSelector, newContactSelector } from "redux/selector";

export const Contact = () => {
    
    const dispatch = useDispatch()
    const isLoading = useSelector(isLoadingSelector)
    const filter = useSelector(filterSelector)
    const contacts = useSelector(newContactSelector)
    
    return (
        <div>
          {isLoading &&  <Example type={'balls'} color={'red'}/>}
             {filter === '' && (
            <ul>
                {contacts.map(({ name, id, phone }) => (
                    <li key={id}>
                        {name}: {phone}
                        <button type='button' onClick={() => dispatch(deleteContact(id))}>dalet</button>
                    </li>
                ))}
            </ul>
            )}      
        </div>
    )
};