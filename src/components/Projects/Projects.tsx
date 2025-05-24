import './Projects.css';
import site_vitais from '../../assets/sitevitais.png';
import site_moitinho from '../../assets/sitemoitinho.png';

interface Project {
	id: number;
	title: string;
	category: string;
	image: string;
	description: string;
	technologies: string[];
	link?: string;
}

const Projects: React.FC = () => {
	const projects: Project[] = [
		{
			id: 1,
			title: "Vitais Consultorias",
			category: "Web Development",
			image: site_vitais,
			description: "Atividades de consultoria em gestão empresarial.",
			technologies: ["React", "Node.js", "MySQL"],
			link: "https://www.vitaisconsultoria.com/"
		},
		{
			id: 3,
			title: "Portifólio Pedro Moitinho",
			category: "Web Development",
			image: site_moitinho,
			description: "Saiba mais sobre nosso Engenheiro de Software.", 
			technologies: ["React", "Node.js", "MySQL"],
			link: "https://pedromoitinho.works/"
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
										{project.link ? (
											<a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
												Visitar Projeto
											</a>
										) : (
											<a href="#contact" className="project-link">Ver mais detalhes</a>
										)}
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
