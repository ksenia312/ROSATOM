import React from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import style from './Authorization.module.scss';
import Input from "@ui/Input";
import {doFetchForm} from "@reducers/usersActions";

export default connect(
    (state) => ({
        users: state.users.getIn(['users_data']).toJS()
    }),
    (dispatch) => ({
        routeToLanding: () => dispatch(push('/')),
        doFetchForm: (data, successChecker) => doFetchForm(dispatch, data, successChecker),
    })
)(class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                username: '',
                password: ''
            }
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({form: {...this.state.form, username: event.target.value}});
    }

    handlePasswordChange(event) {
        this.setState({form: {...this.state.form, password: event.target.value}});
    }

    handleSubmit(event) {
        console.log('данные:', this.state.form)
        event.preventDefault();
        this.props.doFetchForm(this.state.form, r=>console.log(r))
    }

    render() {
        return (
            <div className={style.auth__container}>
                <div className={style.auth__modal}>
                    <div className={style.auth__head}>
                        <h2>Вход</h2>
                    </div>
                    <form className={style.auth__form} onSubmit={this.handleSubmit}>
                        <label>
                            <input className={style.form__input} value={this.state.value} onChange={this.handleNameChange} placeholder={"введите логин"} />
                        </label>
                        <label>
                            <input className={style.form__input} type={'password'} value={this.state.value} onChange={this.handlePasswordChange} placeholder={"введите пароль"}/>
                        </label>
                        <input className={style.form__button} type="submit" value="войти"/>
                    </form>
                </div>
            </div>
        )
    }
})