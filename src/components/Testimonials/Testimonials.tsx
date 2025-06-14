import { useState } from 'react';
import janaina_foto from '../../assets/janaina.jpg';
import './Testimonials.css';

interface Testimonial {
	id: number;
	name: string;
	position: string;
	company: string;
	image: string;
	text: string;
}

const Testimonials: React.FC = () => {
	const testimonials: Testimonial[] = [
		{
			id: 1,
			name: "Janaina Bastos",
			position: "CEO",
			company: "Vitais Consultoria",
			image: janaina_foto,
			text: "O motivo do meu contato é para agradecer pelo trabalho na criação do site. Fiquei muito satisfeita com o resultado final. Você conseguiu construir a página de forma limpa, moderna e funcional, exatamente como combinamos. A navegação está intuitiva e a apresentação das informações está clara e organizada."
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const nextTestimonial = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
	};

	return (
		<section id="testimonials" className="testimonials">
			<div className="container">
				<div className="section-header">
					<h2>O que nossos <span className="highlight">clientes</span> dizem</h2>
					<p className="section-subtitle">Depoimentos de quem confia no nosso trabalho</p>
				</div>

				<div className="testimonials-slider">
					<div className="testimonials-container">
						{testimonials.map((testimonial, index) => (
							<div
								key={testimonial.id}
								className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
							>
								<div className="testimonial-content">
									<div className="quote-icon">"</div>
									<p className="testimonial-text">{testimonial.text}</p>
									<div className="testimonial-author">
										<div className="author-image">
											<img src={testimonial.image} alt={testimonial.name} />
										</div>
										<div className="author-info">
											<h4>{testimonial.name}</h4>
											<p>{testimonial.position}, {testimonial.company}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="testimonial-controls">
						<button className="control-btn prev" onClick={prevTestimonial}>
							&larr;
						</button>
						<div className="testimonial-dots">
							{testimonials.map((_, index) => (
								<span
									key={index}
									className={`dot ${index === activeIndex ? 'active' : ''}`}
									onClick={() => setActiveIndex(index)}
								/>
							))}
						</div>
						<button className="control-btn next" onClick={nextTestimonial}>
							&rarr;
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
