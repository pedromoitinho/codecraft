import './Services.css';

interface ServiceProps {
	title: string;
	description: string;
	icon: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => {
	return (
		<div className="service-card">
			<div className="service-icon">{icon}</div>
			<h3>{title}</h3>
			<p>{description}</p>
			<div className="service-hover">
				<a href="#contact" className="btn-service">Solicitar Orçamento</a>
			</div>
		</div>
	);
};

const Services: React.FC = () => {
	const services = [
		{
			title: "Desenvolvimento Web",
			description: "Sites institucionais, e-commerces e aplicações web responsivas com foco em experiência do usuário.",
			icon: "🌐"
		},
		{
			title: "Consultoria em TI",
			description: "Orientação estratégica para implementação de soluções tecnológicas em seu negócio.",
			icon: "💼"
		},
		{
			title: "Resolução de Bugs",
			description: "Seu projeto já existente, tem problemas sem solução? Nós resolvemos!",
			icon: "✅"
		}
	];

	return (
		<section id="services" className="services">
			<div className="container">
				<div className="section-header">
					<h2>Nossos <span className="highlight">Serviços</span></h2>
					<p className="section-subtitle">Soluções completas para o seu negócio</p>
				</div>

				<div className="services-grid">
					{services.map((service, index) => (
						<ServiceCard
							key={index}
							title={service.title}
							description={service.description}
							icon={service.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
