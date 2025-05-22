import './Projects.css';

interface Project {
	id: number;
	title: string;
	category: string;
	image: string;
	description: string;
	technologies: string[];
}

const Projects: React.FC = () => {
	const projects: Project[] = [
		{
			id: 1,
			title: "E-commerce Moderno",
			category: "Web Development",
			image: "/src/assets/project1.jpg",
			description: "Desenvolvimento de plataforma de e-commerce completa com sistema de pagamentos integrados.",
			technologies: ["React", "Node.js", "MongoDB"]
		},
		{
			id: 2,
			title: "Aplicativo de Delivery",
			category: "Mobile Development",
			image: "/src/assets/project2.jpg",
			description: "Aplicativo para iOS e Android para entrega de produtos com rastreamento em tempo real.",
			technologies: ["React Native", "Firebase", "Google Maps API"]
		},
		{
			id: 3,
			title: "Dashboard Corporativo",
			category: "Web Development",
			image: "/src/assets/project3.jpg",
			description: "Interface administrativa para visualização e análise de dados empresariais.",
			technologies: ["Angular", "TypeScript", "Chart.js"]
		},
		{
			id: 4,
			title: "Website Institucional",
			category: "Web Design",
			image: "/src/assets/project4.jpg",
			description: "Site responsivo com design moderno para empresa do setor imobiliário.",
			technologies: ["HTML5", "CSS3", "JavaScript"]
		}
	];

	return (
		<section id="projects" className="projects">
			<div className="container">
				<div className="section-header">
					<h2>Nossos <span className="highlight">Projetos</span></h2>
					<p className="section-subtitle">Conheça alguns dos nossos trabalhos recentes</p>
				</div>

				<div className="projects-grid">
					{projects.map(project => (
						<div key={project.id} className="project-card">
							<div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
								<div className="project-overlay">
									<div className="project-details">
										<h3>{project.title}</h3>
										<p>{project.description}</p>
										<div className="project-techs">
											{project.technologies.map((tech, index) => (
												<span key={index} className="tech-tag">{tech}</span>
											))}
										</div>
										<a href="#contact" className="project-link">Ver mais detalhes</a>
									</div>
								</div>
							</div>
							<div className="project-info">
								<h4>{project.title}</h4>
								<p>{project.category}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
