import { useState, useEffect } from 'react';
import './Header.css';
import LogoCode from "/src/assets/LogoCode.png"

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
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
					<a href="#home">
						<img className="logoImg" src={LogoCode} />
					</a>
				</div>

				<nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
					<ul className="nav-list">
						<li className="nav-item"><a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
						<li className="nav-item"><a href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
						<li className="nav-item"><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projetos</a></li>
						<li className="nav-item"><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Depoimentos</a></li>
						<li className="nav-item"><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
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
