import React from 'react'
import { connect } from 'react-redux'

class UserHeader extends React.Component {

    render () {
        
        const {user} = this.props
        // console.log('this.props - ' + this.props)

        if(!user) {
            return null
        }
        return <div  className="header" style={{marginTop: 10}}>{user.name}</div> //
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.user.find(user => user.id === ownProps.userId)};
};

export default connect(
    mapStateToProps
) (UserHeader)
