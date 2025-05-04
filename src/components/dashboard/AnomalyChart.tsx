
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceDot
} from 'recharts';

// Mock data for KPI metrics
const mockData = [
  { time: '00:00', throughput: 42, latency: 15, anomaly: false },
  { time: '01:00', throughput: 45, latency: 14, anomaly: false },
  { time: '02:00', throughput: 39, latency: 16, anomaly: false },
  { time: '03:00', throughput: 37, latency: 17, anomaly: false },
  { time: '04:00', throughput: 41, latency: 15, anomaly: false },
  { time: '05:00', throughput: 44, latency: 14, anomaly: false },
  { time: '06:00', throughput: 48, latency: 13, anomaly: false },
  { time: '07:00', throughput: 58, latency: 12, anomaly: false },
  { time: '08:00', throughput: 75, latency: 18, anomaly: true },
  { time: '09:00', throughput: 84, latency: 20, anomaly: true },
  { time: '10:00', throughput: 82, latency: 17, anomaly: false },
  { time: '11:00', throughput: 76, latency: 16, anomaly: false },
  { time: '12:00', throughput: 74, latency: 15, anomaly: false },
  { time: '13:00', throughput: 70, latency: 14, anomaly: false },
  { time: '14:00', throughput: 72, latency: 15, anomaly: false },
  { time: '15:00', throughput: 68, latency: 14, anomaly: false },
  { time: '16:00', throughput: 65, latency: 13, anomaly: false },
  { time: '17:00', throughput: 61, latency: 12, anomaly: false },
  { time: '18:00', throughput: 58, latency: 16, anomaly: true },
  { time: '19:00', throughput: 54, latency: 14, anomaly: false },
  { time: '20:00', throughput: 50, latency: 13, anomaly: false },
  { time: '21:00', throughput: 46, latency: 12, anomaly: false },
  { time: '22:00', throughput: 44, latency: 12, anomaly: false },
  { time: '23:00', throughput: 41, latency: 14, anomaly: false },
];

interface AnomalyChartProps {
  metric?: 'throughput' | 'latency';
  title?: string;
}

const AnomalyChart: React.FC<AnomalyChartProps> = ({ 
  metric = 'throughput', 
  title = 'Network Throughput (24h)'
}) => {
  const gradientOffset = () => {
    const dataMax = Math.max(...mockData.map((item) => item[metric]));
    const dataMin = Math.min(...mockData.map((item) => item[metric]));
    
    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }
    
    return dataMax / (dataMax - dataMin);
  };
  
  const off = gradientOffset();
  
  const anomalyPoints = mockData
    .filter(item => item.anomaly)
    .map(item => ({
      time: item.time,
      [metric]: item[metric],
    }));
  
  return (
    <Card className="col-span-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={mockData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF7900" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF7900" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey={metric} 
                stroke="#FF7900" 
                fillOpacity={1} 
                fill="url(#colorMetric)" 
              />
              
              {anomalyPoints.map((point, index) => (
                <ReferenceDot
                  key={index}
                  x={point.time}
                  y={point[metric]}
                  r={4}
                  fill="red"
                  stroke="none"
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="inline-block h-3 w-3 rounded-full bg-orange-500"></span>
              <span className="text-xs text-gray-500">{metric === 'throughput' ? 'Throughput' : 'Latency'}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
              <span className="text-xs text-gray-500">Anomaly Points (3)</span>
            </div>
          </div>
          <button className="text-xs text-orange-500 hover:text-orange-600">View Details</button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnomalyChart;
