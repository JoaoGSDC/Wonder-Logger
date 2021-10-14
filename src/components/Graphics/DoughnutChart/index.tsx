import { Doughnut } from 'react-chartjs-2'

interface IPropsDTO {
  label: string
  dataNumbers: number[]
  mainColor?: string
}

const DoughnutChart = ({ label, mainColor, dataNumbers }: IPropsDTO) => {
  const data = {
    labels: [],
    datasets: [
      {
        label,
        data: dataNumbers,
        backgroundColor: [mainColor, '#3f3852'],
        borderColor: [mainColor, '#3f3852'],
        borderWidth: 1
      }
    ]
  }

  return (
    <>
      <Doughnut data={data} />
    </>
  )
}
export default DoughnutChart
