import React from "react";
import {connect} from "react-redux";
import {AccidentMini, AccidentsGalleryMini, Footer, Header, Goals} from "@components";
import style from './Landing.module.scss'
import {push} from "connected-react-router";
import Button from "@ui/Button";

export default connect(
  (state) => ({}),
  (dispatch) => ({
    routeToCharity: () => dispatch(push('/charity')),
  })
)(class Landing extends React.Component {

  render() {
    return (
      <div className={style.landing__container}>
        <Header/>
        <div className={style.content__container}>
            <div className={style.content__button}><Button>Сообщить об аварии</Button></div>
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
          <div className={style.content__charity_container}>
              <div className={style.content__button}><Button onClick={this.props.routeToCharity}>Как ещё я могу помочь? <i className="fas fa-arrow-right"/></Button></div>
              <div className={style.content__charity_text}>
                  Благодарим Вас за Ваше неравнодушие и тот вклад, который Вы внесли в дело восстановления и сохранения экологического равновесия на нашей Планете.<br />
                  Каждое пожертвование ценно для нас не только в своем денежном эквиваленте, но и в проявлении понимания и заботы о нашем общем будущем. Заботясь о природе, мы заботимся, в первую очередь о себе и своих детях.
              </div>
          </div>
        <Footer />
      </div>
    )
  }
})
