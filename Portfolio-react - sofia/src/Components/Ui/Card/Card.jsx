import React from 'react'
import './Card.css'
import { Image } from '../Image/Image';
import { Paragraph } from '../Paragraph/Paragraph';
import { ItemNavbar } from '../ItemNavbar/ItemNavbar';

export const Card = ({content, href,contentBox, style, src, styleImg,styleP,styleH }) => {
    return (
        <div className={style}>
            <Image style={styleImg} src={src} />
            <div className={contentBox}>
                <Paragraph content={content} style={styleP}/>
                <Paragraph content={content} style={styleP}/>
                <ItemNavbar content={content} href={href} style={styleH}/>
            </div>
        </div>
    )
}

