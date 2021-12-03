import React from "react";
import {connect} from "react-redux";
import style from './Statictic.module.scss'
import {Rechart} from "@components";


export default connect(
  (state) => ({}),
  (dispatch) => ({})
)(class Statistic extends React.Component {
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
  render() {
    const data = []
    for (let i = 0; i < 20; i++)
      data[i] = {statistics: this.getRandomInt(10, 30), time: `${10+i}.11`}
    return (
      <div id={'statistics'} className={style.statistic__container}>
        <div>
          <h2>Статистика</h2>
          <h3>Количество аварий в Вашем регионе за последний месяц</h3>
        </div>
        <div style={{margin: "100px"}}>
          <Rechart
            data={data}
            width={600}
            height={400}
            bottomFontSize={18}
            leftFontSize={18}
            XAsisKey="time"
            MainAsisKey="statistics"
            ChartStrokeColor="#8884d8"
            ShowGrid={true}
            ShowLegend={true}
            LegendVerticalAligment="bottom"
            ShowTooltip={true}
          />
        </div>
      </div>
    )
  }
})
