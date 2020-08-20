import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/50213406?s=400&u=c05f619eb5d9d3c694647b75bb15de765d7a6f95&v=4" alt="Mateus Gomes"/>
                <div>
                    <strong>Mateus Gomes</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias da matemática avançada.
                <br /><br />
                Rei da derivada e da integral. Mais de 2000 equações foram brutalmente derivadas por este indivíduo.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 77,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;