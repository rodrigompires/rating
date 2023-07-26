import React from 'react';
import './Card.css';
import StarImg from '../assets/images/icon-star.svg';
import ImgThank from '../assets/images/illustration-thank-you.svg';

const Card = () => {

    const [activeButton, setActiveButton] = React.useState(1);
    const [buttonValue, setButtonValue] = React.useState(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const spanContent1 = React.useRef();
    const card = React.useRef();

    function reload () {
        setButtonValue(null);
        setActiveButton(1);
        card.current.style = 'transform: rotateY(360deg)';
        spanContent1.current.innerText = ``;
    }

    const handleButtonClick = (e) => {
        setButtonValue(e.target.value);
      };

      const handleSubmitClick = (e) => {
        // e.preventDefault();
        spanContent1.current.innerText = `You selected ${buttonValue} out of 5`;
        setButtonValue(null);
        card.current.style = 'transform: rotateY(180deg)';
      };


    React.useEffect(() => {
      // Quando o componente for renderizado, apenas a primeira div deve estar visível
      setActiveButton(1);
    }, []);
    
    

  return (
    <div className={'card'} ref={card}>
      <div className={'card-back'}>
            <div className={'boximg'}>
                <img src={ImgThank} 
                alt="Ilustracao" 
                className={'imgthank'} 
                onMouseOver={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
                onClick={reload}/>
            </div>
                <p className={'hide'} style={{ opacity: isHovered ? "1" : "0" }}>Click here to reload the page</p>
            <div className={'boxrating'}>
                <span className={'textrating'} ref={spanContent1}></span>
            </div>
            <div className={'acknowledgment'}>
                <h1>Thank you!</h1>
            </div>
            <div className={'texttks'}>
                <span className={'informe'}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</span>
            </div>
      </div>

      <div className={'card-face'}>
        <div className={'boxstar'}>
            {[1,2,3,4,5].map((number) => <div key={number} className={`circle circle_${number}`} style={{ opacity: number <= activeButton ? "1" : "0", transition: 'all .5s' }}>
            <img src={StarImg} alt="" className={`${'img'} star${number}`} />
        </div>)}
        </div>
        <div className={'title'}>
            <h1>How did we do?</h1>
        </div>
        <div className={'text'}>
            <span className={'informe'}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our
            offering!</span>
        </div>
        <div className={'buttons'}>
            {[1,2,3,4,5].map((rating) => <button value={rating} 
            onMouseOver={() => setActiveButton(rating)} 
            onClick={handleButtonClick} 
            key={rating} 
            className={`${'rating'}`} >{rating}</button> )}
        </div>        
        <div className={'btn'}>
            <input type="button" value="Submit" onClick={handleSubmitClick} disabled={buttonValue === null}/>
        </div>
      </div>
    </div>
  )
}

export default Card
