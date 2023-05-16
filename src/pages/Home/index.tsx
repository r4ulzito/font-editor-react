import Formatador from "../../components/Formatador";
import "./styles.css";

const Home = () => {
    return (
        <main id="home_container">
            <Formatador />
            <p id="direito_autoral">
                Desenvolvido por{" "}
                <a
                    href="https://www.linkedin.com/in/raul-de-souza/"
                    target="_blank"
                >
                    Raul de Souza
                </a>
            </p>
        </main>
    );
};

export default Home;
