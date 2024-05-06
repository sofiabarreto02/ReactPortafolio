import React from 'react'
import './Footer.css'
import { Experiences } from '../../Ui/Experiences/Experiences';
import react from '../../../../public/Images/Reactf.png'
import node from '../../../../public/Images/node.png'
import mongo from '../../../../public/Images/mongo.png'
import java from '../../../../public/Images/java.png'



export const Footer = () => {
  return (
    <footer>
      <div className='container-footer'>
        <Experiences src={react} styleIMG='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src={node} styleIMG='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src={mongo} styleIMG='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src={java} styleIMG='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
      </div>
    </footer>
  )
}
