/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hola mundo!";
  const aboutme = `Mi nombre es ${FirstName} ${LastName}, un programador en  
                  constante aprendizaje. Mis habilidades computacionales son principalmente en Wordpress, Php, Html, Css.
                    Siempre me encuentro dispuesto a aceptar nuevos desafios, la constancia, inteligencia y disciplina permiten resolver cualquier problema.
                  Estoy aqui para ayudar a construir tus ideas en el mundo digital. 
                  Mis proyectos siempre estan dispuestos a mejorar`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Enviame un mensaje.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
