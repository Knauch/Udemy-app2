import { Routes, Route, } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.jsx';
import Authentication from './routes/Auth/Auth.jsx'
import Home from './routes/home/home.jsx'
import Shop from './routes/shop/shop.jsx';
import Checkout from './routes/checkout/checkout.jsx';
import { useEffect, } from 'react';
import { useDispatch } from 'react-redux'

import { checkUserSession } from './store(redux)/user/user.action';



const App = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(checkUserSession());
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	)
}

export default App