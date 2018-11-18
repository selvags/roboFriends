import React,{Component} from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
    

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    render(){
        console.log('Headers');    
        return(
            <div>
                <h1 className='f1'>Robo Friends</h1>
                <CounterButton color={'red'}></CounterButton>
            </div>
            
        )

    }

}

export default Header;