import { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  avgTimeOnPage: string;
  bounceRate: string;
  topPages: Array<{ page: string; views: number }>;
  devices: Array<{ device: string; percentage: number }>;
  referrers: Array<{ source: string; visits: number }>;
}

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasRealData, setHasRealData] = useState(false);

  useEffect(() => {
    // Simulate fetching analytics data
    const fetchAnalytics = async () => {
      try {
        // In a real app, this would fetch from your analytics API
        // For now, we'll check if there's any real data
        const response = await fetch('/api/analytics'); // Replace with your actual API endpoint
        
        if (response.ok) {
          const data = await response.json();
          
          // Check if there's real data (not just zeros)
          const hasData = data.pageViews > 0 || data.uniqueVisitors > 0;
          
          if (hasData) {
            setAnalyticsData(data);
            setHasRealData(true);
          } else {
            setHasRealData(false);
          }
        } else {
          // If API fails, show mock data for development
          const mockData: AnalyticsData = {
            pageViews: 0,
            uniqueVisitors: 0,
            avgTimeOnPage: '0:00',
            bounceRate: '0%',
            topPages: [],
            devices: [],
            referrers: []
          };
          setAnalyticsData(mockData);
          setHasRealData(false);
        }
      } catch (error) {
        console.log('Analytics API not available - no real data to show');
        // Set mock data with zeros to indicate no real data
        const mockData: AnalyticsData = {
          pageViews: 0,
          uniqueVisitors: 0,
          avgTimeOnPage: '0:00',
          bounceRate: '0%',
          topPages: [],
          devices: [],
          referrers: []
        };
        setAnalyticsData(mockData);
        setHasRealData(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  // Don't render the section at all if there's no real data
  if (!hasRealData && !isLoading) {
    return null;
  }

  if (isLoading) {
    return (
      <section id="analytics" className="analytics">
        <div className="container">
          <h2 className="section-title">Portfolio Analytics</h2>
          <div className="analytics-loading">
            <div className="loading-spinner"></div>
            <p>Loading analytics data...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!analyticsData) {
    return null;
  }

  return (
    <section id="analytics" className="analytics">
      <div className="container">
        <h2 className="section-title">Portfolio Analytics</h2>
        
        <div className="analytics-overview">
          <div className="overview-cards">
            <div className="stat-card">
              <h3>Total Page Views</h3>
              <span className="stat-number">{analyticsData.pageViews.toLocaleString()}</span>
            </div>
            <div className="stat-card">
              <h3>Unique Visitors</h3>
              <span className="stat-number">{analyticsData.uniqueVisitors.toLocaleString()}</span>
            </div>
            <div className="stat-card">
              <h3>Avg. Time on Page</h3>
              <span className="stat-number">{analyticsData.avgTimeOnPage}</span>
            </div>
            <div className="stat-card">
              <h3>Bounce Rate</h3>
              <span className="stat-number">{analyticsData.bounceRate}</span>
            </div>
          </div>
        </div>

        <div className="analytics-charts">
          <div className="chart-section">
            <h3>Top Pages</h3>
            <div className="chart-list">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="chart-item">
                  <span className="chart-label">{page.page}</span>
                  <div className="chart-bar">
                    <div 
                      className="chart-fill" 
                      style={{ width: `${(page.views / analyticsData.topPages[0].views) * 100}%` }}
                    ></div>
                  </div>
                  <span className="chart-value">{page.views}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-section">
            <h3>Device Breakdown</h3>
            <div className="device-chart">
              {analyticsData.devices.map((device, index) => (
                <div key={index} className="device-item">
                  <div className="device-info">
                    <span className="device-name">{device.device}</span>
                    <span className="device-percentage">{device.percentage}%</span>
                  </div>
                  <div className="device-bar">
                    <div 
                      className="device-fill" 
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-section">
            <h3>Traffic Sources</h3>
            <div className="source-list">
              {analyticsData.referrers.map((source, index) => (
                <div key={index} className="source-item">
                  <span className="source-name">{source.source}</span>
                  <span className="source-visits">{source.visits} visits</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="analytics-footer">
          <p className="last-updated">Last updated: {new Date().toLocaleString()}</p>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            Refresh Data
          </button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
