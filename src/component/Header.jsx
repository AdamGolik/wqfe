import {useState, useEffect} from 'react';

const Header = () => {
    const images = [
        '2.jpg',
        '3.jpg',
        '6.jpg',
        '7.jpg',
        '13.jpg'
    ];

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImgIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    const handleNavClick = (event) => {
        if (event.target.textContent.toLowerCase() === 'oferty') {
            window.scrollTo({
                top: 1000,
                behavior: 'smooth'
            });
        }
    };

    const handleNav2Click = (event) => {
        if (event.target.textContent.toLowerCase() === 'kontakty') {
            window.scrollTo({
                top: 12000,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => link.addEventListener('click', handleNavClick));
        navLinks.forEach(link => link.addEventListener('click', handleNav2Click));

        return () => {
            navLinks.forEach(link => link.removeEventListener('click', handleNavClick));
            navLinks.forEach(link => link.removeEventListener('click', handleNav2Click));
        };
    }, []);

    return (
            <div className="header">
                <div className="Info">
                    <div className="logo">
                        <p>Wisła</p>
                        <h1>Hotel New Wave</h1>
                    </div>
                    <div className="nav">
                        <a href="#">Oferty</a>
                        <a href="http://www.hotelnewwave.pl/">hotel info</a>
                        <a href="#">Kontakty</a>
                    </div>
                    <div className="ONas">
                        <h2>Estetica&Spa New Wave</h2>
                        <h1>Tu dbamy o zdrowie i urodę</h1>
                    </div>
                    <div className="ONaa">
                        <h3>Gołębiewska Medical Spa to urządzone w nowoczesnym stylu, przestronne wnętrza i ekskluzywnie
                            wyposażone gabinety. Profesjonalny sprzęt, markowe kosmetyki i przede wszystkim
                            wykwalifikowany oraz odpowiedzialny personel mogący sprostać wymaganiom Gości.
                        </h3>
                    </div>
                </div>
                <div className="img-slider_img-auto-slide">
                    <img className="imga" src={images[currentImgIndex]} alt="Hotel Slider"/>
                </div>
            </div>
    );
};

export default Header;