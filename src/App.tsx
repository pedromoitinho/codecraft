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
				title="CodeCraft - Criação de Sites Modernos"
				description="Serviços profissionais de criação de sites utilizando tecnologias de ponta. Criamos aplicativos web atraentes, responsivos e de alto desempenho."
				keywords={["criação de sites", "desenvolvimento web", "sites", "feira de santana", "codecraft", "codecraft fsa", "codecraft feira de santana", "web", "desenvolvimento web feira de santana", "sites feira de santana", "empresa de sites", "agência digital", "negócio online", "presença digital", "soluções web"]}
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
