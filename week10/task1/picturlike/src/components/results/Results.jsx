import React from "react"; 

class Results extends React.Component {
    constructor(){
        super();

        this.state ={ data : {}}
    }




    render(){
        return(
            < div  style={{marginTop : '150px'}} >
            <div>End game  {`negative ${this.props.negative} vs positive ${this.props.positive}`}</div>
            <button onClick={()=>{window.location.reload()}}>Reset</button>
            </div>
          

        );
    }

} 

export default Results