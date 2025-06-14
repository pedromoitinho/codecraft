import instagram_logo from '../../assets/instagram_logo.png';
import CustomLink from '../CustomLink/CustomLink';
import './Contact.css';

const Contact: React.FC = () => {
	return (
		<section id="contact" className="contact">
			<div className="container">
				<div className="section-header">
					<h2>Entre em <span className="highlight">Contato</span></h2>
					<p className="section-subtitle">Estamos prontos para ajudar você</p>
				</div>

				<div className="contact-content">
					<div className="contact-info">
						<div className="contact-card">
							<div className="contact-icon">
								<i>📍</i>
							</div>
							<h4>Endereço</h4>
							<p>R. Boa Vista do Paraíso, 20 - Lagoa Salgada, Feira de Santana - BA, 44082-040</p>
						</div>

						<div className="contact-card">
							<div className="contact-icon">
								<i>📧</i>
							</div>
							<h4>E-mail</h4>
							<p>codecraftfsa@gmail.com</p>
						</div>

						<div className="contact-card">
							<div className="contact-icon">
								<i>📞</i>
							</div>
							<h4>Telefone</h4>
							<p>(75) 9707-9930</p>
						</div>

						<div className="social-links">
							<a href="https://www.instagram.com/cc_codecraft/" className="social-link">
								<img src={instagram_logo} alt="Instagram" />
							</a>
						</div>
					</div>

					<div className="contact-form-container">
						<div className="contact-cta">
							<h3>Pronto para começar seu projeto?</h3>
							<p>Preencha nosso formulário detalhado para receber um orçamento personalizado.</p>
							<CustomLink to="/forms" className="btn btn-primary">
								Solicitar Orçamento
							</CustomLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
