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
			title: "Desenvolvimento Mobile",
			description: "Aplicativos nativos e híbridos para iOS e Android que conectam sua empresa aos clientes.",
			icon: "📱"
		},
		{
			title: "Design UX/UI",
			description: "Interfaces intuitivas e design moderno para proporcionar a melhor experiência aos seus usuários.",
			icon: "🎨"
		},
		{
			title: "E-commerce",
			description: "Lojas virtuais personalizadas e otimizadas para converter visitantes em clientes.",
			icon: "🛒"
		},
		{
			title: "Marketing Digital",
			description: "Estratégias de marketing para atrair, converter e fidelizar clientes para seu negócio.",
			icon: "📊"
		},
		{
			title: "Consultoria em TI",
			description: "Orientação estratégica para implementação de soluções tecnológicas em seu negócio.",
			icon: "💼"
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
