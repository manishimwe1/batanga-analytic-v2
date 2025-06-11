"use client"

import { useEffect, useState } from "react"
import { TrendingUp, BarChart3, PieChart, Activity } from "lucide-react"

export function AnalyticsDashboard() {
  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    users: 0,
    conversion: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues({
        revenue: Math.floor(Math.random() * 100000) + 50000,
        users: Math.floor(Math.random() * 10000) + 5000,
        conversion: Math.floor(Math.random() * 50) + 25,
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const chartData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 78 },
    { month: "Mar", value: 82 },
    { month: "Apr", value: 95 },
    { month: "May", value: 88 },
    { month: "Jun", value: 92 },
  ]

  return (
    <div className="w-full h-96 bg-slate-900 rounded-lg p-6 relative overflow-hidden">
      {/* Code background pattern */}
      <div className="absolute inset-0 opacity-10 font-mono text-xs text-green-400 overflow-hidden">
        <div className="whitespace-pre-wrap leading-4">
          {`function analyzeData(dataset) {
  const insights = processMetrics(dataset);
  return {
    trends: calculateTrends(insights),
    predictions: generatePredictions(insights),
    alerts: detectAnomalies(insights)
  };
}

class SecurityMonitor {
  constructor() {
    this.threats = [];
    this.alerts = [];
  }
  
  scanForThreats() {
    // Real-time threat detection
    const threats = this.detectThreats();
    this.processAlerts(threats);
  }
}`}
        </div>
      </div>

      {/* Dashboard header */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-lg flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-teal-400" />
            Analytics Dashboard
          </h3>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>

      {/* Metrics cards */}
      <div className="relative z-10 grid grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-xs">Revenue</p>
              <p className="text-white font-bold text-lg">${animatedValues.revenue.toLocaleString()}</p>
            </div>
            <TrendingUp className="h-5 w-5 text-green-400" />
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-xs">Users</p>
              <p className="text-white font-bold text-lg">{animatedValues.users.toLocaleString()}</p>
            </div>
            <Activity className="h-5 w-5 text-blue-400" />
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-xs">Conversion</p>
              <p className="text-white font-bold text-lg">{animatedValues.conversion}%</p>
            </div>
            <TrendingUp className="h-5 w-5 text-teal-400" />
          </div>
        </div>
      </div>

      {/* Chart visualization */}
      <div className="relative z-10 bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white text-sm font-semibold">Performance Trends</h4>
          <PieChart className="h-4 w-4 text-slate-400" />
        </div>

        {/* Simple bar chart */}
        <div className="flex items-end justify-between h-20 space-x-1">
          {chartData.map((data, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className="w-full bg-gradient-to-t from-teal-500 to-cyan-400 rounded-t transition-all duration-1000 ease-in-out"
                style={{ height: `${data.value}%` }}
              ></div>
              <span className="text-slate-400 text-xs mt-1">{data.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Security status indicator */}
      <div className="absolute bottom-4 right-4 bg-green-500/20 border border-green-500/30 rounded-lg px-3 py-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-xs font-medium">Secure</span>
        </div>
      </div>

      {/* Animated data streams */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-8 bg-gradient-to-b from-transparent via-teal-400/50 to-transparent animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: "3s",
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
