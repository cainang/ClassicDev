import React, { useState, useRef, useEffect } from 'react';
import movieIcon from './../design/movie-icon.svg';
import musicIcon from './../design/music-icon.svg';
import booksIcon from './../design/books-icon.svg';
import { Redirect } from 'react-router-dom';

const HomeSection = () => {

    const [selected, updateSelected] = useState("");
    const [startGame, updateStartGame] = useState(false);
    const homeRef = useRef(null);

    const onChange = (e) => {
        //console.log(e.target.value)
        updateSelected(e.target.value)
        
    }

    useEffect( () => {
        homeRef.current.focus();
    },[homeRef])

  

    const start = () => {
        if(selected !== "") {
            updateStartGame(true)
        }
    }

    if(startGame) {
        return <Redirect to={{
                pathname: '/quiz',
                state: { category: selected }
            }}
        />
    } 


    return <section className = "block__home__section">
                <h3 ref={homeRef} tabIndex="0">Escolha uma das dificuldades abaixo e veja quantas perguntas você pode responder corretamente em 10 perguntas!</h3>
                <div className="block__home__section__figures">
                    <label className="block__home__section__figures-input"  >
                        <input type="radio" 
                               name="category" 
                               checked={selected === "Iniciante"} 
                               value={"Iniciante"} 
                               aria-label="category movie"
                               onChange={onChange}
                               />
                        <figure className="block__home__section__figures-input-fake">
                            <img src={movieIcon} alt="movie category" />
                        </figure>
                        <figcaption>Iniciante</figcaption>
                    </label>
                    <label className="block__home__section__figures-input" >
                        <input type="radio" 
                               name="category" 
                               checked={selected === "Intemediario"} 
                               value={"Intermediário"}  
                               aria-label="category music"
                               onChange={onChange} 
                               />
                        <figure className="block__home__section__figures-input-fake">
                          <img src={musicIcon} alt="music category" />
                        </figure>
                        <figcaption>Intermediário</figcaption>
                    </label>
                    <label className="block__home__section__figures-input" >
                        <input type="radio" 
                               name="category" 
                               checked={selected === "Avançado"} 
                               value={"Avançado"}  
                               aria-label="category books"
                               onChange={onChange}
                               />
                        <figure className="block__home__section__figures-input-fake" id='servidoricon'>
                          <img src={booksIcon} alt="books category" style={{height: '11em', paddingInline: '2em'}} />
                        </figure>
                        <figcaption>Avançado</figcaption>
                    </label>
                </div>
                <button className="block__home__section__submit" aria-label="Start Quiz" onClick={start}>
                    Começar Quiz!
                </button>
            </section>
}

export default HomeSection;