import React from 'react'
import './style.css';

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state=
        {
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event){
       const{name,value}=event.target
        this.setState({
            [name]:value
        })
    }
 
        
    
componentDidMount(){
    fetch("https://api.imgflip.com/get_memes") //returns a promise
        .then(response=>response.json()) //converting the promise to a javascript object
        .then(response=>  {
            const{memes}=response.data
           
            this.setState({
                allMemeImgs:memes
            })
        })
}
handleSubmit(event){
    event.preventDefault()
    this.setState({
        randomImage:allMemeImgs.url
    })
}
 render(){
        return(
            <div>
               <form className="meme-form" onSubmit={this.handleSubmit}>

                        <input
                        type="text"
                        name="topText"
                       value={this.state.topText}
                        placeholder="top text"
                        onChange={this.handleChange}/>
                        <br/>
                         <input
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="bottom text"
                        onChange={this.handleChange}/>
                        <button >Gen</button>
                   </form>
                   <div className="meme">
                       <img src={this.state.randomImage} alt=""/>
                       <h2 className="top">{this.state.topText}</h2>
                       <h2 className="bottom">{this.state.bottomText}</h2>
                       </div>
                </div>
        )
    }
}


export default MemeGenerator