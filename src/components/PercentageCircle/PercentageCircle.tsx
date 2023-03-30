import React from 'react';
import './PercentageCircle.scss';

interface CircleSvgProp {
  percent: number;
  color: string;
  label: string;
  size: number;
  strokeWidth: number;
}

const CircleSvg = (props: CircleSvgProp) => {
  const { percent, size, strokeWidth, color, label } = props;
  return (
    <svg
      className='percentage-circle-chart'
      viewBox='0 0 36 36'
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className='percentage-circle'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={`${percent}, 100`}
        strokeLinecap='round'
        fill='none'
        d='M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831'
      />
      <text
        className='percentage-circle-info'
        x='40%'
        y='55%'
        alignmentBaseline='central'
        textAnchor='middle'
        fontSize='2'
        fill={color}
      >
        {label}
      </text>
      <text
        className='percentage-circle-info'
        x='60%'
        y='50%'
        alignmentBaseline='central'
        textAnchor='middle'
        fontSize='4'
        fill={color}
      >
        {`${percent}%`}
      </text>
    </svg>
  );
};

interface PercentageCirleProp {
  percentage: number;
  label: string;
}

export default function PercentageCirle(props: PercentageCirleProp) {
  const { label, percentage } = props;

  return (
    <>
      <CircleSvg percent={percentage} label={label} strokeWidth={2} color={'#fff'} size={300} />
    </>
  );
}
