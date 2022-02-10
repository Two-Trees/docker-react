import React from 'react' 
import './App.css'
import { Container, Row } from 'react-bootstrap';

function App(){
        
    return (
        <Container style={{marginTop: '35px'}}>
            <Row className="justify-content-md-center" style={{opacity:'70%'}}>
                <div id="block" className="block center" >
                    <div href= {"https://www.teachtolearn.life"}>
                        <h1>Learning to Code</h1>
                        <h3>www.cultureconnect.life</h3>
                    </div>
                </div>
            </Row>
        </Container> 
        );  
    } 

export default App; 
