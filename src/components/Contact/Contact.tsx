import { useState, type FormEvent } from 'react';
import './Contact.css';
import facebook_logo from '../../assets/facebook_logo.png';
import instagram_logo from '../../assets/instagram_logo.png';
import linkedin_logo from '../../assets/linkedin_logo.png';
import github_logo from '../../assets/github_logo.png';

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		projectType: '',
		message: ''
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitSuccess(false);
		setSubmitError('');

		try {
			// Simulando uma chamada de API
			await new Promise(resolve => setTimeout(resolve, 1500));

			console.log('Dados do formulário enviados:', formData);
			setSubmitSuccess(true);
			setFormData({
				name: '',
				email: '',
				phone: '',
				company: '',
				projectType: '',
				message: ''
			});
		} catch (error) {
			console.error('Erro ao enviar formulário:', error);
			setSubmitError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="contact">
			<div className="container">
				<div className="section-header">
					<h2>Solicite um <span className="highlight">Orçamento</span></h2>
					<p className="section-subtitle">Vamos transformar sua ideia em realidade</p>
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
							<p>contato@codecraft.com.br</p>
						</div>

						<div className="contact-card">
							<div className="contact-icon">
								<i>📞</i>
							</div>
							<h4>Telefone</h4>
							<p>(75) 9842-3212</p>
						</div>

						<div className="social-links">
							<a href="#" className="social-link">
								<img src={facebook_logo} alt="Facebook" />
							</a>
							<a href="#" className="social-link">
								<img src={instagram_logo} alt="Instagram" />
							</a>
							<a href="#" className="social-link">
								<img src={linkedin_logo} alt="LinkedIn" />
							</a>
							<a href="#" className="social-link">
								<img src={github_logo} alt="GitHub" />
							</a>
						</div>
					</div>

					<div className="contact-form-container">
						{submitSuccess ? (
							<div className="success-message">
								<h3>Obrigado pelo contato!</h3>
								<p>Recebemos sua mensagem e entraremos em contato em breve.</p>
								<button
									className="btn btn-primary"
									onClick={() => setSubmitSuccess(false)}
								>
									Enviar Outra Mensagem
								</button>
							</div>
						) : (
							<form className="contact-form" onSubmit={handleSubmit}>
								<div className="form-grid">
									<div className="form-group">
										<label htmlFor="name">Nome Completo*</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											placeholder="Seu nome"
										/>
									</div>

									<div className="form-group">
										<label htmlFor="email">E-mail*</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											placeholder="Seu e-mail"
										/>
									</div>

									<div className="form-group">
										<label htmlFor="phone">Telefone</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											placeholder="(99) 99999-9999"
										/>
									</div>

									<div className="form-group">
										<label htmlFor="company">Empresa</label>
										<input
											type="text"
											id="company"
											name="company"
											value={formData.company}
											onChange={handleChange}
											placeholder="Nome da sua empresa"
										/>
									</div>
								</div>

								<div className="form-group">
									<label htmlFor="projectType">Tipo de Projeto*</label>
									<select
										id="projectType"
										name="projectType"
										value={formData.projectType}
										onChange={handleChange}
										required
									>
										<option value="">Selecione uma opção</option>
										<option value="website">Desenvolvimento Web</option>
										<option value="ecommerce">Consultoria em TI</option>
										<option value="mobile">Resolução de Bugs</option>
										<option value="other">Outro</option>
									</select>
								</div>

								<div className="form-group">
									<label htmlFor="message">Mensagem*</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={4}
										placeholder="Descreva seu projeto ou necessidade"
									></textarea>
								</div>

								{submitError && <div className="error-message">{submitError}</div>}

								<button
									type="submit"
									className="btn btn-primary submit-btn"
									disabled={isSubmitting}
								>
									{isSubmitting ? 'Enviando...' : 'Solicitar Orçamento'}
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
