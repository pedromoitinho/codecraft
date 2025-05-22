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
						<h3>Criando soluções digitais de impacto</h3>
						<p>
							Somos uma agência especializada em desenvolvimento web e soluções digitais,
							fundada com a missão de transformar ideias em produtos digitais excepcionais.
							Nossa equipe de especialistas combina criatividade, tecnologia e estratégia
							para entregar resultados que impulsionam o crescimento dos nossos clientes.
						</p>

						<div className="values">
							<div className="value-item">
								<div className="value-icon">
									<i className="code-icon">⚙️</i>
								</div>
								<h4>Excelência Técnica</h4>
								<p>Comprometidos com código limpo, boas práticas e soluções de alta performance.</p>
							</div>

							<div className="value-item">
								<div className="value-icon">
									<i className="innovation-icon">💡</i>
								</div>
								<h4>Inovação Constante</h4>
								<p>Atualizados com as mais recentes tecnologias e tendências do mercado.</p>
							</div>

							<div className="value-item">
								<div className="value-icon">
									<i className="client-icon">🤝</i>
								</div>
								<h4>Foco no Cliente</h4>
								<p>Desenvolvemos soluções alinhadas às necessidades e objetivos específicos.</p>
							</div>
						</div>
					</div>

					<div className="about-stats">
						<div className="stat-item">
							<span className="stat-number">5+</span>
							<span className="stat-text">Projetos Entregues</span>
						</div>
						<div className="stat-item">
							<span className="stat-number">3+</span>
							<span className="stat-text">Clientes Satisfeitos</span>
						</div>
						<div className="stat-item">
							<span className="stat-number">3</span>
							<span className="stat-text">Anos de Experiência</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
