import React from "react";
import { LineChart, Tooltip, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'
import PropTypes from 'prop-types'

export default class Rechart extends React.Component {

    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        bottomFontSize: PropTypes.number,
        leftFontSize: PropTypes.number,
        XAsisKey: PropTypes.string.isRequired,
        MainAsisKey: PropTypes.string.isRequired,
        ChartStrokeColor: PropTypes.string,
        ShowGrid: PropTypes.bool,
        LegendVerticalAligment: PropTypes.string,
        ShowTooltip: PropTypes.bool,
    }

    render() {
        return (
            <div>
                <LineChart
                    width={this.props.width}
                    height={this.props.height}
                    data={this.props.data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <Line type="monotone" strokeWidth={3} dataKey={this.props.MainAsisKey} stroke={this.props.ChartStrokeColor} />
                    {this.props.ShowGrid === true && <CartesianGrid />}
                    <XAxis style={{ fontSize: `${this.props.bottomFontSize}px` }} dataKey={this.props.XAsisKey} />
                    <YAxis style={{ fontSize: `${this.props.leftFontSize}px` }} />
                    {this.props.ShowTooltip && <Tooltip />}
                    
                    {this.props.ShowLegend && <Legend verticalAlign={this.props.LegendVerticalAligment || "bottom"}/>}
                </LineChart>
            </div>
        )
    }
}