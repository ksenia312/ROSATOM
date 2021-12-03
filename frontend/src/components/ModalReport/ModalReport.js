import {connect} from "react-redux";
import React from "react";
import style from './ModalReport.module.scss'
import Button from "@ui/Button";
import {changeVisibilityModal} from "@reducers/accidentsActions";

export default connect(
  (state) => ({}),
  (dispatch) => ({
    changeVisibilityModal: (modal_type, successChecker) => changeVisibilityModal(dispatch, modal_type, successChecker),
  })
)(class ModalReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type === 'EXCEL' ? {modal_reportEXCEL: true} : {modal_reportPDF: true}
    }
  }

  render() {
    return (
      <div className={style.modalReport__container}>
        <div className={style.modalReport__header}>
          <h3>Вы уверены, что хотите сформировать отчёт в формате {this.props.type}?</h3>
        </div>
        <div className={style.modalReport__buttons}>
          <Button small>Сформировать отчёт</Button>
          <Button small onClick={() => this.props.changeVisibilityModal(this.state.type)}>Отмена</Button>
        </div>
      </div>
    )
  }
})
