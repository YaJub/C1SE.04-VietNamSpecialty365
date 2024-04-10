import React from 'react';
import Logo from './image/Logo.png'
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from './components/Layout';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderHistory from './pages/OrderHistory';
import { ROUTERS } from './constants/Routers';
import Profile from './pages/Profile';
import { ConfigProvider } from 'antd';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Forgot_Password from './pages/ForgotPassword';
import Contact from './pages/Contact'

// import Discover from './pages/Discover';
// import Story from './pages/Story';
// import Contact from './pages/Contact';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="/categories" element={<Category />} />
			<Route path="/products" element={<Products />} />
			<Route path="/blogs" element={<Blogs />} />
			<Route path="/about" element={<About />} />
			<Route path={ROUTERS.PRODUCT_DETAIL} element={<ProductDetail />} />
			<Route path={ROUTERS.CART} element={<Cart />} />
			<Route path={ROUTERS.CHECKOUT} element={<Checkout />} />
			<Route path={ROUTERS.LOGIN} element={<Login />} />
			<Route path={ROUTERS.PROFILE} element={<Profile />} />
			<Route path={ROUTERS.ORDER_HISTORY} element={<OrderHistory />} />
			<Route path={ROUTERS.CONTACT} element={<Contact />} />
			. <Route path="login" element={<Login />} />
		</Route>
	)
);

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
					<RouterProvider router={router} />
				</ConfigProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
