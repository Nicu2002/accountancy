

import AddForm from './../AddForm/AddForm';
import Filter from './../Filter/Filter';
import ItemsList from './../ItemsList/ItemsList';


const App = () => {

    return(
        <div className='app'>
            <Filter/>
            <div className='d-flex'>
                <ItemsList/>
                <AddForm/>
            </div>
    </div>
    );
}

export default App;