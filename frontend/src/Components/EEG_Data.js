import React from 'react'
import { Line, Chart } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const EEG_Data = () => {
    return (
        <div>
            <Line
                data={{
                    labels: ['22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
                    datasets:[
                        {
                            label: 'REM Detection',
                            data: [1, 2, 3, 4, 2, 4, 3, 2, 1]
                        },
                    ],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales:{
                        yAxis: {
                            suggestedMin: 0,
                            suggestedMax: 5
                        }
                            
                    },
                }}
            />
        </div>
    )
} 

export default EEG_Data