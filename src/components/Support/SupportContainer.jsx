import React, { Component } from 'react'
import { connect } from 'react-redux'
import Support from './Support'

class SupportContainer extends Component {
    render() {
        return (
            <Support />
        )
    }
}

const mapStateToProps = (props) => ({
    props
})

export default connect(mapStateToProps)(SupportContainer)