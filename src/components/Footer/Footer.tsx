import instagram_logo from '../../assets/instagram_logo.png';
import './Footer.css';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-logo">
						<h3>Code<span className="highlight">Craft</span></h3>
					</div>

					<div className="footer-links">

						<div className="footer-column">
							<h4>Serviços</h4>
							<ul>
								<li><a href="#services">Desenvolvimento Web</a></li>
								<li><a href="#services">Consultoria em TI</a></li>
								<li><a href="#services">Resolução de Bugs</a></li>
							</ul>
						</div>

						<div className="footer-column">
							<h4>Contato</h4>
							<ul>
								<li>codecraftfsa@gmail.com</li>
								<li>(75) 99707-9930</li>
								<li>Artemia Pires, 10151 - Sim, Feira de Santana - BA, 44085-370</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="copyright">
						<p>&copy; {currentYear} CodeCraft. Todos os direitos reservados.</p>
					</div>

					<div className="footer-social">
						<a href="https://www.instagram.com/cc_codecraft/" className="social-icon"><img src={instagram_logo} /></a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
