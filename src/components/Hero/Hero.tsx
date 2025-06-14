import CustomLink from '../CustomLink/CustomLink';
import './Hero.css';

const Hero: React.FC = () => {
	return (
		<section id="home" className="hero">
			<div className="overlay"></div>
			<div className="container">
				<div className="hero-content">
					<h1>Multiplique Suas Vendas com <span className="highlight">Tecnologia de Ponta</span></h1>
					<p>Desenvolvemos sites que geram resultados imensuráveis. Aumente sua receita com nossos sistemas personalizados.</p>
					<div className="hero-cta">
						<CustomLink to="/forms" className="btn btn-primary">🚀 Quero Crescer!</CustomLink>
						<a href="#services" className="btn btn-secondary">Ver Como Funciona</a>
					</div>
				</div>
			</div>
			<div className="scroll-indicator">
				<a href="#about">
					<div className="mouse">
						<div className="wheel"></div>
					</div>
					<div className="arrow">
						<span></span>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
