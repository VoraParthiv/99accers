import './Components/PropertyCard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropertyCard from './Components/PropertyCard';
import ProListing from './Components/ProListing';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PropertyCard />} />
        <Route path='/list' element={<ProListing />} />
      </Routes>
    </div>
  );
}

export default App;
