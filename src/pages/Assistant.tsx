
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock conversation data
const initialMessages = [
  {
    role: 'bot',
    content: 'Hello! I\'m your Network Assistant. How can I help you manage your 4G/5G network today?',
    timestamp: '10:30 AM',
  },
];

const Assistant = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse = '';
      
      if (input.toLowerCase().includes('site b')) {
        botResponse = 'Site B is currently experiencing high PRB utilization issues on Cell 3. I recommend adjusting the MIMO configuration to 4x4 to improve capacity. Would you like me to explain the detailed steps?';
      } else if (input.toLowerCase().includes('anomaly')) {
        botResponse = 'I\'ve detected 8 anomalies in the last 24 hours. The most critical ones are at Site B and Site G. These anomalies show patterns of unusual traffic spikes and connectivity issues.';
      } else if (input.toLowerCase().includes('recommendation')) {
        botResponse = 'I have 12 pending recommendations for network optimization. The highest priority ones are for Site B (MIMO configuration) and Site G (transmission power adjustment). Would you like to review them?';
      } else {
        botResponse = 'I\'m analyzing your network data. How can I assist you further with optimization or troubleshooting?';
      }
      
      const newBotMessage = {
        role: 'bot',
        content: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages(prevMessages => [...prevMessages, newBotMessage]);
    }, 1000);
  };
  
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Network Assistant</h1>
        <p className="text-gray-500">AI-powered assistance for network management</p>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-medium">Network Assistant</CardTitle>
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-orange-500" />
              <span className="text-sm text-green-500">Online</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col h-[500px]">
            <div className="flex-1 overflow-y-auto mb-4 p-4 bg-gray-50 rounded-md">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "mb-4 max-w-[80%] rounded-lg p-4",
                    message.role === 'user'
                      ? "ml-auto bg-orange-500 text-white"
                      : "bg-white border border-gray-200"
                  )}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium">
                      {message.role === 'user' ? 'You' : 'Network Assistant'}
                    </span>
                    <span className="text-xs opacity-70">{message.timestamp}</span>
                  </div>
                  <p className={message.role === 'user' ? "text-white" : "text-gray-800"}>
                    {message.content}
                  </p>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about network status, anomalies, or recommendations..."
                  className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                <Send className="h-4 w-4" />
              </Button>
            </form>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => setInput("Show me anomalies in the network")}>
                Show anomalies
              </Button>
              <Button variant="outline" size="sm" onClick={() => setInput("What's happening with Site B?")}>
                Site B status
              </Button>
              <Button variant="outline" size="sm" onClick={() => setInput("Show recommendations")}>
                Show recommendations
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recent Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="p-3 rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer">
                <p className="text-sm font-medium">Anomaly Detection Discussion</p>
                <p className="text-xs text-gray-500">Yesterday at 14:25</p>
              </div>
              <div className="p-3 rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer">
                <p className="text-sm font-medium">Site C Optimization</p>
                <p className="text-xs text-gray-500">2 days ago at 10:15</p>
              </div>
              <div className="p-3 rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer">
                <p className="text-sm font-medium">Network Throughput Analysis</p>
                <p className="text-xs text-gray-500">3 days ago at 16:30</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Assistant Capabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-orange-100 p-1 mt-0.5">
                  <svg className="h-3 w-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm">Real-time anomaly detection and analysis</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-orange-100 p-1 mt-0.5">
                  <svg className="h-3 w-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm">Network optimization recommendations</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-orange-100 p-1 mt-0.5">
                  <svg className="h-3 w-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm">Site-specific issue troubleshooting</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-orange-100 p-1 mt-0.5">
                  <svg className="h-3 w-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm">KPI analysis and performance insights</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Assistant;
