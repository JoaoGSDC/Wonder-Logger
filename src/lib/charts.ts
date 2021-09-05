import {
  parseISODateToDayAndMonth,
  parsedISODateToISOWeek,
  parseISODateToMonthAndYear
} from '@utils/date'

interface ChartDatasetDataProps {
  x: string
  y: number | string
}

interface ChartDatasetProps {
  label: string
  data: ChartDatasetDataProps[]
  borderColor?: string[]
  backgroundColor: string[]
  type?: any
  order: number
  tension?: number
  elements?: any
  datalabels?: any
}

export interface ChartDataProps {
  datasets: ChartDatasetProps[]
}

export type DatasetValueProps = {
  valor: number
  valorMinimoNaInsercao: number
  valorMaximoNaInsercao: number
  dataReferencia?: string | number
  dataDaInsercao: string
}

export type DatasetProps = {
  codigoUgb: string
  nome: string
  formula: string
  tipoDeMedida: string
  unidadeDeMedida: string
  unidadeDeMedidasPlural: string
  valorMinimo: number
  valorMaximo: number
  frequencia: number
  tipo: number
  valores: DatasetValueProps[]
}

export const generateChartData = (indicator: DatasetProps): ChartDataProps => {
  const data = {
    datasets: [
      {
        label: 'Quantidade',
        data: [],
        type: 'bar',
        backgroundColor: [],
        order: 2,
        datalabels: {
          display: true
        }
      },
      {
        label: indicator.tipo === 2 ? 'Mínimo' : 'Meta',
        data: [],
        type: 'line',
        order: 1,
        borderColor: ['#52b032'],
        backgroundColor: ['#52b032'],
        tension: 0.2,
        elements: {
          point: {
            radius: 0
          }
        },
        datalabels: {
          display: false
        }
      },
      {
        label: indicator.tipo === 2 ? 'Máximo' : 'Capacidade Máxima',
        data: [],
        type: 'line',
        order: 1,
        borderColor: indicator.tipo === 2 ? ['#52b032'] : ['black'],
        backgroundColor: indicator.tipo === 2 ? ['#52b032'] : ['black'],
        tension: 0.2,
        elements: {
          point: {
            radius: 0
          }
        },
        datalabels: {
          display: false
        }
      }
    ]
  }

  indicator.valores.forEach(value => {
    if (indicator.frequencia === 0) {
      data.datasets[0].data.push({
        x: parseISODateToDayAndMonth(value.dataDaInsercao),
        y: value.valor
      })

      data.datasets[1].data.push({
        x: parseISODateToDayAndMonth(value.dataDaInsercao),
        y: value.valorMinimoNaInsercao
      })

      data.datasets[2].data.push({
        x: parseISODateToDayAndMonth(value.dataDaInsercao),
        y: value.valorMaximoNaInsercao
      })
    }

    if (indicator.frequencia === 1) {
      data.datasets[0].data.push({
        x: parsedISODateToISOWeek(value.dataDaInsercao),
        y: value.valor
      })

      data.datasets[1].data.push({
        x: parsedISODateToISOWeek(value.dataDaInsercao),
        y: value.valorMinimoNaInsercao
      })

      data.datasets[2].data.push({
        x: parsedISODateToISOWeek(value.dataDaInsercao),
        y: value.valorMaximoNaInsercao
      })
    }

    if (indicator.frequencia === 2) {
      data.datasets[0].data.push({
        x: parseISODateToMonthAndYear(value.dataDaInsercao),
        y: value.valor
      })

      data.datasets[1].data.push({
        x: parseISODateToMonthAndYear(value.dataDaInsercao),
        y: value.valorMinimoNaInsercao
      })

      data.datasets[2].data.push({
        x: parseISODateToMonthAndYear(value.dataDaInsercao),
        y: value.valorMaximoNaInsercao
      })
    }
  })

  const { tipo } = indicator

  if (tipo === 0) {
    for (let i = 0; i < data.datasets[0].data.length; i++) {
      data.datasets[0].data[i].y < data.datasets[1].data[i].y
        ? data.datasets[0].backgroundColor.push('red')
        : data.datasets[0].backgroundColor.push('blue')
    }
  }

  if (tipo === 1) {
    for (let i = 0; i < data.datasets[0].data.length; i++) {
      data.datasets[0].data[i].y > data.datasets[1].data[i].y
        ? data.datasets[0].backgroundColor.push('red')
        : data.datasets[0].backgroundColor.push('blue')
    }
  }

  if (tipo === 2) {
    for (let i = 0; i < data.datasets[0].data.length; i++) {
      data.datasets[0].data[i].y >= data.datasets[1].data[i].y &&
      data.datasets[0].data[i].y <= data.datasets[2].data[i].y
        ? data.datasets[0].backgroundColor.push('blue')
        : data.datasets[0].backgroundColor.push('red')
    }
  }

  return data
}
