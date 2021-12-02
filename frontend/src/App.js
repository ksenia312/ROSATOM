import React from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Landing} from "@pages";
import Cabinet from "@pages/Cabinet/Cabinet";


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
