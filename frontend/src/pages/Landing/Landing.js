import React from "react";
import {connect} from "react-redux";
import {Footer, Header, Goals} from "@components";
import style from './Landing.module.scss'
import {push} from "connected-react-router";
import Button from "@ui/Button";

export default connect(
  (state) => ({}),
  (dispatch) => ({
    routeToCharity: () => dispatch(push('/charity')),
    routeToRequest: () => dispatch(push('/request')),
  })
)(class Landing extends React.Component {

  render() {
    return (
      <div className={style.landing__container}>
        <Header/>
        <div className={style.content__container} id={'warn'}>
            <div className={style.content__button}><Button onClick={this.props.routeToRequest}>Сообщить об аварии</Button></div>
            <div className={style.content__text}>
            Ежегодно в России происходит большое количество чрезвычайных ситуаций, приводящих к экологическому
            ущербу, в том числе, нефтеразливы.<br />
            Согласно данным Министерства энергетики только за 2019 год на предприятиях топливно-энергетического
            комплекса произошло более <b>17 тысяч</b> аварий с разливами нефти. Из них <b>10,5 тысячи</b> случаев случились на
            нефтепроводах.<br />
            Мы обнаруживаем факты аварий на нефтепроводах, оцениваем потенциальный ущерб природе, а также продвигаем в
            массы необходимость помощи пострадавшим животным.
          </div>
        </div>
        <Goals />
          <div className={style.content__charity_container} id={'help'}>
              <div className={style.content__button}><Button onClick={this.props.routeToCharity}>Как ещё я могу помочь? <i className="fas fa-arrow-right"/></Button></div>
              <div className={style.content__charity_text}>
                  Благодарим Вас за неравнодушие к проблеме разлива нефти. <br />
                  Нам важна Ваша помощь.<br />
                  Вы помогаете экологии, что действительно важно!
              </div>
          </div>
        <Footer />
      </div>
    )
  }
})
