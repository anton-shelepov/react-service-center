import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutAC} from '../../redux/auth-reducer'
import { getIsAuth} from '../../redux/selectors/auth-selector'
import Header from './Header'

class HeaderContainer extends Component {
    render() {
        return (
            <Header
                isAuth={this.props.isAuth} 
                logout={this.props.logout}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutAC()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)