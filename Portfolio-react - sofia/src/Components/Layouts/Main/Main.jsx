import React from 'react'
import './Main.css'
import { Titles } from '../../Ui/Titles/Titles';
import { Line } from '../../Ui/Line/Line';
import { Paragraph } from '../../Ui/Paragraph/Paragraph';
import { Card } from '../../Ui/Card/Card';
import { References } from '../../Ui/References/References';
import imgReact from '../../../../public/Images/laptop.jpeg'

export const Main = () => {
  return (
    <main>
      <Titles style='box-h2' styleImg='imgTitle' content='PERFIL' />
      <Line style='line-main' />
      <Paragraph content=' Estudiante de Analisis y desarrolo de software con sólida formación en lenguajes de
 programación como Java y JavaScript, interfaces HTML, CSS y frameworks como React.
 Experiencia en base de datos MySQL y manejo de repositorios con Git. Apasionada por la
 tecnología y con gran capacidad de aprendizaje, trabajo en equipo y resolución de
 problemas.'/>
      <Titles style='box-h2' styleImg='imgTitle' content='PROYECTOS' />
      <Line style='line-main' />
      <div className='container-card'>
        <Card style='box-card' styleImg='imgCard' src={imgReact} contentBox='contentP' href='' styleP='styleP' styleH='styleH' />
        <Card style='box-card' styleImg='imgCard' src={imgReact} contentBox='contentP' href='' styleP='styleP' styleH='styleH' />
        <Card style='box-card' styleImg='imgCard' src={imgReact} contentBox='contentP' href='' styleP='styleP' styleH='styleH' />
        <Card style='box-card' styleImg='imgCard' src={imgReact} contentBox='contentP' href='' styleP='styleP' styleH='styleH' />
      </div>
      <Titles style='box-h2' styleImg='imgTitle' content='REFERENCIAS' />
      <Line style='line-main' />

      <div className='container-references'>
        <References styleDiv='box-references' style=''/>
        <References styleDiv='box-references' style=''/>
        <References styleDiv='box-references' style=''/>
      </div>
      <Titles style='box-h2' styleImg='imgTitle' content='EXPERIENCIA' />
    </main>
  )
}


