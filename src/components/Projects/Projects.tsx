import { useState } from 'react';
import ecommerce_img from '../../assets/image.png';
import site_moitinho from '../../assets/sitemoitinho.png';
import site_vitais from '../../assets/sitevitais.png';
import { ScrollAnimate } from '../ScrollAnimate/ScrollAnimate';
import './Projects.css';

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
	const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

	const projects: Project[] = [
                {
                        id: 1,
                        title: "Vitais Consultorias",
                        category: "Desenvolvimento Web",
                        image: site_vitais,
                        description: "Atividades de Consultoria em Gestão Empresarial.",
                        technologies: ["React", "Spring", "Postgres", "Docker", "Typescript"],
                        link: "https://www.vitaisconsultoria.com/"
                },
                {
                        id: 2,
                        title: "E-Commerce",
                        category: "Desenvolvimento Web",
                        image: ecommerce_img,
                        description: "Loja Virtual Moderna.",
                        technologies: ["React", "TypeScript"],
                        link: "https://cleoproj.pages.dev/"
                },
                {
                        id: 3,
                        title: "Portifólio Pedro Moitinho",
                        category: "Desenvolvimento Web",
                        image: site_moitinho,
			description: "Saiba Mais Sobre o Nosso Engenheiro de Software.", 
			technologies: ["React", "Typescript"],
			link: "https://pedromoitinho.works/"
		}
	];

	const handleProjectCardClick = (projectId: number) => {
		setActiveProjectId(currentActiveId => (currentActiveId === projectId ? null : projectId));
	};

	return (
		<section id="projects" className="projects">
			<div className="container">
				<div className="section-header">
					<h2>Nossos <span className="highlight">Projetos</span></h2>
					<p className="section-subtitle">Conheça alguns dos nossos trabalhos recentes</p>
				</div>

				<div className="projects-grid">
					{projects.map((project, index) => (
						<ScrollAnimate 
							key={project.id}
							animation="scale-in"
							delay={index * 200}
							threshold={0.2}
						>
							<div
								className="project-card"
								onClick={() => handleProjectCardClick(project.id)}
							>
								<div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
									<div className={`project-overlay ${activeProjectId === project.id ? 'force-show' : ''}`}>
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
						</ScrollAnimate>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
