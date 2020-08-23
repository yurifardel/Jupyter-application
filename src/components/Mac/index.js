import React from 'react';
import Malcom from '../../assets/malcom.png';
import MacName from '../../assets/macName.png';
import {ContainerPresentation, MalcomName} from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function Mac(){
  return(
    <ContainerPresentation>
      <img src={Malcom} alt="malcom"/>

      <MalcomName>
        <h1>IN MEMORY OF</h1>
        <img src={MacName} alt="namemac"/>
      </MalcomName>
      
    </ContainerPresentation>
  );
}