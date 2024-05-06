import React from 'react'
import './Header.css';
import { Image } from '../../Ui/Image/Image';
import { Navbar } from '../../Ui/Navbar/Navbar';
import { ItemNavbar } from '../../Ui/ItemNavbar/ItemNavbar';
import { FaLinkedinIn,FaWhatsapp,FaGithub } from 'react-icons/fa';
import { Line } from '../../Ui/Line/Line';
import imgP from '../../../../public/Images/sofia.jpeg'
import imgSena from '../../../../public/Images/Sena.png'

export const Header = () => {
  return (
    <header>
        <Image src={imgP} style='Image' />
        <h1>Sofia Ortiz</h1>
        <Line style='Line'/>
        <Navbar/>
      
        <Image src={imgSena} style='img-sena'/>
        <ul className='icons-ul'>
          <ItemNavbar style='icons' href='' content={<FaLinkedinIn />}/>
          <ItemNavbar style='icons' href='https://whatsapp.com/dl/' content={<FaWhatsapp />}/>
          <ItemNavbar style='icons' href='https://github.com/sofiabarreto02/Po.git' content={<FaGithub />}/>
        </ul>
    </header>
  ) 
}