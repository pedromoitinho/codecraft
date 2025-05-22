import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="app">
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Projects />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}

export default App
