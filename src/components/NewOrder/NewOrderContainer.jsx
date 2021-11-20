import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getOrderImages } from '../../redux/selectors/new-order-selector'
import NewOrder from './NewOrder'

class NewOrderContainer extends Component { 
    render() { 
        return (
            <NewOrder images={this.props.images}/>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        images: getOrderImages(state)
    } 
}

export default compose(connect(mapStateToProps))(NewOrderContainer)
