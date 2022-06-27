import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.jsx';
import SignIn from './routes/sign-in/sign-in.jsx';
import Home from './routes/home/home.jsx'


    
const Shop = () => {

    return (
    <h1>Shop Page</h1>
)
}

const App = () => {

    return(
        <Routes>
            <Route path='/' element ={<Navigation />}>
                <Route index element={ <Home /> } />
                <Route path='shop' element={ <Shop /> } />
                <Route path='sign-in' element={ <SignIn /> } />
            </Route>
            
            
        </Routes>
    )
}

export default App