import React from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Authorization, Cabinet, Landing} from "@pages";
import Accident from "@pages/Accident/Accident";



export default connect(
  (state) => ({
    location: state.router.location.pathname,
  }),
  () => ({})
)(class App extends React.Component {

  static propTypes = {
    location: PropTypes.string.isRequired,
  }

  routes = [
    ['^/$', () => <Landing/>],
    ['^/cabinet', () => <Cabinet/>],
    ['^/authorization', () => <Authorization/>],
    ['^/accident', () => <Accident/>] ,//
    // Path for / (main page with tasks)
  ]


  route = path => this.routes.find(r => path.match(r[0]) !== null)?.[1]?.()

  render() {
    return (
      <>
        {this.route(this.props.location)}
      </>
    )
  }
})
