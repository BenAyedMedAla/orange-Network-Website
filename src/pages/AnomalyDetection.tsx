
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, ChartBar, ChartLine, Download, Filter, Loader, AlertCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';

// Mock data for cell KPIs
const mockCellData = [
  { 
    id: 1, 
    cellId: 'SITE_B_C1', 
    site: 'Site B',
    throughput: 78.4,
    latency: 18.2,
    prb: 89.7,
    connFailRate: 1.2,
    anomalyScore: 0.89,
    status: 'critical',
  },
  { 
    id: 2, 
    cellId: 'SITE_C_C2', 
    site: 'Site C',
    throughput: 65.1,
    latency: 22.6,
    prb: 78.3,
    connFailRate: 0.8,
    anomalyScore: 0.67,
    status: 'warning',
  },
  { 
    id: 3, 
    cellId: 'SITE_G_C1', 
    site: 'Site G',
    throughput: 42.3,
    latency: 35.8,
    prb: 92.1,
    connFailRate: 4.6,
    anomalyScore: 0.95,
    status: 'critical',
  },
  { 
    id: 4, 
    cellId: 'SITE_A_C3', 
    site: 'Site A',
    throughput: 81.2,
    latency: 14.3,
    prb: 56.8,
    connFailRate: 0.4,
    anomalyScore: 0.12,
    status: 'normal',
  },
  { 
    id: 5, 
    cellId: 'SITE_D_C2', 
    site: 'Site D',
    throughput: 74.9,
    latency: 16.7,
    prb: 62.3,
    connFailRate: 0.7,
    anomalyScore: 0.21,
    status: 'normal',
  },
  { 
    id: 6, 
    cellId: 'SITE_E_C4', 
    site: 'Site E',
    throughput: 58.6,
    latency: 24.9,
    prb: 84.5,
    connFailRate: 1.9,
    anomalyScore: 0.72,
    status: 'warning',
  },
];

// Mock time series data
const mockTimeSeriesData = [
  { time: '00:00', throughput: 72, latency: 15, prb: 58, anomaly: false },
  { time: '01:00', throughput: 70, latency: 16, prb: 60, anomaly: false },
  { time: '02:00', throughput: 68, latency: 17, prb: 62, anomaly: false },
  { time: '03:00', throughput: 65, latency: 18, prb: 65, anomaly: false },
  { time: '04:00', throughput: 63, latency: 19, prb: 68, anomaly: false },
  { time: '05:00', throughput: 62, latency: 20, prb: 72, anomaly: false },
  { time: '06:00', throughput: 64, latency: 21, prb: 75, anomaly: false },
  { time: '07:00', throughput: 67, latency: 22, prb: 79, anomaly: false },
  { time: '08:00', throughput: 72, latency: 25, prb: 85, anomaly: true },
  { time: '09:00', throughput: 58, latency: 35, prb: 92, anomaly: true },
  { time: '10:00', throughput: 52, latency: 30, prb: 90, anomaly: true },
  { time: '11:00', throughput: 55, latency: 28, prb: 88, anomaly: true },
  { time: '12:00', throughput: 60, latency: 25, prb: 85, anomaly: false },
  { time: '13:00', throughput: 65, latency: 20, prb: 80, anomaly: false },
  { time: '14:00', throughput: 70, latency: 18, prb: 75, anomaly: false },
  { time: '15:00', throughput: 72, latency: 16, prb: 70, anomaly: false },
  { time: '16:00', throughput: 73, latency: 15, prb: 68, anomaly: false },
  { time: '17:00', throughput: 71, latency: 16, prb: 65, anomaly: false },
  { time: '18:00', throughput: 69, latency: 17, prb: 63, anomaly: false },
  { time: '19:00', throughput: 68, latency: 18, prb: 60, anomaly: false },
  { time: '20:00', throughput: 67, latency: 17, prb: 59, anomaly: false },
  { time: '21:00', throughput: 69, latency: 16, prb: 57, anomaly: false },
  { time: '22:00', throughput: 71, latency: 15, prb: 56, anomaly: false },
  { time: '23:00', throughput: 73, latency: 14, prb: 55, anomaly: false },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'critical':
      return (
        <div className="flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <Badge variant="destructive">Critical</Badge>
        </div>
      );
    case 'warning':
      return (
        <div className="flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          <Badge className="bg-yellow-500">Warning</Badge>
        </div>
      );
    default:
      return (
        <div className="flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <Badge variant="outline" className="text-green-700 border-green-200">Normal</Badge>
        </div>
      );
  }
};

