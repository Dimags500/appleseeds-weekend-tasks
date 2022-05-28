import React from "react"; 


class Btn extends React.Component {
    constructor(){
        super();

        this.state ={ data : {}}
    }


    componentDidMount(){
        this.setState(()=> {
            return{ data : this.props.data }
        })

    }

    render(){
        return(
          
          <>
          <button onClick={(e)=>{this.props.callback(e)}} >{this.props.name}</button>
          </>

        );
    }

} 

export default Btn