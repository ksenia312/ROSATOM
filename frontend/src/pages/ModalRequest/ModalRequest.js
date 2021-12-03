import React from "react";
import {connect} from "react-redux";
import {Footer, Header} from "@components";
import style from './ModalRequest.module.scss'
import {push} from "connected-react-router";
import Button from "@ui/Button";


export default connect(
    (state) => ({}),
    (dispatch) => ({
        routeToAuth: () => dispatch(push('/authorization')),
        routeToTest: () => dispatch(push('/test')),
    })
)(class ModalRequest extends React.Component {

    render() {
        return (
            <div className={style.modalRequest__container}>

            </div>
        )
    }
})