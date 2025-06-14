import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import { ScrollAnimate } from '../components/ScrollAnimate/ScrollAnimate';
import { SEO } from '../components/SEO';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import Whatsapp from "../components/Whatsapp/Whatsapp";

const Home: React.FC = () => {
	return (
		<>
			<SEO 
				title="CodeCraft - Criação de Sites Modernos"
				description="Serviços profissionais de criação de sites utilizando tecnologias de ponta. Criamos aplicativos web atraentes, responsivos e de alto desempenho."
				keywords={["criação de sites", "desenvolvimento web", "sites", "feira de santana", "codecraft", "codecraft fsa", "codecraft feira de santana", "web", "desenvolvimento web feira de santana", "sites feira de santana", "empresa de sites", "agência digital", "negócio online", "presença digital", "soluções web"]}
				url="https://codecraft.social"
				type="website"
			/>
			<Hero />
			<ScrollAnimate animation="slide-up">
				<Services />
			</ScrollAnimate>
			<ScrollAnimate animation="fade-in" delay={200}>
				<Testimonials />
			</ScrollAnimate>
			<ScrollAnimate animation="slide-in-left">
				<Projects />
			</ScrollAnimate>
			<ScrollAnimate animation="scale-in" delay={300}>
				<About />
			</ScrollAnimate>
			<Whatsapp />
		</>
	);
};

export default Home;
