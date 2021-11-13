import React, {useState} from 'react';
import "./home.css";
import Header from "../../components/Header";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from "../../components/Footer";
import HomeSection from "../../components/HomeSection";
import FooterImg from "../../components/FooterImg";
import Sidebar from "../../components/Sidebar";

const Home = () => {

    const [sidebarIsOpen, updateSidebarIsOpen] = useState(false);

    return  <>      
                <HelmetProvider>
                    <Helmet >
                        <title>Classic {'</Dev>'}</title>
                    </Helmet>
                        <main className="block">
                            <Header page="home"
                                    onClickMenuButton={() => updateSidebarIsOpen(true)}
                            />
                             <Sidebar onClose={() => updateSidebarIsOpen(false)} isOpen={sidebarIsOpen} />
                            <HomeSection />
                            <Footer />
                        </main>       
                    <FooterImg />
                </HelmetProvider>  
            </>
}

export default Home;