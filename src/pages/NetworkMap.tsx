
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Signal, Wifi, Network } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Mock data for network sites with more detailed information
const sites = [
  { 
    id: 1, 
    name: 'Tunis Central', 
    location: 'Tunis', 
    coordinates: '36.8065, 10.1815',
    status: 'active', 
    technology: '5G',
    coverage: '97%',
    performance: 'excellent',
    lastMaintenance: '2025-04-15'
  },
  { 
    id: 2, 
    name: 'Sousse Bay', 
    location: 'Sousse', 
    coordinates: '35.8245, 10.6346',
    status: 'active', 
    technology: '4G/5G',
    coverage: '93%',
    performance: 'good',
    lastMaintenance: '2025-04-02'
  },
  { 
    id: 3, 
    name: 'Sfax Industrial', 
    location: 'Sfax', 
    coordinates: '34.7398, 10.7600',
    status: 'issue', 
    technology: '4G/5G',
    coverage: '89%',
    performance: 'poor',
    lastMaintenance: '2025-03-10'
  },
  { 
    id: 4, 
    name: 'Kairouan Center', 
    location: 'Kairouan', 
    coordinates: '35.6784, 10.0963',
    status: 'active', 
    technology: '4G',
    coverage: '91%',
    performance: 'good',
    lastMaintenance: '2025-03-22'
  },
  { 
    id: 5, 
    name: 'Bizerte Harbor', 
    location: 'Bizerte', 
    coordinates: '37.2746, 9.8714',
    status: 'maintenance', 
    technology: '4G/5G',
    coverage: '88%',
    performance: 'fair',
    lastMaintenance: '2025-05-01'
  },
  { 
    id: 6, 
    name: 'Gabes South', 
    location: 'Gabes', 
    coordinates: '33.8814, 10.0982',
    status: 'issue', 
    technology: '4G',
    coverage: '85%',
    performance: 'poor',
    lastMaintenance: '2025-02-15'
  },
  { 
    id: 7, 
    name: 'Ariana North', 
    location: 'Ariana', 
    coordinates: '36.8625, 10.1956',
    status: 'active', 
    technology: '5G',
    coverage: '95%',
    performance: 'excellent',
    lastMaintenance: '2025-04-18'
  },
  { 
    id: 8, 
    name: 'Gafsa Mining', 
    location: 'Gafsa', 
    coordinates: '34.4311, 8.7757',
    status: 'active', 
    technology: '4G',
    coverage: '84%',
    performance: 'fair',
    lastMaintenance: '2025-03-05'
  },
  { 
    id: 9, 
    name: 'Monastir Airport', 
    location: 'Monastir', 
    coordinates: '35.7677, 10.8169',
    status: 'active', 
    technology: '4G/5G',
    coverage: '94%',
    performance: 'excellent',
    lastMaintenance: '2025-04-10'
  },
  { 
    id: 10, 
    name: 'Djerba Tourist', 
    location: 'Djerba', 
    coordinates: '33.8080, 10.9698',
    status: 'active', 
    technology: '5G',
    coverage: '96%',
    performance: 'excellent',
    lastMaintenance: '2025-04-22'
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200 hover:bg-green-200">Active</Badge>;
    case 'maintenance':
      return <Badge className="bg-blue-500 hover:bg-blue-600">Maintenance</Badge>;
    case 'issue':
      return <Badge variant="destructive">Issue</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

const getPerformanceBadge = (performance: string) => {
  switch (performance) {
    case 'excellent':
      return <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">Excellent</Badge>;
    case 'good':
      return <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">Good</Badge>;
    case 'fair':
      return <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-yellow-200">Fair</Badge>;
    case 'poor':
      return <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200">Poor</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

const NetworkMap = () => {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [technologyFilter, setTechnologyFilter] = useState<string>("all");
  
  const filteredSites = sites.filter(site => {
    const matchesStatus = statusFilter === "all" || site.status === statusFilter;
    const matchesTechnology = technologyFilter === "all" || site.technology.includes(technologyFilter);
    return matchesStatus && matchesTechnology;
  });

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Network Map</h1>
        <p className="text-gray-500">Geographic view of network sites and their status</p>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Network Sites</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 border border-gray-200 rounded-md w-full aspect-[16/9] flex items-center justify-center text-center">
            <div>
              <MapPin className="mx-auto h-8 w-8 text-orange-500 mb-2" />
              <p className="text-gray-500">Network map visualization would be displayed here</p>
              <p className="text-sm text-gray-400 mt-2">This page will show a detailed interactive map with all network sites</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2 flex flex-row justify-between items-center">
          <CardTitle className="text-lg font-medium">Network Sites Status</CardTitle>
          <div className="flex items-center gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="issue">Issue</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={technologyFilter} onValueChange={setTechnologyFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Technology" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tech</SelectItem>
                <SelectItem value="4G">4G</SelectItem>
                <SelectItem value="5G">5G</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Site Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Coordinates</TableHead>
                  <TableHead>Technology</TableHead>
                  <TableHead>Coverage</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Last Maintenance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSites.map((site) => (
                  <TableRow key={site.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        {site.technology.includes('5G') ? 
                          <Signal className="h-4 w-4 mr-2 text-orange-500" /> : 
                          <Wifi className="h-4 w-4 mr-2 text-gray-500" />}
                        {site.name}
                      </div>
                    </TableCell>
                    <TableCell>{site.location}</TableCell>
                    <TableCell className="text-xs">{site.coordinates}</TableCell>
                    <TableCell>{site.technology}</TableCell>
                    <TableCell>{site.coverage}</TableCell>
                    <TableCell>{getPerformanceBadge(site.performance)}</TableCell>
                    <TableCell>{getStatusBadge(site.status)}</TableCell>
                    <TableCell className="text-right">{site.lastMaintenance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex justify-between mt-4">
            <div className="bg-gray-100 px-4 py-2 rounded-md inline-flex items-center gap-2">
              <Network className="h-4 w-4 text-orange-500" />
              <span className="text-sm">
                Total: {sites.length} Sites | 
                Active: {sites.filter(s => s.status === 'active').length} | 
                5G Coverage: {sites.filter(s => s.technology.includes('5G')).length} sites
              </span>
            </div>
            <p className="text-xs text-gray-500 self-end">Last updated: May 3, 2025</p>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default NetworkMap;
