import { ScrollAnimate } from '../ScrollAnimate/ScrollAnimate';
import './About.css';

const About: React.FC = () => {
	return (
		<section id="about" className="about">
			<div className="container">
				<div className="section-header">
					<h2>Sobre a <span className="highlight">CodeCraft</span></h2>
					<p className="section-subtitle">Conheça nossa história e valores</p>
				</div>

				<div className="about-content">
					<div className="about-text">
						<h3>Criando Soluções Digitais de Impacto</h3>
						<p>
							Somos uma empresa especialista em criação de sites,
							fundada com a missão de transformar ideias em produtos digitais excepcionais.
							Nossa equipe de especialistas combina criatividade, tecnologia e estratégia
							para entregar resultados que impulsionam o crescimento dos nossos clientes.
						</p>

						<div className="values">
							<ScrollAnimate animation="slide-up" delay={100}>
								<div className="value-item">
									<div className="value-icon">
										<i className="code-icon">⚙️</i>
									</div>
									<h4>Excelência Técnica</h4>
									<p>Comprometidos com código limpo, boas práticas e soluções de alta performance.</p>
								</div>
							</ScrollAnimate>

							<ScrollAnimate animation="slide-up" delay={200}>
								<div className="value-item">
									<div className="value-icon">
										<i className="innovation-icon">💡</i>
									</div>
									<h4>Inovação Constante</h4>
									<p>Atualizados com as mais recentes tecnologias e tendências do mercado.</p>
								</div>
							</ScrollAnimate>

							<ScrollAnimate animation="slide-up" delay={300}>
								<div className="value-item">
									<div className="value-icon">
										<i className="client-icon">🤝</i>
									</div>
									<h4>Foco no Cliente</h4>
									<p>Desenvolvemos soluções alinhadas às necessidades e objetivos específicos.</p>
								</div>
							</ScrollAnimate>
						</div>
					</div>

					<div className="about-stats">
						<ScrollAnimate animation="slide-in-right" delay={100}>
							<div className="stat-item">
								<span className="stat-number">5+</span>
								<span className="stat-text">Projetos Entregues</span>
							</div>
						</ScrollAnimate>
						<ScrollAnimate animation="slide-in-right" delay={200}>
							<div className="stat-item">
								<span className="stat-number">5+</span>
								<span className="stat-text">Clientes Satisfeitos</span>
							</div>
						</ScrollAnimate>
						<ScrollAnimate animation="slide-in-right" delay={300}>
							<div className="stat-item">
								<span className="stat-number">3</span>
								<span className="stat-text">Anos de Experiência</span>
							</div>
						</ScrollAnimate>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
