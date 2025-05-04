
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

// Mock data for network sites in Tunisia with more accurate coordinates
const mockSites = [
  { id: 1, name: 'Tunis Central', lat: 36.8065, lng: 10.1815, status: 'normal' },
  { id: 2, name: 'Sousse', lat: 35.8245, lng: 10.6346, status: 'warning' },
  { id: 3, name: 'Sfax', lat: 34.7398, lng: 10.7600, status: 'critical' },
  { id: 4, name: 'Kairouan', lat: 35.6784, lng: 10.0963, status: 'normal' },
  { id: 5, name: 'Bizerte', lat: 37.2746, lng: 9.8714, status: 'warning' },
  { id: 6, name: 'Gabes', lat: 33.8814, lng: 10.0982, status: 'critical' },
  { id: 7, name: 'Ariana', lat: 36.8625, lng: 10.1956, status: 'normal' },
  { id: 8, name: 'Gafsa', lat: 34.4311, lng: 8.7757, status: 'normal' },
];

const getMarkerColor = (status: string) => {
  switch (status) {
    case 'critical':
      return 'text-red-500 bg-red-100';
    case 'warning':
      return 'text-yellow-500 bg-yellow-100';
    default:
      return 'text-green-500 bg-green-100';
  }
};

const SiteMap = () => {
  const [selectedSite, setSelectedSite] = useState<number | null>(null);

  return (
    <Card className="col-span-full xl:col-span-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Network Sites Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-gray-100 border border-gray-200">
          <div className="absolute inset-0">
            {/* Detailed Tunisia map SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
              {/* Tunisia map path - more detailed representation */}
              <path d="M400,120 C410,125 425,130 430,145 C435,160 440,175 445,190 C450,205 448,220 446,235 C444,250 440,265 435,280 C430,295 422,310 414,325 C406,340 399,355 390,370 C381,385 370,400 361,415 C352,430 343,445 334,460 C325,475 319,490 314,505 C309,520 305,535 302,550 C299,565 297,580 295,595 C293,610 292,625 290,640 C288,655 285,670 283,685 C281,700 279,715 280,730 C281,745 282,760 290,775 C298,790 305,805 320,820 C335,835 350,850 365,850 C380,850 395,840 395,825 C395,810 390,795 380,780 C370,765 360,750 350,735 C340,720 335,705 340,690 C345,675 350,660 360,645 C370,630 380,615 385,600 C390,585 395,570 400,555 C405,540 410,525 415,510 C420,495 425,480 430,465 C435,450 438,435 440,420 C442,405 444,390 445,375 C446,360 447,345 445,330 C443,315 440,300 435,285 C430,270 425,255 420,240 C415,225 410,210 420,195 C430,180 435,165 465,155 C495,145 510,140 520,130 C530,120 540,110 545,100 C550,90 555,80 555,70 C555,60 550,50 540,45 C530,40 520,35 510,30 C500,25 490,20 480,25 C470,30 460,35 450,40 C440,45 430,50 420,55 C410,60 400,65 390,70 C380,75 370,80 360,85 C350,90 340,95 330,100 C320,105 310,110 305,115 C300,120 295,125 340,130 C385,135 390,140 400,120 Z" 
                    fill="#f0f0f0" stroke="#cccccc" strokeWidth="0.8" />
              
              {/* Tunisia borders with Algeria and Libya */}
              <path d="M280,730 C270,715 265,700 260,685 C255,670 250,655 245,640 C240,625 235,610 230,595 C225,580 220,565 215,550 C210,535 205,520 200,505 C195,490 190,475 185,460 C180,445 175,430 170,415 C165,400 160,385 155,370 C150,355 145,340 140,325 C135,310 130,295 125,280" 
                    fill="none" stroke="#cccccc" strokeWidth="0.6" strokeDasharray="5,5" />
              
              <path d="M440,420 C455,425 470,430 485,435 C500,440 515,445 530,450 C545,455 560,460 575,465 C590,470 605,475 620,480" 
                    fill="none" stroke="#cccccc" strokeWidth="0.6" strokeDasharray="5,5" />
              
              {/* Mediterranean Sea indication */}
              <path d="M550,70 C565,65 580,60 595,55 C610,50 625,45 640,40" 
                    fill="none" stroke="#add8e6" strokeWidth="1" strokeDasharray="1,1" />
              
              <text x="670" y="40" fill="#add8e6" fontSize="12">Mediterranean Sea</text>
              <text x="100" y="280" fill="#cccccc" fontSize="12">Algeria</text>
              <text x="620" y="500" fill="#cccccc" fontSize="12">Libya</text>
              <text x="400" y="50" fill="#333333" fontSize="14" fontWeight="bold">Tunisia</text>
            </svg>
            
            {/* Map pins */}
            {mockSites.map((site) => {
              // Calculate position based on Tunisia's lat/lng boundaries
              // Tunisia roughly spans from 30°N to 38°N latitude and 7°E to 12°E longitude
              const y = 800 - ((site.lat - 30) / (38 - 30)) * 800; // Convert lat to y
              const x = ((site.lng - 7) / (12 - 7)) * 800; // Convert lng to x
              
              return (
                <div 
                  key={site.id}
                  className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-125"
                  style={{
                    top: `${y}px`,
                    left: `${x}px`,
                  }}
                  onClick={() => setSelectedSite(selectedSite === site.id ? null : site.id)}
                >
                  <div className={`rounded-full p-1 ${getMarkerColor(site.status)}`}>
                    <MapPin className="h-3 w-3" />
                  </div>
                  
                  {selectedSite === site.id && (
                    <div className="absolute z-10 mt-1 -ml-20 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="p-2">
                        <p className="text-sm font-medium">{site.name}</p>
                        <p className="text-xs text-gray-500">Status: {site.status}</p>
                        <div className="mt-1 flex justify-between text-xs">
                          <span>Lat: {site.lat.toFixed(2)}</span>
                          <span>Lng: {site.lng.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-4 flex justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-xs text-gray-500">Normal (4)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-block h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="text-xs text-gray-500">Warning (2)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
              <span className="text-xs text-gray-500">Critical (2)</span>
            </div>
          </div>
          <button className="text-xs text-orange-500 hover:text-orange-600">View Full Map</button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiteMap;
