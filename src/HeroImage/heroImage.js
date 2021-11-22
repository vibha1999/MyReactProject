// import React from 'react';
import React, { Component } from "react";
import '../Header/header.css';
import HeroPicture from '../Images/heroimage.svg';
import Shop from '../Shop/shop';
import axios from "axios"; 

export default class heroImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive:false,
      inIm:true,
      tocategoryItem : [],
     
    }
  }

  
  componentDidMount(){
    this.ActionShop();

  }
  ActionShopNow = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  ActionShop = (event) => {
    console.log("event", event);
    var all =[];
   
    axios.get("https://fakestoreapi.com/products").then((response) => {
      if(response.status === 200)
      {
          console.log(response);
          all = response.data;
         
          this.setState({
            tocategoryItem :response.data,

            
          },() =>{
            console.log("setstate",all,this.state.tocategoryItem)
          });
          // all.map(p =>{
          //     console.log(p.category);
          //     categoryItem.push(p.category);
          //     titleItem.push(p.title);
          //     descItem.push(p.description);
          //     costItem.push(p.price);
          //     imageItem.push(p.image);

          //     console.log("values to pass",categoryItem,titleItem, descItem, costItem, imageItem);

          //   return p;

          // })
      }   
});
   
  }

  render(){
    console.log("this.state.isActive", this.state.isActive);
    if (this.state.isActive) {
      console.log(
        "this.state.inIm",
        this.state.inIm
      );
      return (
        <div className="mt6">
        {
          console.log("print", this.state.tocategoryItem )
        }
        <Shop 
        category = { this.state.tocategoryItem }
        
        onPress={() => {
          this.setState({
            isActive: !this.state.isActive,
          });
        }}
        />

        </div>
      );
    }

    return(
      <div className="heroStyle">
      <div className="flex p1 bg-primary hv100">
  <div className="centerimage">
  <div className="flex direc-col">
  <h1 className="cwhite">Shopping is cheaper<br/> than therapy.
  <span><p className="fsp">Lorem Ipsum has been the industry's <br/> standard dummy text ever since the 1500s.</p></span></h1>
  <button className=" shopButton" onClick = {this.ActionShopNow}>Shop Now</button>
  </div>
  </div>
  <div className="centerimage">
  <img src={HeroPicture} alt="React Logo" />
  </div>
  </div>
  
  <div className="flex p1 bottomStyle">
 <h1 className="mauto"> Shop Now</h1>
  </div>

  <div className="footer flex">
  
  </div>
  </div>

    );
  }
}
