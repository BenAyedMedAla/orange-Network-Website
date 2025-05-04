
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Server } from 'lucide-react';

// Mock data for network sites
const mockSites = [
  { id: 1, name: 'Site A', location: 'Tunis', cells: 4, status: 'active', technology: '5G' },
  { id: 2, name: 'Site B', location: 'Sfax', cells: 6, status: 'active', technology: '4G/5G' },
  { id: 3, name: 'Site C', location: 'Sousse', cells: 3, status: 'active', technology: '4G' },
  { id: 4, name: 'Site D', location: 'Bizerte', cells: 5, status: 'maintenance', technology: '4G' },
  { id: 5, name: 'Site E', location: 'Monastir', cells: 4, status: 'active', technology: '4G/5G' },
  { id: 6, name: 'Site F', location: 'Nabeul', cells: 3, status: 'active', technology: '4G' },
  { id: 7, name: 'Site G', location: 'Kairouan', cells: 4, status: 'issue', technology: '4G/5G' },
  { id: 8, name: 'Site H', location: 'Gabès', cells: 3, status: 'active', technology: '4G' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge variant="outline" className="text-green-700 border-green-200">Active</Badge>;
    case 'maintenance':
      return <Badge className="bg-blue-500">Maintenance</Badge>;
    case 'issue':
      return <Badge variant="destructive">Issue</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

const NetworkSites = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Network Sites</h1>
        <p className="text-gray-500">Manage and monitor all network sites</p>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Sites Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Site Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Technology</TableHead>
                  <TableHead className="text-right">Cells</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockSites.map((site) => (
                  <TableRow key={site.id}>
                    <TableCell className="font-medium">{site.name}</TableCell>
                    <TableCell>{site.location}</TableCell>
                    <TableCell>{site.technology}</TableCell>
                    <TableCell className="text-right">{site.cells}</TableCell>
                    <TableCell>{getStatusBadge(site.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-center mt-4">
            <div className="bg-gray-100 px-4 py-2 rounded-md inline-flex items-center gap-2">
              <Server className="h-4 w-4 text-orange-500" />
              <span className="text-sm">Total: 8 Sites | 32 Cells | 75% 5G Coverage</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default NetworkSites;
