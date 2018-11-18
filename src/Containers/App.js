import React, {Component} from 'react';
import {setSearchField, requestRobots} from '../action';
import {connect} from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';
import Header from '../Components/Header';

const mapStateToProps = (state) => {
    
    return {
        searchField : state.SearchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots : () => dispatch(requestRobots())
    }
}

class App extends Component{

    // constructor(){
    //     super(); 
    //     this.state = {
    //         robots:[]
    //     }
    // }

    componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    //         return response.json();
    //     }).then(users => {
    //         this.setState({robots:users});
    //     })
            this.props.onRequestRobots();
    }

    render(){

        const FilteredRobots = this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });

        return this.props.isPending ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <Header></Header>
                    <SearchBox searchChange={this.props.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {FilteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);