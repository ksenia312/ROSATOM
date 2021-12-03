import React from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Authorization, Cabinet, Landing, Charity, Accident, PDF, ModalRequest} from "@pages";


export default connect(
  (state) => ({
    location: state.router.location.pathname,
    access_token: state.users.getIn(['access_token'])
  }),
  () => ({})
)(class App extends React.Component {

  static propTypes = {
    location: PropTypes.string.isRequired,
  }

  routes = [
    ['^/$', () => <Landing/>],
    ['^/authorization', () => <Authorization/>],
    ['^/accident', () => <Accident/>] ,
    ['^/pdf', () => <PDF/>],
    ['^/charity', () => <Charity/>] ,
    ['^/request', () => <ModalRequest/>] ,
    // Path for / (main page with tasks)
  ]

  route = path => this.routes.find(r => path.match(r[0]) !== null)?.[1]?.()

  render() {
    if (this.props.access_token && this.routes.length<7) {
      this.routes.push(['^/cabinet', () => <Cabinet/>])
    }
    return (
      <>
        {this.route(this.props.location)}
      </>
    )
  }
})
