import './App.css'
import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export default function BarChart1() {
  const get = (p: any, type = 'real') => {
    const CustomBackground = (props: any) => {
      const { p, type } = props

      const isReal = type === 'real'
      let { fill, x, y, width, height } = p
      if (height === 0) {
        return null
      }
      height = height.toFixed(0)
      x = x.toFixed(0)
      width = width.toFixed(0)
      const leftW = (width * 0.36).toFixed(0)
      const rightW = (width * 0.64).toFixed(0)
      const a = 10
      const a3 = 30
      const a12 = 12
      return (
        <g key={`${x}-${y}`}>
          <defs>
            <linearGradient
              id="grad1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%">
              <stop
                offset="0%"
                stopColor="#4DBAE5"
              />
              <stop
                offset="100%"
                stopColor="#3E80E2"
              />
            </linearGradient>
          </defs>
          <path
            d={`M${x},${y + a}  v${
              height - a3
            } l${leftW},${a12} l${rightW},-${a12} v-${
              height - a3
            } l-${rightW},${a} L${x},${y + a}z`}
            fill="url(#grad1)"
            strokeWidth="0"
            opacity={isReal ? 0.5 : 0.2}></path>
          <path
            d={`M${x},${
              y + a
            } l ${rightW},-${a} l${leftW},${a} l-${rightW},${a} L${x},${
              y + a
            }z`}
            fill="url(#grad1)"
            stroke="pink"
            strokeWidth="0"
            opacity={isReal ? 0.7 : 0.4}></path>
        </g>
      )
    }
    return (
      <CustomBackground
        p={p}
        type={type}
        key={`CustomBackground-${p.x}-${p.y}`}
      />
    )
  }

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="pv"
        fill="none"
        shape={(p) => get(p, 'real')}
        background={(p) => get(p, 'bg')}
      />
    </BarChart>
    //
  )
}
