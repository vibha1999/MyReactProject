// import React from 'react';
import React, { Component } from "react";
import '../Header/header.css';
import Back from '../Images/back.svg';



export default class shop extends Component {
    constructor(props){
        super(props);
        this.state = {
          
        }
      }
    

      render()
      {
          console.log("shop page",this.props.category);
          return (
              <div className="bg-light">
            <button className=" flex  pointer border-none bg-light-1 p1 " onClick={this.props.onPress} ><img src={Back} alt="React Logo" />........</button>
              <div className="flex p1 flex-wrap justify-center">
              
             { this.props.category.map( (p) => {
                 return (
                    <div className="col20 p1 br02" key={p.id}>
                   <div className="bgWhite p1 flex direc-col">
                    <img src={p.image} alt="img" className="imgStyle" />
                    <h3>{p.title}</h3>
                    <div>
                    <p className = "categoryStyle" style={{textTransform: 'capitalize'}}>{p.category}</p>
                    </div>
                    <h4>Cost : Rs {p.price}</h4>
                    <button className="cartButton pointer" onClick={this.props.onPress}>Add To Cart</button>
                   </div>

                    </div>
                   

                 )
             })
            }
             

            </div>
              </div>
          );
      }

}

// function shop() {

    
//   return (
//     <div className="flex p1">
//     <p>shop</p>
    
   
//     </div>

//   )
// }

// export default shop;