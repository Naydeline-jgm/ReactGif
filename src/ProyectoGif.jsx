import { useState } from "react"; 
import { AddCategory } from './components/AddCategory'; 
import { GifGrid } from './components/GifGrid'; 
import PropTypes from 'prop-types';

export const ProyectoGif = () => { 
   

  const [categories, setCategories] = useState(["gatitos"]); 
  // Definimos una función onAddCategory que toma un argumento newCategory 
  const onAddCategory = (newCategory) => { 
    
    if (categories.includes(newCategory)) return; 
    
    setCategories([newCategory, ...categories]); 
  }; 
 
  // Devolvemos el JSX que se renderizará 
  return ( 
    <>
     <h1>Proyecto Gif</h1> 
      {/* // Renderizamos el componente AddCategory y le pasamos una función que se 
activará cuando se agregue una nueva 
      categoría */} 
      <AddCategory onNewCategory={(value) => onAddCategory(value)} /> 
      {/* // Mapeamos las categorías a componentes GifGrid, cada uno con una clave única 
y una categoría */} 
      {categories.map((category) => ( 
        <GifGrid key={category} category={category} /> 
      ))} 
    </> 
  ); 
};

ProyectoGif.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};