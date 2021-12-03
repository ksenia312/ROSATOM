import React from "react"
import style from './AccidentsGalleryMini.module.scss'
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {AccidentMini} from "@components";
import classNames from "classnames";

export default connect(
  (store) => ({
    accidents_data: store.accidents.getIn(['accidents_data']).toJS(),
    pathname: store.router.location.pathname
  }),
  (dispatch) => ({
  })
)
(class AccidentsGalleryMini extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {accidents_data} = this.props
    const accidentClassNames = classNames(
      style.accidents_gallery,
      {[style.left]: this.props.left},
      {[style.center]: this.props.center}
    );
    console.log(this.props)
    return (

      <div className={accidentClassNames}>
        {
          Object.values(accidents_data).map(e => (<AccidentMini
              key={e.id}
              id={e.id}
              img={e.img}
              name={e.name}
              date={e.date}
              time={e.time}
              status={e.status}
            />
          ))
        }
      </div>
    )
  }
})