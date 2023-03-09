import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./BarChart.css";
import PropTypes from "prop-types";

/**
 * component that displays the graph UserBarchart
 * @Component - UserBarChart
 * @param {object} dataActivity - get user activity data
 * @returns
 */

export default function UserBarChart({ dataActivity }) {
  const { userSession, units, legend, colors } = dataActivity;
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="barchart__graph__tooltip">
          <p className="label">{`${payload[0].value}${units[0]}`}</p>
          <p className="label">{`${payload[1].value}${units[1]}`}</p>
        </div>
      );
    }
  };
  return (
    <div className="barchart">
      <div className="barchart__legend">
        <div className="barchart__legend__titre">Activité quotidienne</div>
        <div className="barchart__legend__xy">
          {legend.map((legend, index) => (
            <div key={index} className={"barchart__legend__xy__" + index}>
              <div
                className={"barchart__legend__xy__" + index + "__circle"}
              ></div>
              <div className={"barchart__legend__xy__" + index + "__label"}>
                {legend}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="barchart__graph">
        <ResponsiveContainer>
          <BarChart data={userSession} barGap={8}>
            <CartesianGrid vertical={false} stroke="#DEDEDE" />
            <XAxis
              domain={["dataMin", "dataMax"]}
              dataKey="index"
              padding={{ left: 10, right: 10 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              dataKey="calories"
              domain={[0, "dataMax"]}
              hide={false}
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <Tooltip content={CustomTooltip} />
            <Bar
              dataKey="kilogram"
              fill={colors[0]}
              radius={[3, 3, 0, 0]}
              barSize={8}
            />
            <Bar
              dataKey="calories"
              fill={colors[1]}
              radius={[3, 3, 0, 0]}
              barSize={8}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

UserBarChart.propTypes = {
  dataActivity: PropTypes.object,
};
