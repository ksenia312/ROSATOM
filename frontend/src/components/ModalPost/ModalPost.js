import {connect} from "react-redux";
import React from "react";
import style from './ModalPost.module.scss'
import {HeaderMini} from "@components";
import Button from "@ui/Button";

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(class ModalPost extends React.Component {


    render() {
        return (
            <div className={style.modalPost__container}>
                post
            </div>
        )
    }
})
