import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrders } from '../../redux/selectors/oreders-status-selector'
import OrdersStatus from './OrdersStatus'

class OrdersStatusContainer extends Component {
    render() {
        return (
            <OrdersStatus orders={this.props.orders} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: getOrders(state)
    }
}

export default connect(mapStateToProps)(OrdersStatusContainer)