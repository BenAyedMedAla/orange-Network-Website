
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const mockRecommendations = [
  {
    id: 1,
    problem: 'High PRB Utilization',
    site: 'Site B',
    cell: 'Cell 3',
    action: 'Adjust MIMO configuration',
    confidence: 'high',
    ai: true,
  },
  {
    id: 2,
    problem: 'Throughput Degradation',
    site: 'Site C',
    cell: 'Cell 2',
    action: 'Reorient antenna azimuth by 15°',
    confidence: 'medium',
    ai: true,
  },
  {
    id: 3,
    problem: 'Connection Failures',
    site: 'Site G',
    cell: 'Cell 1',
    action: 'Adjust power parameters',
    confidence: 'high',
    ai: false,
  },
];

const getConfidenceBadge = (confidence: string) => {
  switch (confidence) {
    case 'high':
      return <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">High</span>;
    case 'medium':
      return <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Medium</span>;
    default:
      return <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Low</span>;
  }
};

const RecommendationsCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">AI Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockRecommendations.map((rec) => (
            <div key={rec.id} className="space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium">
                      {rec.site} - {rec.cell}
                    </h4>
                    {rec.ai && (
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">AI</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">{rec.problem}</p>
                </div>
                <div>{getConfidenceBadge(rec.confidence)}</div>
              </div>
              
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                <MessageSquare className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <p className="text-xs">{rec.action}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  className={cn(
                    "flex-1 h-8 text-xs",
                    "border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800"
                  )}
                >
                  <Check className="h-3 w-3 mr-1" /> Apply
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className={cn(
                    "flex-1 h-8 text-xs",
                    "border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-800"
                  )}
                >
                  <X className="h-3 w-3 mr-1" /> Dismiss
                </Button>
              </div>
            </div>
          ))}
          
          <button className="w-full mt-2 rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-orange-500 hover:bg-orange-50">
            View All Recommendations
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationsCard;
