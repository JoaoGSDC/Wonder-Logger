export const greenGraph = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
  datasets: [
    {
      label: 'Success',
      data: [12, 19, 9, 5, 8],
      backgroundColor: ['#55d446', '#55d446', '#55d446', '#e64343', '#55d446'],
      borderColor: ['#55d446', '#55d446', '#55d446', '#e64343', '#55d446'],
      borderWidth: 1
    }
  ]
}

export const redGraph = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
  datasets: [
    {
      label: 'Errors',
      data: [17, 12, 9, 5, 14],
      backgroundColor: ['#e64343', '#e64343', '#e64343', '#55d446', '#e64343'],
      borderColor: ['#e64343', '#e64343', '#e64343', '#55d446', '#e64343'],
      borderWidth: 1
    }
  ]
}

function randomNumber() {
  const number = Math.floor(Math.random() * 10)

  return number > 0 ? number : 1
}

export const randomGraph = () => {
  const linear = 5
  const data = [
    randomNumber(),
    randomNumber(),
    randomNumber(),
    randomNumber(),
    randomNumber()
  ]
  return {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: data[0] <= linear ? 'Errors' : 'Success',
        data: data,
        backgroundColor: [
          data[0] <= linear ? '#e64343' : '#55d446',
          data[1] <= linear ? '#e64343' : '#55d446',
          data[2] <= linear ? '#e64343' : '#55d446',
          data[3] <= linear ? '#e64343' : '#55d446',
          data[4] <= linear ? '#e64343' : '#55d446'
        ],
        borderWidth: 1
      }
    ]
  }
}
