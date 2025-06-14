import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoadingComponent from './components/Loading/Loading';
import Forms from './pages/Forms';
import Home from './pages/Home';

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<LoadingComponent />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/forms" element={<Forms />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	)
}

export default App
