import React from 'react';
import { Pie, Column } from '@ant-design/plots';

import './chart-examples.css'

const DemoPie = () => {
  const data = [
    {
      type: 'Category 1',
      value: 27,
    },
    {
      type: 'Category 2',
      value: 25,
    },
    {
      type: 'Category 3',
      value: 18,
    },
    {
      type: 'Category 4',
      value: 15,
    },
    {
      type: 'Category 5',
      value: 10,
    },
    {
      type: 'Category 6',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  const barChartData = [
    {
      "year": "1991",
      "value": 3,
      "type": "Lon"
    },
    {
      "year": "1992",
      "value": 4,
      "type": "Lon"
    },
    {
      "year": "1993",
      "value": 3.5,
      "type": "Lon"
    },
    {
      "year": "1994",
      "value": 5,
      "type": "Lon"
    },
    {
      "year": "1995",
      "value": 4.9,
      "type": "Lon"
    },
    {
      "year": "1996",
      "value": 6,
      "type": "Lon"
    },
    {
      "year": "1997",
      "value": 7,
      "type": "Lon"
    },
    {
      "year": "1998",
      "value": 9,
      "type": "Lon"
    },
    {
      "year": "1999",
      "value": 13,
      "type": "Lon"
    },
    {
      "year": "1991",
      "value": 3,
      "type": "Bor"
    },
    {
      "year": "1992",
      "value": 4,
      "type": "Bor"
    },
    {
      "year": "1993",
      "value": 3.5,
      "type": "Bor"
    },
    {
      "year": "1994",
      "value": 5,
      "type": "Bor"
    },
    {
      "year": "1995",
      "value": 4.9,
      "type": "Bor"
    },
    {
      "year": "1996",
      "value": 6,
      "type": "Bor"
    },
    {
      "year": "1997",
      "value": 7,
      "type": "Bor"
    },
    {
      "year": "1998",
      "value": 9,
      "type": "Bor"
    },
    {
      "year": "1999",
      "value": 13,
      "type": "Bor"
    }
  ]

  const barChartConfig = {
    data: barChartData,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return (
    <>
      <Column {...barChartConfig} />
      <Pie className='pie-chart' {...config} />
    </>)
};
export default DemoPie