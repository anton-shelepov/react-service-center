import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getQuestions, getServices } from '../../redux/selectors/home-selector'
import Home from './Home'

class HomeContainer extends Component { 
    render() { 
        return (
            <Home services={this.props.services} questions={this.props.questions}/> 
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        services: getServices(state),
        questions: getQuestions(state)
    } 
}

export default compose(connect(mapStateToProps))(HomeContainer)
