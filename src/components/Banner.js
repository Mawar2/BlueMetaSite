import { useState, useEffect} from 'react'; //for animation
import {Container, Row ,Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import bluemetalogo from "../assets/img/bluemetalogo.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);//set initially to 0 and indicated index of word being displayed
    const [isDeleting, setIsDeleting] = useState(false);  //is the word being typed or deleted, initially is set to false because we start by typing the word
    const toRotate = ["Software Development", "Web Design", "Agile Coaching"]; // list of words that will be displayed
    const [text, setText] = useState(''); //component needs to show text
    const [delta, setDelta] = useState(100 - 1 * 1); //delta determines how fast one letter comes after the word is typed
    const period = 500; //arbitrary indicates time passing betweeen letter being typed out

    //this function is responsible for typing or deleting
    useEffect(() => { 
        let ticker = setInterval(() => {
            tick();
        },delta) //delta is our interval

        return () => {clearInterval(ticker)};
        
    }, [text])  // eslint-disable-line react-hooks/exhaustive-deps
    //we want this useEffect to run everytime the text gets updated

    const tick = () => {
        let i = loopNum% toRotate.length;
        let fullText = toRotate[i];

        //if current state is deleting we take full text and get substring.
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) :  fullText.substring(0, text.length +1) 
    
        setText(updatedText);
   
        if(isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

         if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(125); //ticker time
        }
    }

    return (
        <section className = "banner" id = "home">
            <Container> 
                <Row className = "align-items-center"> 
                    <Col xs = {12} md = {6} xl = {7}> 
                        <h1>{" BlueMeta "}<div class="secondHeader"><h1>{" Technologies" }</h1></div>
                        <span className="wrap">{text}</span></h1>
                        <p> We build software to empower the things that matter.
                        </p>
                        <button onClick={() => console.log('connect')}>Call Us <ArrowRightCircle size = {25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs = {12} md = {6} xl = {5}>
                        <img src = {bluemetalogo} alt = "Headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}