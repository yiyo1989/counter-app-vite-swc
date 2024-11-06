


/*
function pruebas() {
  return {
    message: 'Hola',
    title: 'Pagina prueba'
    };
}
*/

import PropTypes from "prop-types";



const FirstApp = ({title='No hay titulo',subtitle}) => {
 
  return (
    <>
     <h1>{title}</h1>
     <h2>{subtitle}</h2>     
     <p>Bojorges</p>
    </>
   
  );
}

FirstApp.propTypes = {
title: PropTypes.string.isRequired,
subtitle: PropTypes.string
};


export default FirstApp




