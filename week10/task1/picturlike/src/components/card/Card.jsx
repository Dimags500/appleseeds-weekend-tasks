import React from "react"; 
import './Card.css'

class Card extends React.Component {
    constructor(){
        super();

        this.state ={ data : {}}
    }




    render(){
        return(
            < div className="card" >
             <img src={this.props.data.image}></img> 
               <h4>{this.props.data.name}</h4>
            </div>
          

        );
    }

} 

export default Card