import React from 'react'
import { render } from 'react-dom'
import Categories from './src/categories/componentes/categories'
import PlayList from './src/playlist/componentes/playlist'
import data from './src/api.json'

// RactDom.render(que voy a renderizar, donde lo hare);

const app = document.getElementById('app');
const holaMundo = <h1> Hola mundo eejje! </h1>;

//asi se envian propiedades al componente
render( <Categories data = { data } /> , app)