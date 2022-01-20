import React from 'react'
import { Line, Chart } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const LineChart = () => {
    return (
        <div>
            <Line
                data={{
                    labels: ['22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
                    datasets:[
                        {
                            label: 'Heart Rate',
                            data: [75, 73, 60, 62, 60, 68, 72, 75, 79]
                        },
                    ],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales:{
                        yAxis: {
                            suggestedMin: 50,
                            suggestedMax: 90
                        }
                            
                    },
                }}
            />
        </div>
    )
} 

export default LineChart