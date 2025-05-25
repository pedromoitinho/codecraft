import { useState, type FormEvent } from 'react';
import './Contact.css';
import instagram_logo from '../../assets/instagram_logo.png';

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		projectType: '',
		message: '',
		description: '',
		pages: '',
		references: '',
		extra: '',
		objective: '',
		logo: '',
		hosting: '',
		features: [] as string[]
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState('');
	const [currentStep, setCurrentStep] = useState(1);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value, type, checked } = e.target as HTMLInputElement;

		// Tratamento especial para checkboxes (features)
		if (type === 'checkbox') {
			const updatedFeatures = [...(Array.isArray(formData.features) ? formData.features : [])];

			if (checked) {
				// Adicionar à lista se estiver marcado
				updatedFeatures.push(value);
			} else {
				// Remover da lista se estiver desmarcado
				const index = updatedFeatures.indexOf(value);
				if (index > -1) {
					updatedFeatures.splice(index, 1);
				}
			}

			setFormData({
				...formData,
				features: updatedFeatures
			});
		} else {
			// Para outros tipos de campos
			setFormData({
				...formData,
				[name]: value
			});
		}
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitSuccess(false);
		setSubmitError('');

		try {
			// Formatando os dados do formulário para envio via WhatsApp
			const phoneNumber = "5575998649199"; // Substitua pelo número de WhatsApp correto (formato: código do país + DDD + número)

			// Criando a mensagem formatada
			let message = `*Solicitação de Orçamento - CodeCraft*\n\n`;
			message += `*Nome/Empresa:* ${formData.name}\n`;
			message += `*E-mail:* ${formData.email}\n`;
			message += `*WhatsApp:* ${formData.phone}\n\n`;

			message += `*Objetivo do site:* ${formData.objective}\n`;
			message += `*Descrição da empresa:* ${formData.description}\n`;
			message += `*Possui logo e identidade visual?* ${formData.logo}\n\n`;

			message += `*Possui domínio e hospedagem?* ${formData.hosting}\n`;
			message += `*Páginas desejadas:* ${formData.pages}\n`;
			message += `*Referências:* ${formData.references}\n\n`;

			message += `*Recursos desejados:* ${Array.isArray(formData.features) ? formData.features.join(", ") : formData.features}\n`;
			message += `*Informações adicionais:* ${formData.extra}`;

			// Codificando a mensagem para URL
			const encodedMessage = encodeURIComponent(message);

			// Criando a URL do WhatsApp
			const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

			// Simulando um pequeno atraso para melhor experiência do usuário
			await new Promise(resolve => setTimeout(resolve, 1000));

			// Redirecionando para o WhatsApp
			window.open(whatsappURL, '_blank');

			console.log('Dados do formulário enviados para WhatsApp:', formData);
			setSubmitSuccess(true);
			setFormData({
				name: '',
				email: '',
				phone: '',
				company: '',
				projectType: '',
				message: '',
				description: '',
				pages: '',
				references: '',
				extra: '',
				objective: '',
				logo: '',
				hosting: '',
				features: []
			});
		} catch (error) {
			console.error('Erro ao enviar formulário:', error);
			setSubmitError('Ocorreu um erro ao processar o formulário. Por favor, tente novamente.');
		} finally {
			setIsSubmitting(false);
		}
	};

	const nextStep = () => {
		if (currentStep < 4) setCurrentStep(currentStep + 1);
	};

	const prevStep = () => {
		if (currentStep > 1) setCurrentStep(currentStep - 1);
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
							<p>codecraftfsa@gmail.com</p>
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
								<img src={instagram_logo} alt="Instagram" />
							</a>
						</div>
					</div>

					<div className="contact-form-container">
						{submitSuccess ? (
							<div className="success-message">
								<h3>Obrigado pelo contato!</h3>
								<p>Seus dados foram preparados e enviados para o WhatsApp. Se o redirecionamento não ocorrer automaticamente, clique no botão abaixo.</p>
								<div className="success-buttons">
									<button
										className="btn btn-whatsapp"
										onClick={() => {
											// Recria a mensagem e URL do WhatsApp
											const phoneNumber = "5575998423212";
											let message = `*Solicitação de Orçamento - CodeCraft*\n\n`;
											message += `*Nome/Empresa:* ${formData.name}\n`;
											message += `*E-mail:* ${formData.email}\n`;
											message += `*WhatsApp:* ${formData.phone}\n`;
											// Outros campos...
											const encodedMessage = encodeURIComponent(message);
											const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
											window.open(whatsappURL, '_blank');
										}}
									>
										Abrir WhatsApp
									</button>
									<button
										className="btn btn-primary"
										onClick={() => setSubmitSuccess(false)}
									>
										Enviar Outra Mensagem
									</button>
								</div>
							</div>
						) : (
							<form className="contact-form" onSubmit={handleSubmit}>
								<div className="form-steps">
									{[1, 2, 3, 4].map((step) => (
										<div
											key={step}
											className={`step-indicator ${currentStep === step ? 'active' : ''}`}
										>
											{step}
										</div>
									))}
								</div>

								{currentStep === 1 && (
									<div>
										<div className="form-group">
											<label htmlFor="name">Nome da empresa*</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												placeholder="Seu nome ou nome da empresa"
											/>
										</div>

										<div className="form-group">
											<label htmlFor="email">E-mail para contato*</label>
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
											<label htmlFor="phone">WhatsApp*</label>
											<input
												type="tel"
												id="phone"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												required
												placeholder="(99) 99999-9999"
											/>
										</div>
									</div>
								)}

								{currentStep === 2 && (
									<div>
										<div className="form-group">
											<label htmlFor="objective">Qual o objetivo principal do site?*</label>
											<div>
												<label><input type="radio" name="objective" value="Apresentar a empresa" onChange={handleChange} required /> Apresentar a empresa</label>
												<label><input type="radio" name="objective" value="Vender produtos/serviços" onChange={handleChange} required /> Vender produtos/serviços</label>
												<label><input type="radio" name="objective" value="Portfólio" onChange={handleChange} required /> Portfólio</label>
												<label><input type="radio" name="objective" value="Outro" onChange={handleChange} required /> Outro</label>
											</div>
										</div>

										<div className="form-group">
											<label htmlFor="description">Descreva brevemente o que sua empresa faz*</label>
											<textarea
												id="description"
												name="description"
												value={formData.description}
												onChange={handleChange}
												required
												rows={4}
												placeholder="Setor, tipo de serviço que vende..."
											></textarea>
										</div>

										<div className="form-group">
											<label>Já possui logo e identidade visual?*</label>
											<div>
												<label><input type="radio" name="logo" value="Sim" onChange={handleChange} required /> Sim</label>
												<label><input type="radio" name="logo" value="Não" onChange={handleChange} required /> Não</label>
												<label><input type="radio" name="logo" value="Em desenvolvimento" onChange={handleChange} required /> Em desenvolvimento</label>
											</div>
										</div>
									</div>
								)}

								{currentStep === 3 && (
									<div>
										<div className="form-group">
											<label>Já possui domínio e hospedagem?*</label>
											<div>
												<label><input type="radio" name="hosting" value="Sim" onChange={handleChange} required /> Sim</label>
												<label><input type="radio" name="hosting" value="Não" onChange={handleChange} required /> Não</label>
												<label><input type="radio" name="hosting" value="Preciso de ajuda com isso" onChange={handleChange} required /> Preciso de ajuda com isso</label>
											</div>
										</div>

										<div className="form-group">
											<label htmlFor="pages">Quais páginas você deseja ter no site?*</label>
											<textarea
												id="pages"
												name="pages"
												value={formData.pages}
												onChange={handleChange}
												required
												rows={3}
												placeholder="Ex: Home, Sobre, Serviços, Contato"
											></textarea>
										</div>

										<div className="form-group">
											<label htmlFor="references">Tem alguma referência de site que gosta?*</label>
											<textarea
												id="references"
												name="references"
												value={formData.references}
												onChange={handleChange}
												required
												rows={3}
												placeholder="Link ou nome do site"
											></textarea>
										</div>
									</div>
								)}

								{currentStep === 4 && (
									<div>
										<div className="form-group">
											<label>Deseja que seu site tenha:*</label>
											<div>
												<label><input type="checkbox" name="features" value="Formulário de contato" onChange={handleChange} /> Formulário de contato</label>
												<label><input type="checkbox" name="features" value="Integração com redes sociais" onChange={handleChange} /> Integração com redes sociais</label>
												<label><input type="checkbox" name="features" value="WhatsApp direto no site" onChange={handleChange} /> WhatsApp direto no site</label>
												<label><input type="checkbox" name="features" value="Blog" onChange={handleChange} /> Blog</label>
												<label><input type="checkbox" name="features" value="Loja virtual (e-commerce)" onChange={handleChange} /> Loja virtual (e-commerce)</label>
												<label><input type="checkbox" name="features" value="Outros" onChange={handleChange} /> Outros</label>
											</div>
										</div>

										<div className="form-group">
											<label htmlFor="extra">Alguma informação extra ou observação?*</label>
											<textarea
												id="extra"
												name="extra"
												value={formData.extra}
												onChange={handleChange}
												required
												rows={4}
												placeholder="Adicione informações adicionais"
											></textarea>
										</div>
									</div>
								)}

								{submitError && <div className="error-message">{submitError}</div>}

								<div className="form-navigation">
									{currentStep > 1 && <button type="button" onClick={prevStep}>Anterior</button>}
									{currentStep < 4 && <button type="button" onClick={nextStep}>Próximo</button>}
									{currentStep === 4 && (
										<button
											type="submit"
											className="btn btn-primary submit-btn"
											disabled={isSubmitting}
										>
											{isSubmitting ? 'Enviando...' : 'Solicitar Orçamento'}
										</button>
									)}
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
