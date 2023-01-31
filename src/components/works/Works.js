/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Proyecto Amparty Producciones.', 
      description: `Sitio web oficial de la productora Amparty Producciones, un lugar donde podras ver imagenes de los eventos, promociones, nuestro equipo e incluso solicitar o cotizar un servicio, todo el linea.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Proyecto 1Tab Gaming Club', 
      description: `Sitio web oficial del equipo de e-sports "1Tab Gaming Club". Conoce a sus integrantes, a que juegos se dedican y como puedes pertenecer a este selecto club de jugadores profesionales`,
      alter: 'VeriTru Project',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'Proyecto Sistemas informaticos "R40 Studio"', 
      description: `Les presentamos "R40 Studio", sitio web en donde (trabajo) podrás llevar a cabo las mejores ideas de negocio en el mundo informatico, tambien puedes contarnos tu hobbie para que te ayudemos a impulsar tus ideas. Visitanos para mas informacion`,
      alter: 'LoFo Project',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'Proyecto ERP R40 - Help Desk', 
      description: `Presentamos un sistema ERP para la empresa "Reparaciones 40", consiste en un sistema diseñado en Laravel con la integracion de CrudBooster para la gestion interna en el proceso de reparacion de equipos informaticos.`,
      alter: 'Startup Project',
      image: `${Startup}`,
    },
    { 
      id: 5,
      title: 'Proyecto ', 
      description: `A website project for the La Calle Cafe business
      built using Wordpress and PHP with integrated SEO tools to help
      the business ramp up its prospects and lead generation.`,
      alter: 'Startup Project',
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
