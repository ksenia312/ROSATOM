import React from "react";
import {connect} from "react-redux";
import {Footer, Header} from "@components";
import style from './Landing.module.scss'
import {push} from "connected-react-router";

export default connect(
  (state) => ({}),
  (dispatch) => ({
    routeToAuth: () => dispatch(push('/authorization')),
    routeToTest: () => dispatch(push('/test')),
  })
)(class Landing extends React.Component {

  render() {
    return (
      <div className={style.landing__container}>
        <Header/>
        <div className={style.content__container}>
          <div>Ежегодно в России происходит большое количество чрезвычайных ситуаций, приводящих к экологическому
            ущербу, в том числе, нефтеразливы.
            Согласно данным Министерства энергетики только за 2019 год на предприятиях топливно-энергетического
            комплекса произошло более 17 тысяч аварий с разливами нефти. Из них 10,5 тысячи случаев случились на
            нефтепроводах.
            Мы обнаруживаем факты аварий на нефтепроводах, оцениваем потенциальный ущерб природе, а также продвигаем в
            массы необходимость помощи пострадавшим животным.
          </div>
        </div>
        <Footer />
      </div>
    )
  }
})
