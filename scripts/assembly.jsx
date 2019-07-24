import React from 'react';
import Game from './game';


export default class Assembly extends React.Component{
    constructor(props) {
        super(props);               
        }
      

     render(){       
              
         return <div>            
        <Game p1 = {prompt("Введите ваше имя, ваш цвет зеленый ")} p2 = {prompt("Введите ваше имя, ваш цвет синий ")}/>        
     </div>    
}
    
}