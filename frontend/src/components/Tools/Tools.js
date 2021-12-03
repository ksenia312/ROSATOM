import {connect} from "react-redux";
import React from "react";
import style from './Tools.module.scss'
import Button from "@ui/Button";
import {ModalPlane, ModalReport, PDF} from "@components";
import {changeVisibilityModal, setDropdownValue} from "@reducers/accidentsActions";

export default connect(
  (state) => ({
    modals: state.accidents.getIn(['modals']).toJS(),
    accidents_data: state.accidents.getIn(['accidents_data']).toJS(),
  }),
  (dispatch) => ({
    changeVisibilityModal: (modal_type, successChecker) => changeVisibilityModal(dispatch, modal_type, successChecker),
    setDropdownValue: (data) => setDropdownValue(dispatch, data)
  })
)(class Tools extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSelect = this.onChangeSelect.bind(this);
  }
  onChangeSelect(event) {
    let data = {}
    Object.values(this.props.accidents_data).map(item => {
      if (item.id === parseInt(event.target.value))
        data = item
    })
    console.log(event)
    this.props.setDropdownValue(data)

  }
  render() {
    const {accidents_data} = this.props
    return (
      <div id={"tools"} className={style.tools__container}>
        <div className={style.tools__content}>
          <h3>Выберите потенциальную аварию для совершения действий</h3>
          <select className={style.tools__dropdown} onChange={this.onChangeSelect}>
            {
              Object.values(accidents_data).map(e => (
                <option key={e.id} value={e.id}>{e.name} {e.date}</option>
              ))
            }
          </select>
          <div className={style.tools__buttons}>
            <div className={style.tools_Column}>

              <Button onClick={() => {
                this.props.changeVisibilityModal({modal_reportPDF: true});
              }}>
                <i className="fas fa-file-pdf"/> Сформировать отчёт по аварии
              </Button>

              {this.props.modals.modal_reportPDF ? <ModalReport type={'PDF'}/> : null}

              <Button onClick={() => this.props.changeVisibilityModal({modal_reportEXCEL: true})}>
                <i className="fas fa-file-excel"/>
                Сформировать сводный отчёт
              </Button>
              {this.props.modals.modal_reportEXCEL ? <ModalReport type={'EXCEL'}/> : null}
            </div>
            <div className={style.tools_Column}>
              <Button onClick={() => this.props.changeVisibilityModal({modal_plane: true})}><i
                className="fas fa-plane"/> Отправить БПЛА</Button>
              {this.props.modals.modal_plane ? <ModalPlane/> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
})