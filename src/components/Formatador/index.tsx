import { useState } from "react";
import "./styles.css";

const Formatador = () => {
    const [formatText, setFormatText] = useState("Exemplo de Texto");

    const revertePalavra = (palavra: string): string => {
        const response = palavra.split("").reverse().join("");

        return response;
    };

    return (
        <section id="formatador_container">
            <h1 id="formatador_titulo">FONT STYLE GENERATOR</h1>
            <input
                id="formatador_input"
                maxLength={64}
                type="text"
                name="text input"
                placeholder="Digite aqui o texto a ser formatado..."
                onChange={(e) => setFormatText(e.target.value)}
            />
            <div id="fonts_container">
                <ul>
                    <li>
                        <strong id="bold_style">
                            {formatText === ""
                                ? "Exemplo texto negrito"
                                : formatText}
                        </strong>
                    </li>
                    <li>
                        <i>
                            {formatText === ""
                                ? "Exemplo texto itálico"
                                : formatText}
                        </i>
                    </li>
                    <li>
                        <u>
                            {formatText === ""
                                ? "Exemplo texto sublinhado"
                                : formatText}
                        </u>
                    </li>
                    <li className="line_text">
                        {formatText === ""
                            ? "Exemplo texto riscado"
                            : formatText}
                    </li>
                    <li>
                        {formatText === ""
                            ? revertePalavra("Exemplo texto ao contrário")
                            : revertePalavra(formatText)}
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Formatador;
