import { useState, useEffect, useRef } from 'react'
import { Bar as Chart } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

import { options as ChartOptions } from '@config/chart'

import { DatasetProps, generateChartData } from '@lib/charts'

import { Container, ChartTitle } from './styles'

interface ExampleChartProps {
  indicator: DatasetProps
}

const ExampleChart: React.FC<ExampleChartProps> = ({ indicator }) => {
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

export default ExampleChart
