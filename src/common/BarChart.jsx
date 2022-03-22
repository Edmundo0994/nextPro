import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = ({ chartData }) => {
  return (
    <>
      <Bar
        className="mb-8 mt-2 max-h-96"
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Category',
            fontSize: 20,
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  )
}

export default BarChart