const AnomalyDetection = () => {
  const [activeTab, setActiveTab] = useState("table");
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [selectedMetric, setSelectedMetric] = useState("throughput");

  // Filter to anomalous cells only
  const anomalousCells = mockCellData.filter(cell => cell.status !== 'normal');
  
  const cellTimeData = selectedCell
    ? mockTimeSeriesData.map(item => ({ ...item }))
    : [];
    
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Anomaly Detection</h1>
        <p className="text-gray-500">Monitor and analyze network anomalies</p>
      </div>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Site Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sites</SelectItem>
              <SelectItem value="site-a">Site A</SelectItem>
              <SelectItem value="site-b">Site B</SelectItem>
              <SelectItem value="site-c">Site C</SelectItem>
              <SelectItem value="site-d">Site D</SelectItem>
              <SelectItem value="site-e">Site E</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="normal">Normal</SelectItem>
            </SelectContent>
          </Select>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-2 h-9">
                <Filter className="h-4 w-4 mr-1" /> More Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <span>Time Range: Last 24h</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Score Threshold: &gt; 0.6</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>KPI Type: All</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-1" /> Export Data
        </Button>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Anomaly Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-red-100 p-3">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Critical Anomalies</p>
                <p className="text-2xl font-semibold">{anomalousCells.filter(c => c.status === 'critical').length}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-yellow-100 p-3">
                <AlertCircle className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Warning Anomalies</p>
                <p className="text-2xl font-semibold">{anomalousCells.filter(c => c.status === 'warning').length}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-purple-100 p-3">
                <Loader className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Average Anomaly Score</p>
                <p className="text-2xl font-semibold">
                  {(anomalousCells.reduce((sum, cell) => sum + cell.anomalyScore, 0) / anomalousCells.length).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-medium">Cell Anomalies</CardTitle>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="table" className="flex items-center gap-1">
                  <ChartBar className="h-4 w-4" /> Table
                </TabsTrigger>
                <TabsTrigger value="chart" className="flex items-center gap-1">
                  <ChartLine className="h-4 w-4" /> Chart
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          {/* This is the key fix - wrap the TabsContent in a Tabs component */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsContent value="table" className="pt-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cell ID</TableHead>
                      <TableHead>Site</TableHead>
                      <TableHead className="text-right">Throughput (Mbps)</TableHead>
                      <TableHead className="text-right">Latency (ms)</TableHead>
                      <TableHead className="text-right">PRB Util. (%)</TableHead>
                      <TableHead className="text-right">Failure Rate (%)</TableHead>
                      <TableHead className="text-right">Anomaly Score</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockCellData.map((cell) => (
                      <TableRow 
                        key={cell.id}
                        className={cell.status !== 'normal' ? 'bg-red-50' : ''}
                        onClick={() => setSelectedCell(cell.cellId)}
                      >
                        <TableCell className="font-medium">{cell.cellId}</TableCell>
                        <TableCell>{cell.site}</TableCell>
                        <TableCell className="text-right">{cell.throughput.toFixed(1)}</TableCell>
                        <TableCell className="text-right">{cell.latency.toFixed(1)}</TableCell>
                        <TableCell className="text-right">{cell.prb.toFixed(1)}</TableCell>
                        <TableCell className="text-right">{cell.connFailRate.toFixed(1)}</TableCell>
                        <TableCell className="text-right">{cell.anomalyScore.toFixed(2)}</TableCell>
                        <TableCell>{getStatusBadge(cell.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="chart" className="pt-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Metric" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="throughput">Throughput</SelectItem>
                      <SelectItem value="latency">Latency</SelectItem>
                      <SelectItem value="prb">PRB Utilization</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="inline-block h-3 w-3 bg-orange-500 rounded"></span>
                      <span className="text-sm">Metric Value</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="inline-block h-3 w-3 bg-red-500 rounded"></span>
                      <span className="text-sm">Anomaly Point</span>
                    </div>
                  </div>
                </div>
                
                <Select defaultValue="24h">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Time Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6h">Last 6h</SelectItem>
                    <SelectItem value="12h">Last 12h</SelectItem>
                    <SelectItem value="24h">Last 24h</SelectItem>
                    <SelectItem value="7d">Last 7d</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={mockTimeSeriesData}
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
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey={selectedMetric} 
                      stroke="#FF7900" 
                      fillOpacity={1} 
                      fill="url(#colorMetric)" 
                    />
                    
                    {mockTimeSeriesData
                      .filter(point => point.anomaly)
                      .map((point, index) => (
                        <ReferenceDot
                          key={index}
                          x={point.time}
                          y={point[selectedMetric as keyof typeof point] as number}
                          r={5}
                          fill="red"
                          stroke="none"
                        />
                      ))}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default AnomalyDetection;
