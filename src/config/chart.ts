import { ChartOptions } from 'chart.js'

export const options: ChartOptions = {
  plugins: {
    legend: { display: false },
    datalabels: {
      font: {
        size: 12,
        family: 'Poppins'
      },
      color: 'white',
      formatter: function (value) {
        if (value.y > 5) {
          return value.y
        }

        return ''
      }
    }
  }
}
