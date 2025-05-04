
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle } from 'lucide-react';

const mockAlerts = [
  {
    id: 1,
    site: 'Site B',
    cell: 'Cell 3',
    issue: 'High PRB Utilization',
    timestamp: '10:45 AM',
    severity: 'critical',
  },
  {
    id: 2,
    site: 'Site C',
    cell: 'Cell 2',
    issue: 'Throughput Degradation',
    timestamp: '09:32 AM',
    severity: 'warning',
  },
  {
    id: 3,
    site: 'Site G',
    cell: 'Cell 1',
    issue: 'Connection Failures',
    timestamp: '08:17 AM',
    severity: 'critical',
  },
  {
    id: 4,
    site: 'Site E',
    cell: 'Cell 4',
    issue: 'Latency Spikes',
    timestamp: 'Yesterday',
    severity: 'warning',
  },
];

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case 'critical':
      return <Badge variant="destructive">Critical</Badge>;
    case 'warning':
      return <Badge className="bg-yellow-500">Warning</Badge>;
    default:
      return <Badge variant="outline">Info</Badge>;
  }
};

const RecentAlerts = () => {
  return (
    <Card>
      <CardHeader className="pb-2 flex justify-between items-center">
        <CardTitle className="text-lg font-medium">Recent Alerts</CardTitle>
        <Badge variant="outline" className="text-orange-500 border-orange-200">
          <div className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            <span>4 New</span>
          </div>
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <div key={alert.id} className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium">
                    {alert.site} - {alert.cell}
                  </h4>
                  {getSeverityBadge(alert.severity)}
                </div>
                <p className="text-sm text-gray-500 mt-0.5">{alert.issue}</p>
              </div>
              <div className="text-xs text-gray-500">{alert.timestamp}</div>
            </div>
          ))}
          
          <button className="w-full mt-2 rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-orange-500 hover:bg-orange-50">
            View All Alerts
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentAlerts;
