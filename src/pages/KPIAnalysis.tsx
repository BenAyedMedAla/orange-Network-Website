
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ChartBar, Download, Filter, Network, Signal } from 'lucide-react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

// Mock data for throughput over time
const throughputData = [
  { name: 'Jan', Site1: 78, Site2: 65, Site3: 91 },
  { name: 'Feb', Site1: 82, Site2: 67, Site3: 88 },
  { name: 'Mar', Site1: 81, Site2: 70, Site3: 85 },
  { name: 'Apr', Site1: 85, Site2: 72, Site3: 87 },
  { name: 'May', Site1: 87, Site2: 75, Site3: 90 },
  { name: 'Jun', Site1: 84, Site2: 78, Site3: 92 },
  { name: 'Jul', Site1: 83, Site2: 80, Site3: 91 },
  { name: 'Aug', Site1: 85, Site2: 82, Site3: 89 },
  { name: 'Sep', Site1: 87, Site2: 81, Site3: 88 },
  { name: 'Oct', Site1: 89, Site2: 83, Site3: 90 },
  { name: 'Nov', Site1: 90, Site2: 85, Site3: 92 },
  { name: 'Dec', Site1: 92, Site2: 87, Site3: 94 },
];

// Mock data for network resource utilization
const utilizationData = [
  { name: 'CPU', value: 68 },
  { name: 'Memory', value: 75 },
  { name: 'Bandwidth', value: 82 },
  { name: 'Storage', value: 45 },
];

// Mock data for cell performance
const cellPerformanceData = [
  { name: 'Cell 1', success: 95, failure: 5 },
  { name: 'Cell 2', success: 88, failure: 12 },
  { name: 'Cell 3', success: 92, failure: 8 },
  { name: 'Cell 4', success: 96, failure: 4 },
  { name: 'Cell 5', success: 85, failure: 15 },
];

// New KPI data
const signalQualityData = [
  { subject: 'RSRP', A: 85, B: 90, fullMark: 100 },
  { subject: 'RSRQ', A: 78, B: 85, fullMark: 100 },
  { subject: 'SINR', A: 92, B: 76, fullMark: 100 },
  { subject: 'CQI', A: 80, B: 88, fullMark: 100 },
  { subject: 'MCS', A: 75, B: 81, fullMark: 100 },
];

const deviceConnectivityData = [
  { name: 'Jan', '4G': 8700, '5G': 3400 },
  { name: 'Feb', '4G': 8300, '5G': 3900 },
  { name: 'Mar', '4G': 8100, '5G': 4300 },
  { name: 'Apr', '4G': 7800, '5G': 4800 },
  { name: 'May', '4G': 7500, '5G': 5200 },
  { name: 'Jun', '4G': 7200, '5G': 5700 },
];

// Colors for the charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF7900'];

const KPIAnalysis = () => {
  const [timeRange, setTimeRange] = useState('1month');
  const [selectedTab, setSelectedTab] = useState('throughput');

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">KPI Analysis</h1>
        <p className="text-gray-500">Analyze network performance indicators</p>
      </div>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1week">Last Week</SelectItem>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm" className="ml-2">
            <Filter className="h-4 w-4 mr-1" /> Filters
          </Button>
        </div>
        
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-1" /> Export Data
        </Button>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-medium">Performance Analytics</CardTitle>
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList>
                <TabsTrigger value="throughput">Throughput</TabsTrigger>
                <TabsTrigger value="utilization">Resource Utilization</TabsTrigger>
                <TabsTrigger value="performance">Cell Performance</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsContent value="throughput" className="pt-4">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={throughputData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Mbps', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Site1" stroke="#FF7900" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Site2" stroke="#0088FE" />
                    <Line type="monotone" dataKey="Site3" stroke="#00C49F" />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-gray-500 mt-4">Monthly average throughput (Mbps) by site</p>
              </div>
            </TabsContent>
            
            <TabsContent value="utilization" className="pt-4">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={utilizationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      fill="#8884d8"
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {utilizationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Utilization']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-gray-500 mt-4">Network resource utilization percentages</p>
              </div>
            </TabsContent>
            
            <TabsContent value="performance" className="pt-4">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={cellPerformanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="success" name="Success Rate (%)" fill="#00C49F" />
                    <Bar dataKey="failure" name="Failure Rate (%)" fill="#FF7900" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-gray-500 mt-4">Cell connection success vs. failure rates</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">KPI Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { day: 'Mon', latency: 25, packetLoss: 1.2 },
                    { day: 'Tue', latency: 22, packetLoss: 0.8 },
                    { day: 'Wed', latency: 28, packetLoss: 1.5 },
                    { day: 'Thu', latency: 24, packetLoss: 1.1 },
                    { day: 'Fri', latency: 23, packetLoss: 0.9 },
                    { day: 'Sat', latency: 20, packetLoss: 0.7 },
                    { day: 'Sun', latency: 18, packetLoss: 0.5 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis yAxisId="left" orientation="left" stroke="#FF7900" />
                  <YAxis yAxisId="right" orientation="right" stroke="#0088FE" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="latency" name="Latency (ms)" stroke="#FF7900" />
                  <Line yAxisId="right" type="monotone" dataKey="packetLoss" name="Packet Loss (%)" stroke="#0088FE" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Traffic Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { hour: '0', traffic: 12 },
                    { hour: '4', traffic: 8 },
                    { hour: '8', traffic: 35 },
                    { hour: '12', traffic: 47 },
                    { hour: '16', traffic: 65 },
                    { hour: '20', traffic: 38 },
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="hour" label={{ value: 'Hour of Day', position: 'insideBottom', offset: -10 }} />
                  <YAxis label={{ value: 'Traffic (GB)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Bar dataKey="traffic" fill="#FF7900" name="Traffic Volume (GB)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Additional KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              <div className="flex items-center">
                <Signal className="h-5 w-5 mr-2 text-orange-500" />
                Signal Quality Metrics
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} data={signalQualityData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Site A" dataKey="A" stroke="#FF7900" fill="#FF7900" fillOpacity={0.6} />
                  <Radar name="Site B" dataKey="B" stroke="#0088FE" fill="#0088FE" fillOpacity={0.6} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">Signal quality comparison between sites</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              <div className="flex items-center">
                <Network className="h-5 w-5 mr-2 text-orange-500" />
                Device Connectivity
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={deviceConnectivityData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  stackOffset="sign"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="4G" name="4G Devices" stackId="a" fill="#0088FE" />
                  <Bar dataKey="5G" name="5G Devices" stackId="a" fill="#FF7900" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">Connected devices by network technology</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default KPIAnalysis;
