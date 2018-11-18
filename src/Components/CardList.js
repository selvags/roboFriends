import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component{
     render(){
        console.log('CardList');
         const {robots} = this.props;
         const cardsArray = robots.map(user => {
            return <Card key = {user.id} id = {user.id} name = {user.name} email = {user.email}/>
         });
         return(
             <div>
                {
                    //we can user map function directly into this also without having a constant.
                    cardsArray
                } 
             </div>
         )
     }
}

export default CardList;