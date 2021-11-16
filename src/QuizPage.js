import React, { useState } from 'react';
import './quizpage.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FooterImg from './components/FooterImg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuizSection from "./QuizSection";
import Sidebar from './components/Sidebar';

const QuizPage = ({ location }) => {

    const [sidebarIsOpen, updateSidebarIsOpen] = useState(false);

    return <>   
                <HelmetProvider>
                    <Helmet>
                        <title>Classic {'</Dev>'} - Dificuldade: {location.state.category}</title>
                    </Helmet>
                        <main className="block" >
                            <Header page="quiz"
                                    onClickMenuButton={() => updateSidebarIsOpen(true)}
                            />
                            <Sidebar onClose={() => updateSidebarIsOpen(false)} isOpen={sidebarIsOpen} />
                            <QuizSection category={location.state.category} />
                            <Footer />
                        </main>
                    <FooterImg />
                </HelmetProvider>
           </>
}

export default QuizPage;