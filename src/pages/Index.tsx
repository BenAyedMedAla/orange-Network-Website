
import React from 'react';
import Layout from '@/components/layout/Layout';
import StatCard from '@/components/dashboard/StatCard';
import SiteMap from '@/components/dashboard/SiteMap';
import AnomalyChart from '@/components/dashboard/AnomalyChart';
import RecentAlerts from '@/components/dashboard/RecentAlerts';
import RecommendationsCard from '@/components/dashboard/RecommendationsCard';
import { AlertTriangle, Map, Server, ChartBar, Bot } from 'lucide-react';

const Dashboard = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Network Dashboard</h1>
        <p className="text-gray-500">Monitor and analyze your 4G/5G network performance</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Sites"
          value="124"
          icon={<Server className="h-6 w-6 text-orange-500" />}
          description="8 sites added this month"
        />
        
        <StatCard
          title="Active Anomalies"
          value="18"
          icon={<AlertTriangle className="h-6 w-6 text-red-500" />}
          trend={{ value: 8, isPositive: false }}
          description="4 critical, 14 warnings"
        />
        
        <StatCard
          title="Network Coverage"
          value="94.8%"
          icon={<Map className="h-6 w-6 text-green-500" />}
          trend={{ value: 1.2, isPositive: true }}
          description="Increased by 1.2% since last month"
        />
        
        <StatCard
          title="AI Recommendations"
          value="12"
          icon={<Bot className="h-6 w-6 text-purple-500" />}
          description="3 high priority actions"
        />
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <SiteMap />
        
        <div className="space-y-6">
          <RecentAlerts />
          <RecommendationsCard />
        </div>
      </div>
      
      <div className="space-y-6">
        <AnomalyChart metric="throughput" title="Network Throughput (24h)" />
        <AnomalyChart metric="latency" title="Network Latency (24h)" />
      </div>
    </Layout>
  );
};

export default Dashboard;
