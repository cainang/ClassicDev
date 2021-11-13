import React from 'react';
import './../pages/Home/home.css'

class Footer extends React.PureComponent {
    render() {
        return <>
                    <footer className = "block__footer" >
                         <p>Classic {'</Dev>'} | Fortaleza - CE {new Date().getFullYear()}</p>
                    </footer>
               </>
    }
}

export default Footer;