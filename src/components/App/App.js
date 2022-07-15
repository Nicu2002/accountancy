import AddForm from './../AddForm/AddForm';
import Filter from './../Filter/Filter';
import ItemsList from './../ItemsList/ItemsList';

import './App.css';


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