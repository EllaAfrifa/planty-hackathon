import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Brain, Calculator, User, BarChart3, Sparkles, Globe, TreePine, Cloud, Zap, ChevronRight, Check, AlertCircle } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userProfile, setUserProfile] = useState(null);
  const [carbonData, setCarbonData] = useState(null);
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // INTEGRATION POINT 1: Austin's AI Agent
  // This function will call Austin's AI agent API
  const generateExtraordinaryProfile = async (userData) => {
    setIsLoading(true);
    try {
      // TODO: Austin will replace this with actual Cerebras API call
      // const response = await fetch('http://localhost:5000/api/generate-profile', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData)
      // });
      // const data = await response.json();
      // setUserProfile(data);
      
      // Temporary mock data - Austin will replace this
      setTimeout(() => {
        setUserProfile({
          name: userData.name,
          extraordinaryScore: 95,
          achievements: ['Carbon Warrior', 'Sustainability Pioneer', 'Green Innovator'],
          impactLevel: 'Extraordinary'
        });
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error generating profile:', error);
      setIsLoading(false);
    }
  };

  // INTEGRATION POINT 2: Heartwill's Carbon Calculator
  // This function will call Heartwill's carbon estimation API
  const calculateCarbonFootprint = async (activityData) => {
    setIsLoading(true);
    try {
      // TODO: Heartwill will replace this with actual API call
      // const response = await fetch('http://localhost:5000/api/calculate-carbon', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(activityData)
      // });
      // const data = await response.json();
      // setCarbonData(data);
      
      // Temporary mock data - Heartwill will replace this
      setTimeout(() => {
        setCarbonData({
          totalEmissions: 2.4,
          breakdown: [
            { category: 'Transport', value: 40, amount: 0.96 },
            { category: 'Energy', value: 30, amount: 0.72 },
            { category: 'Food', value: 20, amount: 0.48 },
            { category: 'Waste', value: 10, amount: 0.24 }
          ],
          trend: [
            { month: 'Jan', emissions: 2.8 },
            { month: 'Feb', emissions: 2.6 },
            { month: 'Mar', emissions: 2.4 },
            { month: 'Apr', emissions: 2.2 }
          ],
          recommendations: [
            'Switch to renewable energy sources',
            'Use public transportation twice a week',
            'Reduce meat consumption by 30%'
          ]
        });
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error calculating carbon:', error);
      setIsLoading(false);
    }
  };

  // INTEGRATION POINT 3: Fetch.ai Agent Integration
  // This is where Derrick will connect the Fetch.ai autonomous agent
  const connectFetchAgent = async () => {
    setIsLoading(true);
    try {
      // TODO: Derrick will add Fetch.ai agent connection here
      // const agent = await fetchai.connect({...});
      // return agent;
      
      console.log('Fetch.ai agent will be integrated here by Derrick');
      setIsLoading(false);
    } catch (error) {
      console.error('Error connecting Fetch.ai agent:', error);
      setIsLoading(false);
    }
  };

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Header */}
      <motion.header 
        className="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-content">
          <div className="logo">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Leaf className="logo-icon" />
            </motion.div>
            <h1>Planty</h1>
            <span className="tagline">AI-Powered Sustainability</span>
          </div>
          
          <nav className="nav-tabs">
            {['dashboard', 'profile', 'calculator', 'insights'].map((tab) => (
              <motion.button
                key={tab}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab === 'dashboard' && <BarChart3 size={18} />}
                {tab === 'profile' && <User size={18} />}
                {tab === 'calculator' && <Calculator size={18} />}
                {tab === 'insights' && <Brain size={18} />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="main-content">
        <AnimatePresence mode="wait">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="tab-content"
            >
              <div className="dashboard-grid">
                {/* Hero Card */}
                <motion.div 
                  className="card hero-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <Sparkles className="card-icon" />
                  <h2>Welcome to Your Sustainability Journey</h2>
                  <p>Track, reduce, and offset your carbon footprint with AI-powered insights</p>
                  <div className="stats-row">
                    <div className="stat">
                      <Globe className="stat-icon" />
                      <div>
                        <span className="stat-value">2.4t</span>
                        <span className="stat-label">CO₂ Saved</span>
                      </div>
                    </div>
                    <div className="stat">
                      <TreePine className="stat-icon" />
                      <div>
                        <span className="stat-value">142</span>
                        <span className="stat-label">Trees Equivalent</span>
                      </div>
                    </div>
                    <div className="stat">
                      <Zap className="stat-icon" />
                      <div>
                        <span className="stat-value">87%</span>
                        <span className="stat-label">Goal Progress</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div 
                  className="card action-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3>Quick Actions</h3>
                  <div className="action-buttons">
                    <motion.button
                      className="action-btn primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setActiveTab('calculator');
                        calculateCarbonFootprint({ type: 'daily' });
                      }}
                    >
                      <Calculator size={20} />
                      Calculate Today's Impact
                    </motion.button>
                    <motion.button
                      className="action-btn secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setActiveTab('profile');
                        generateExtraordinaryProfile({ name: 'User' });
                      }}
                    >
                      <User size={20} />
                      Generate AI Profile
                    </motion.button>
                  </div>
                </motion.div>

                {/* Live Carbon Trend */}
                {carbonData && (
                  <motion.div 
                    className="card chart-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3>Emission Trends</h3>
                    <ResponsiveContainer width="100%" height={200}>
                      <AreaChart data={carbonData.trend}>
                        <defs>
                          <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} />
                        <Area type="monotone" dataKey="emissions" stroke="#10b981" fillOpacity={1} fill="url(#colorEmissions)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="tab-content"
            >
              <div className="profile-container">
                <motion.div className="card profile-card">
                  <h2>Extraordinary Profile Generator</h2>
                  <p className="subtitle">Powered by Cerebras AI</p>
                  
                  {!userProfile ? (
                    <div className="profile-form">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="input-field"
                        id="userName"
                      />
                      <input
                        type="text"
                        placeholder="Your sustainability goals"
                        className="input-field"
                        id="userGoals"
                      />
                      <motion.button
                        className="generate-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const name = document.getElementById('userName').value;
                          const goals = document.getElementById('userGoals').value;
                          generateExtraordinaryProfile({ name, goals });
                        }}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="loading">Generating...</span>
                        ) : (
                          <>
                            <Sparkles size={20} />
                            Generate Extraordinary Profile
                          </>
                        )}
                      </motion.button>
                    </div>
                  ) : (
                    <motion.div 
                      className="profile-result"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="profile-header">
                        <div className="profile-avatar">
                          <User size={40} />
                        </div>
                        <div>
                          <h3>{userProfile.name}</h3>
                          <span className="impact-badge">{userProfile.impactLevel}</span>
                        </div>
                      </div>
                      
                      <div className="score-display">
                        <span className="score-label">Extraordinary Score</span>
                        <span className="score-value">{userProfile.extraordinaryScore}/100</span>
                      </div>
                      
                      <div className="achievements">
                        <h4>Achievements Unlocked</h4>
                        <div className="achievement-list">
                          {userProfile.achievements.map((achievement, index) => (
                            <motion.div
                              key={index}
                              className="achievement"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Check size={16} />
                              {achievement}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* INTEGRATION POINT: Austin's AI responses will appear here */}
                <motion.div className="card ai-insights-card">
                  <h3>AI Agent Insights</h3>
                  <Cloud className="card-icon" />
                  <p className="integration-note">
                    Austin's Cerebras AI agent responses will appear here
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Calculator Tab */}
          {activeTab === 'calculator' && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="tab-content"
            >
              <div className="calculator-container">
                <motion.div className="card calculator-card">
                  <h2>Carbon Footprint Calculator</h2>
                  <p className="subtitle">Track your environmental impact</p>
                  
                  <div className="calculator-form">
                    <div className="form-section">
                      <h4>Transportation</h4>
                      <input
                        type="number"
                        placeholder="Miles driven per week"
                        className="input-field"
                        id="milesDriven"
                      />
                      <input
                        type="number"
                        placeholder="Flights per year"
                        className="input-field"
                        id="flightsPerYear"
                      />
                    </div>
                    
                    <div className="form-section">
                      <h4>Energy Usage</h4>
                      <input
                        type="number"
                        placeholder="kWh per month"
                        className="input-field"
                        id="energyUsage"
                      />
                    </div>
                    
                    <motion.button
                      className="calculate-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const data = {
                          miles: document.getElementById('milesDriven').value,
                          flights: document.getElementById('flightsPerYear').value,
                          energy: document.getElementById('energyUsage').value
                        };
                        calculateCarbonFootprint(data);
                      }}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="loading">Calculating...</span>
                      ) : (
                        <>
                          <Calculator size={20} />
                          Calculate Impact
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>

                {carbonData && (
                  <motion.div 
                    className="card results-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h3>Your Carbon Breakdown</h3>
                    <div className="total-emissions">
                      <span className="emissions-value">{carbonData.totalEmissions}</span>
                      <span className="emissions-unit">tons CO₂/year</span>
                    </div>
                    
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={carbonData.breakdown}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={(entry) => `${entry.category}: ${entry.value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {carbonData.breakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                    
                    <div className="recommendations">
                      <h4>AI Recommendations</h4>
                      {carbonData.recommendations.map((rec, index) => (
                        <motion.div
                          key={index}
                          className="recommendation"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <ChevronRight size={16} />
                          {rec}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* INTEGRATION POINT: Heartwill's carbon calculations will appear here */}
                <motion.div className="card integration-card">
                  <h3>Carbon API Integration</h3>
                  <AlertCircle className="card-icon" />
                  <p className="integration-note">
                    Heartwill's carbon estimation API results will be displayed above
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Insights Tab */}
          {activeTab === 'insights' && (
            <motion.div
              key="insights"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="tab-content"
            >
              <div className="insights-container">
                <motion.div className="card ai-card">
                  <h2>AI-Powered Sustainability Insights</h2>
                  <p className="subtitle">Powered by Cerebras & Fetch.ai</p>
                  
                  <div className="ai-chat">
                    <textarea
                      className="ai-input"
                      placeholder="Ask me anything about reducing your carbon footprint..."
                      id="aiQuery"
                      rows="4"
                    />
                    
                    <motion.button
                      className="ai-submit-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const query = document.getElementById('aiQuery').value;
                        // TODO: Austin will connect Cerebras API here
                        setAiResponse('AI agent processing...');
                        connectFetchAgent();
                      }}
                    >
                      <Brain size={20} />
                      Get AI Insights
                    </motion.button>
                    
                    {aiResponse && (
                      <motion.div 
                        className="ai-response"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <p>{aiResponse}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* INTEGRATION POINT: Fetch.ai autonomous agent */}
                <motion.div className="card fetch-agent-card">
                  <h3>Fetch.ai Autonomous Agent</h3>
                  <Zap className="card-icon" />
                  <p className="integration-note">
                    Derrick will integrate Fetch.ai uAgents framework here for autonomous actions
                  </p>
                  <button 
                    className="connect-agent-btn"
                    onClick={connectFetchAgent}
                  >
                    Connect Autonomous Agent
                  </button>
                </motion.div>

                {/* Token Efficiency Display */}
                <motion.div className="card efficiency-card">
                  <h3>Token Efficiency Metrics</h3>
                  <div className="efficiency-stats">
                    <div className="efficiency-stat">
                      <span className="stat-title">Tokens Saved</span>
                      <span className="stat-value">42%</span>
                    </div>
                    <div className="efficiency-stat">
                      <span className="stat-title">API Calls Optimized</span>
                      <span className="stat-value">67</span>
                    </div>
                    <div className="efficiency-stat">
                      <span className="stat-title">Carbon Reduced</span>
                      <span className="stat-value">0.8kg</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Built with 💚 for HackMIT 2025 | Infosys × Extraordinary × Fetch.ai × Cerebras</p>
      </footer>
    </div>
  );
}

export default App;