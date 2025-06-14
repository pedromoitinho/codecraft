import CustomLink from '../CustomLink/CustomLink';
import { ScrollAnimate } from '../ScrollAnimate/ScrollAnimate';
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
				<CustomLink to="/forms" className="btn-service">Solicitar Orçamento</CustomLink>
			</div>
		</div>
	);
};

const Services: React.FC = () => {
	const services = [
		{
			title: "Criação de Sites",
			description: "Sites institucionais, e-commerces e aplicações web responsivas com foco em experiência do usuário.",
			icon: "🌐"
		},
		{
			title: "Consultoria em TI",
			description: "Orientação estratégica para implementação de soluções tecnológicas em seu negócio.",
			icon: "💼"
		},
		{
			title: "Resolução de Problemas",
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
						<ScrollAnimate 
							key={index}
							animation="slide-up"
							delay={index * 150}
							threshold={0.2}
						>
							<ServiceCard
								title={service.title}
								description={service.description}
								icon={service.icon}
							/>
						</ScrollAnimate>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
