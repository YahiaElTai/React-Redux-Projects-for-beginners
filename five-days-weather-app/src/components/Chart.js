/* eslint-disable no-plusplus */
import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import PropTypes from 'prop-types';

const average = data => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return Math.round(sum / data.length);
};

const Chart = ({ color, data }) => (
  <div>
    <Sparklines height={100} width={140} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div className="avg">{average(data)}</div>
  </div>
);

Chart.propTypes = {
  color: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default Chart;
