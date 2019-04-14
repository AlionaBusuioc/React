//din package-ul 'react' importeaza clasa Component
import React, {Component} from 'react'

//COMUNA!!!
let likes = 0;

class Button extends Component{
    
    //fiecare button
    doIt(){
        likes++;
        console.log(likes);
    }
render(){
    return(
        <button onClick={this.doIt}>I like this</button>
    )
}
}
//pentru ca alte module sa-l poata utiliza
export default Button;