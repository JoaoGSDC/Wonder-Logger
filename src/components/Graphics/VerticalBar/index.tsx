import { Bar } from 'react-chartjs-2'

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 9, 5, 8],
      backgroundColor: ['#6B43E6', '#8F2E8C', '#5469F7', '#D3A9EB', '#AFD7FE'],
      borderColor: [
        '#773dc9',
        '#b622fa',
        '#773dc9',
        'rgba(153, 102, 255, 1)',
        '#5fa3b8'
      ],
      borderWidth: 1
    }
  ]
}

/* const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
} */

const VerticalBar: React.FC<any> = ({ graph }) => (
  <>
    <Bar
      data={graph || data}
      options={{
        responsive: true
      }}
    />
  </>
)

export default VerticalBar
