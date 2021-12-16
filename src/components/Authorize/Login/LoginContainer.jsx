import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthDataAC } from '../../../redux/auth-reducer'
import Login from './Login'

class LoginContainer extends Component { 
    render() { 
        return (
            <Login setAuthData={this.props.setAuthData}/>
        )
    }
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = (dispatch) => ({
    setAuthData: (userLogin, userPassword) => dispatch(setAuthDataAC(userLogin, userPassword))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)