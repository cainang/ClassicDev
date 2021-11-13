import React, { useState, useRef, useEffect } from 'react';
import './about.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FooterImg from '../../components/FooterImg';
import AboutImg from '../../design/about-illustration.svg';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from '../../components/Sidebar';


const About = () => {

    const [sidebarIsOpen, updateSidebarIsOpen] = useState(false);
    const aboutRef = useRef(null);

    useEffect( () => {
        aboutRef.current.focus();
    }, [aboutRef])


    return <>   
                <HelmetProvider>
                    <Helmet>
                        <title>Classic {'</Dev>'} - Sobre</title>
                    </Helmet>
                        <main className="block">
                            <Header page="about"
                                    onClickMenuButton={() => updateSidebarIsOpen(true)}
                            />
                            <Sidebar onClose={() => updateSidebarIsOpen(false)} isOpen={sidebarIsOpen} />
                            <section className="block__about">
                                <figure>
                                    <img src={AboutImg} alt="a woman with question marks" />
                                </figure>
                                <article ref={aboutRef} tabIndex="0" aria-label="About quiz master" aria-labelledby="aboutText" aria-describedby="aboutText2">
                                    <p id="aboutText">Classic {'</Dev>'} é um jogo de curiosidades para um projeto social de programação criado por Cainã, Eduardo, Giovanni, Adriel, Flávio, Gabriel e Luciano usando ReactJS e API própria para as perguntas de curiosidades sobre Tecnologia da Informação.</p>
                                </article>
                            </section>
                            <Footer />
                        </main>
                    <FooterImg />
                </HelmetProvider>
           </>
}

export default About;