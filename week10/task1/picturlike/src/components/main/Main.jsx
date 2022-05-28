import React from "react"; 
import {getData} from '../../api/requests'
import Btn from "../button/Btn";
import Card from "../card/Card";
import Results from "../results/Results";

class Main extends React.Component {
    constructor(){
        super();

        this.state ={ data : []  , curr: 0, positive : 0 , negative : 0 , loading : true , endGame : false}
    }


    componentDidMount = async () =>{

        if(this.state.loading){
            let data = await getData();
             
             let arr =Object.entries(data).map(item => {
                 return item[1];
             })
            await this.setState(()=>{
                return {data : arr , loading : false  , endGame : 0  }
            })
        }
      
 
    }

    onLikeClickHendler = (e)=>{
      if( this.resultCheck()){

        this.setState((prev)=>{
            return{positive : prev.positive+1 , curr: prev.curr+1 }
        })
       }
       
        
    }


    onDislikeClickHendler = (e)=>{
        if( this.resultCheck()){

            this.setState((prev)=>{
                return{negative : prev.negative+1 , curr: prev.curr+1 }
            })
           }
           
    }

    resultCheck(){

        if( this.state.curr >= this.state.data.length-1 ){
            this.setState({endGame : true})
        }
        
        return true;
    

    }


    render(){


        if(this.state.loading){
            return <div>loading data</div>
        }

        if(this.state.endGame){
            return <Results positive= {this.state.positive} negative={this.state.negative}/>
        }
        
        
        return(
            <>
              <div>Card num</div>
              <div>{this.state.curr}</div>
            <div className="btns">
            <span> {this.state.positive}</span>

                <Btn count={this.state.positive} name='Like' callback={this.onLikeClickHendler} />
                <Btn  name="Dislike" callback={this.onDislikeClickHendler}/>
                <span> {this.state.negative}</span>
            </div>
            <Card data={this.state.data[this.state.curr]}/>
            </>
          

        );
    }

} 

export default Main