import React, { useState , useRef, useEffect} from 'react';
import './stats.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FooterImg from './FooterImg';
import { playedGames$, correctPercentage$, correctAnswers$, incorrectAnswers$ } from './../store';
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from './Sidebar';
import Donut from './Donut';


const Stats = () => {

    const [sidebarIsOpen, updateSidebarIsOpen] = useState(false);
    const statsRef = useRef(null);

    useEffect( () => {
        statsRef.current.focus();
    }, [statsRef])

    const clearStat = () => {
        localStorage.clear();
        window.location.reload();
    }

    return <>   
                <HelmetProvider>
                    <Helmet>
                        <title>Classic {'</Dev>'} - Estatisticas</title>
                    </Helmet>
                    <main className="block">
                         <Header page="stats"
                                 onClickMenuButton={() => updateSidebarIsOpen(true)}
                         />
                         <Sidebar onClose={() => updateSidebarIsOpen(false)} isOpen={sidebarIsOpen} />
                        <section className="block__stats">
                            <div className="block__stats__mainBox" ref={statsRef} tabIndex="0">
                                <article className="block__stats__mainBox--statsBox">
                                    <h4>Quizzes Jogados</h4>
                                    <p>{playedGames$.value}</p>
                                    <h4>Questões Corretas</h4>
                                    <p>{correctAnswers$.value}</p>
                                    <h4>Questões Incorretas</h4>
                                    <p>{incorrectAnswers$.value}</p>
                                </article>
                                <article className="block__stats__mainBox--percentageBox">
                                    <div className="block__stats__mainBox--percentageBox--pieChart">
                                            <Donut 
                                                playedGames$ = {playedGames$.value}
                                                correctAnswers$ = {correctAnswers$.value}
                                                incorrectAnswers$ = {incorrectAnswers$.value}
                                            />
                                        <span className="block__stats__mainbox--percentageBox--span">
                                            <p>{correctPercentage$.value+"%"}</p>
                                        </span>
                                    </div>
                                    <h4>Porcentagem de Questões Corretas</h4>
                                </article>
                            </div>
                                <div className="block__stats--button">
                                    <button aria-label="reset stats" onClick={clearStat}>Resetar Estatisticas</button>
                                </div>
                           
                        </section>
                        <Footer />
                    </main>
                    <FooterImg />
                </HelmetProvider>
           </>
}

export default Stats;