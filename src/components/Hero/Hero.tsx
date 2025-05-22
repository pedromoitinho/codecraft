import './Hero.css';

const Hero: React.FC = () => {
	return (
		<section id="home" className="hero">
			<div className="overlay"></div>
			<div className="container">
				<div className="hero-content">
					<h1>Transformando Ideias em <span className="highlight">Experiências Digitais</span></h1>
					<p>Somos especialistas em desenvolvimento web e mobile para empresas que buscam destacar-se no mercado digital.</p>
					<div className="hero-cta">
						<a href="#contact" className="btn btn-primary">Solicitar Orçamento</a>
						<a href="#services" className="btn btn-secondary">Nossos Serviços</a>
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
