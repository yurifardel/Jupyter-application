import React from 'react';
import Moody from '../../assets/moody.png'

import {Container, Iframe, Text} from './style.js';

function Mimu() {
  return (
    <Container>      
        
        <Text className="imgText" src="https://fontmeme.com/permalink/200819/08680acde25a6c68695e705021fdb347.png" alt=""/>        
        
        <Iframe width="40%" height="166" scrolling="no" frameborder="no" allow="autoplay"
          src='https://w.soundcloud.com/player/?url=https://api.soundcloud.com%2Ftracks%2F858639538&amp' >
        </Iframe> 
        <img src={Moody} alt="photo"/>
    </Container>

    
    
    
  );
}

export default Mimu;