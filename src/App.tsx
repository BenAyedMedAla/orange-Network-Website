
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AnomalyDetection from "./pages/AnomalyDetection";
import NetworkMap from "./pages/NetworkMap";
import KPIAnalysis from "./pages/KPIAnalysis";
import Assistant from "./pages/Assistant";
import NetworkSites from "./pages/NetworkSites";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/anomaly-detection" element={<AnomalyDetection />} />
          <Route path="/network-map" element={<NetworkMap />} />
          <Route path="/kpi-analysis" element={<KPIAnalysis />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/network-sites" element={<NetworkSites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
