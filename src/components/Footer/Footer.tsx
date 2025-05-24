import './Footer.css';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-logo">
						<h3>Code<span className="highlight">Craft</span></h3>
						<p>Transformando ideias em experiências digitais excepcionais.</p>
					</div>

					<div className="footer-links">
						<div className="footer-column">
							<h4>Empresa</h4>
							<ul>
								<li><a href="#about">Sobre Nós</a></li>
								<li><a href="#services">Serviços</a></li>
								<li><a href="#projects">Projetos</a></li>
								<li><a href="#testimonials">Depoimentos</a></li>
							</ul>
						</div>

						<div className="footer-column">
							<h4>Serviços</h4>
							<ul>
								<li><a href="#services">Desenvolvimento Web</a></li>
								<li><a href="#services">Desenvolvimento Mobile</a></li>
								<li><a href="#services">Design UX/UI</a></li>
								<li><a href="#services">E-commerce</a></li>
							</ul>
						</div>

						<div className="footer-column">
							<h4>Contato</h4>
							<ul>
								<li>contato@codecraft.com.br</li>
								<li>(75) 9842-3212</li>
								<li>R. Boa Vista do Paraíso, 20 - Lagoa Salgada, Feira de Santana - BA, 44082-040</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="copyright">
						<p>&copy; {currentYear} CodeCraft. Todos os direitos reservados.</p>
					</div>

					<div className="footer-social">
						<a href="#" className="social-icon">FB</a>
						<a href="#" className="social-icon">IG</a>
						<a href="#" className="social-icon">LI</a>
						<a href="#" className="social-icon">GH</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
