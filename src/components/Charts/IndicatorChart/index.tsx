import { useState, useEffect, useRef } from 'react'
import { Bar as Chart } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

import { options as ChartOptions } from '@config/chart'

import { DatasetProps, generateChartData } from '@lib/charts'

import { Container, ChartTitle } from './styles'

interface IndicatorChartProps {
  indicator: DatasetProps
}

const IndicatorChart: React.FC<IndicatorChartProps> = ({ indicator }) => {
  const [chartData, setChartData] = useState<any>()

  const chartRef = useRef<any>()

  useEffect(() => {
    if (indicator) {
      const data = generateChartData(indicator)

      if (chartRef.current?.data) {
        chartRef.current.data = null
      }

      setChartData(data)
    }
  }, [])

  useEffect(() => {
    if (indicator) {
      const structure = generateChartData(indicator)

      if (chartRef?.current) {
        chartRef.current.data = null
      }

      setChartData(structure)
    }
  }, [indicator])

  return (
    <Container>
      <ChartTitle>
        <h1>{indicator.nome}</h1>
        <p>{indicator.formula}</p>
      </ChartTitle>
      <Chart
        ref={chartRef}
        data={chartData}
        plugins={[ChartDataLabels]}
        options={{
          ...ChartOptions
        }}
      />
    </Container>
  )
}

export default IndicatorChart
