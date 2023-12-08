import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Nav from './Nav/Nav';
import Products from './pages/Products/Products';
import Users from './pages/Users/Users';

function App() {
    return (
        <div className="wrapper">
            <Nav />
            <div className="box">
                <Routes>
                    <Route path={'/products'} element={<Products />} />
                    <Route path={'/users'} element={<Users />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
