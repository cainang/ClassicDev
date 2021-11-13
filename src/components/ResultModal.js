import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Loader from 'react-loader-spinner'
import './resultmodal.css';
import FocusTrap from 'focus-trap-react';
import { Redirect } from 'react-router-dom';

const Create = ({ result, 
                  getData, 
                  updateQuizData, 
                  updatePlayerAnswer,
                  updateCurrentPage,
                  updateResultModalStatus,
                  resultModalStatus,
                }) => {
    const [backHome, updateBackHome] = useState(false);
    const [loadingLoader, updateLoadingLoader] = useState(true);
    const resultRef = useRef(null);

  
    useEffect( () => {
        const timer = setTimeout( () => {
            updateLoadingLoader(false)
            
        }, 2000)

        return () => {
            clearTimeout(timer);    
        }
    }, []);

    useEffect( () => {
        
        if (!loadingLoader) {
            
            resultRef.current.focus();
            
        }
    }, [loadingLoader, resultRef]) 

    const backToHome = () => {
        updateBackHome(true);
    }

    const restartGame = () => {
        updateCurrentPage(1);
        updateQuizData([]);
        updatePlayerAnswer([]);
        updateResultModalStatus(false);
        getData();
    }
	

	if(backHome) {
        return <Redirect to="/" />
    }

	return ReactDOM.createPortal(
        
            <div className="block__modalContainer">
                {loadingLoader ? 
                    <Loader
                        type="Oval"
                        color="#f7ad29"
                        height={100}
                        width={100}
                        timeout={2000}
                    />
                    :
                    <FocusTrap active={resultModalStatus}>
                        <div className = "block__modalContainer__dialogBox" 
                             role="dialog" /* 
                             aria-label="Quiz result" 
                             aria-describedby="dialog1Desc" */
                             id="quiz-result"
                             >
                                 <div className="block__modalContainer__dialogBox--container" 
                                      ref={resultRef} 
                                      tabIndex="0"
                                      aria-label="Quiz result"
                                      aria-describedby="dialog1Desc">
                                    <h2 >{result !== 0 ? "Parabéns 🎉" : "Sinto Muito 😢!!"}</h2>
                                    <h5 >Você Acertou</h5>
                                    <h1 >{result}/10</h1>
                                    <h5 >{result <= 1 ? "Questões Corretas" : "Questão Correta"}</h5>
                                    <span id="dialog1Desc" 
                                        role="textbox"
                                        
                                        >
                                        { result !== 0 ? result > 1 ? "Parabéns, Você Acertou" + result + "Questões Corretas" : "Parabéns, Você Acertou" + result + "Questão Correta"
                                            :
                                        "Desculpe, Você Falhou" + result + "Questão Correta" }
                                    </span>
                                    <div role="menu" className="block__modalContainer--nav">
                                        <button aria-label="play again" onClick={restartGame}>Jogar Novamente</button>
                                        <button aria-label="back to home" onClick={backToHome}>Voltar para o Início</button>
                                    </div>
                                </div>
                        </div>
                    </FocusTrap>
                }
            </div>
        ,
		document.body
	);
};

export default Create;
