"use client"

import { useEffect, useState } from "react"
import { Cpu, Database, Shield, Zap, Globe, BarChart3 } from "lucide-react"

export function TechVisualization() {
  const [activeNodes, setActiveNodes] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodes((prev) => {
        const newActive = [...prev]
        const randomIndex = Math.floor(Math.random() * 6)
        if (newActive.includes(randomIndex)) {
          return newActive.filter((i) => i !== randomIndex)
        } else {
          return [...newActive, randomIndex]
        }
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  const techNodes = [
    { icon: <Database className="h-6 w-6" />, position: "top-4 left-8", color: "bg-blue-500" },
    { icon: <Shield className="h-6 w-6" />, position: "top-16 right-12", color: "bg-green-500" },
    { icon: <Cpu className="h-6 w-6" />, position: "top-32 left-16", color: "bg-purple-500" },
    { icon: <BarChart3 className="h-6 w-6" />, position: "bottom-32 right-8", color: "bg-orange-500" },
    { icon: <Globe className="h-6 w-6" />, position: "bottom-16 left-12", color: "bg-cyan-500" },
    { icon: <Zap className="h-6 w-6" />, position: "bottom-4 right-16", color: "bg-yellow-500" },
  ]

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent transform skew-y-12"></div>
      </div>

      {/* Central hand silhouette */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-48 bg-slate-900/80 rounded-t-full relative">
          {/* Fingers */}
          <div className="absolute -top-8 left-4 w-4 h-12 bg-slate-900/80 rounded-full transform -rotate-12"></div>
          <div className="absolute -top-10 left-8 w-4 h-16 bg-slate-900/80 rounded-full transform -rotate-3"></div>
          <div className="absolute -top-12 left-12 w-4 h-18 bg-slate-900/80 rounded-full transform rotate-3"></div>
          <div className="absolute -top-10 left-16 w-4 h-14 bg-slate-900/80 rounded-full transform rotate-12"></div>
          <div className="absolute -top-6 left-20 w-3 h-10 bg-slate-900/80 rounded-full transform rotate-45"></div>
        </div>
      </div>

      {/* Floating tech nodes */}
      {techNodes.map((node, index) => (
        <div
          key={index}
          className={`absolute ${node.position} transition-all duration-1000 ${
            activeNodes.includes(index) ? "scale-125 opacity-100" : "scale-100 opacity-70"
          }`}
        >
          <div className={`${node.color} p-3 rounded-full text-white shadow-lg animate-pulse`}>{node.icon}</div>
          {activeNodes.includes(index) && (
            <div className="absolute inset-0 rounded-full border-2 border-white animate-ping"></div>
          )}
        </div>
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
          </linearGradient>
        </defs>
        {techNodes.map((_, index) => (
          <line
            key={index}
            x1="50%"
            y1="80%"
            x2={`${20 + index * 15}%`}
            y2={`${20 + index * 10}%`}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            className={`transition-opacity duration-1000 ${activeNodes.includes(index) ? "opacity-60" : "opacity-20"}`}
          />
        ))}
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
