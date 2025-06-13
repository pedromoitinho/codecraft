import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import { SEO } from './components/SEO';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Whatsapp from "./components/Whatsapp/Whatsapp";

function App() {
	return (
		<div className="app">
			<SEO 
				title="CodeCraft - Desenvolvimento Web Moderno"
				description="Serviços profissionais de desenvolvimento web utilizando tecnologias de ponta. Criamos aplicativos web atraentes, responsivos e de alto desempenho."
				keywords={["web development", "react", "typescript", "frontend development", "responsive design"]}
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
				<Whatsapp />
			</main>
			<Footer />
		</div>
	)
}

export default App
