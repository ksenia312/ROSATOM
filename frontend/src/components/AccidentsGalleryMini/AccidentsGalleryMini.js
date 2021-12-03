import React from "react"
import style from './AccidentsGalleryMini.module.scss'
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {AccidentMini} from "@components";

export default connect(
  (store) => ({
    accidents_data: store.accidents.getIn(['accidents_data']).toJS(),
    pathname: store.router.location.pathname
  }),
  (dispatch) => ({
  })
)
(class AccidentsGalleryMini extends React.Component {

  render() {
    const {accidents_data} = this.props
    return (
      <div className={style.accidents_gallery_mini}>
        {
          Object.values(accidents_data).slice(0,3).map(e => (<AccidentMini
              key={e.id}
              id={e.id}
              img={e.img}
              name={e.name}
              date={e.date}
              time={e.time}
              status={e.status}
              region={e.region}
            />
          ))
        }
      </div>
    )
  }
})