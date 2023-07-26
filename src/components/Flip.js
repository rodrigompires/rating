import React from 'react';
import './Flip.css'
import Card from './Card';
import {CSSTransition} from 'react-transition-group';
import Footer from './Footer';

const Flip = () => {
  return (
    <div className={'flip'}>
        <CSSTransition>
            <Card />
        </CSSTransition>
            <Footer />
    </div>
  )
}

export default Flip