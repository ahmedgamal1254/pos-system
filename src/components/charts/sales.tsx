import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function SalesLineChart() {
  return (
   <>
    <h2 className="text-xl font-bold mb-4 text-gray-500">المبيعات خلال عام 2024</h2>

    <LineChart
    height={300}
    series={[
      { data: [1000,500,100,200,300,1200,150,350,250,200,125,110], label: 'المبيعات خلال عام 2024', yAxisId: 'leftAxisId' },
    ]}
    xAxis={[{ scaleType: 'point', data: ["يناير","فبراير","مارس","إبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"] }]}
    yAxis={[
      { id: 'leftAxisId', width: 50 },
      { id: 'rightAxisId', position: 'right' },
    ]}
    />
   </>
  );
}