import "./Footer.css";

const Footer = () => {
    return (
        <div class="footer-container">
            <div> <i class="fa-solid fa-copyright"></i> 2024 Răzvan-Alexandru Nașca. </div>
            <div class="icons-container"> 
                <div>
                    <a target="_blank" href="mailto:razvan.nasca@stud.ubbcluj.ro">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.linkedin.com/in/razvannasca/">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://github.com/razvannasca">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.instagram.com/razvannasca/">
                        <i class="fa-brands fa-square-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Footer;