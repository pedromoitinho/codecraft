import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import LogoCode from "/src/assets/LogoCode.png";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const location = useLocation();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const scrollToSection = (sectionId: string) => {
		if (location.pathname !== '/') {
			// If not on home page, navigate to home first, then scroll
			window.location.href = `/#${sectionId}`;
		} else {
			// If on home page, just scroll to section
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
		setIsMenuOpen(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`header ${isScrolled ? 'scrolled' : ''}`}>
			<div className="container">
				<div className="logo">
					<CustomLink to="/">
						<img className="logoImg" src={LogoCode} alt="CodeCraft Logo" />
					</CustomLink>
				</div>

				<nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
					<ul className="nav-list">
							<li className="nav-item">
							<button onClick={() => scrollToSection('services')} className="nav-link">
								Serviços
							</button>
						</li>
							<li className="nav-item">
							<button onClick={() => scrollToSection('projects')} className="nav-link">
								Projetos
							</button>
						</li>
						<li className="nav-item">
							<button onClick={() => scrollToSection('about')} className="nav-link">
								Sobre
							</button>
						</li>
						<li className="nav-item">
							<CustomLink to="/forms" className="nav-link nav-link-cta" onClick={() => setIsMenuOpen(false)}>
								Solicitar Orçamento
							</CustomLink>
						</li>
					</ul>
				</nav>

				<div className="nav-toggle" onClick={toggleMenu}>
					<div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
