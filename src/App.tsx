import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { SEO } from './components/SEO';

function App() {
	return (
		<div className="app">
			<SEO 
				title="CodeCraft - Desenvolvimento Web Moderno"
				description="Serviços profissionais de desenvolvimento web utilizando tecnologias de ponta. Criamos aplicativos web atraentes, responsivos e de alto desempenho."
				keywords="web development, react, typescript, frontend development, responsive design"
				url="https://codecraft.social"
				type="website"
			/>
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
