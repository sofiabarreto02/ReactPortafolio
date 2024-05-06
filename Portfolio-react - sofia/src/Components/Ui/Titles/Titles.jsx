import React from 'react'
import './Titles.css'
import { Image } from '../Image/Image';
import imgSena from '../../../../public/Images/Sena.png'


export const Titles = ({content,style,styleImg}) => <h2 className={style}><Image src={imgSena} style={styleImg}/>{content}</h2>