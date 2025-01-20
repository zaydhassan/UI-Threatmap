import React, { useState, useEffect } from 'react';
import './App.css';
import StatsPanel from './components/StatsPanel';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import Threatpanel from './components/Threatpanel';
import { ThemeProvider } from './components/ThemeContext';
import Loader from './components/Loader';
import IncidentModal from './components/IncidentModal';
import ThreatModal from './components/ThreatModal';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [attackSpeed, setAttackSpeed] = useState(1500);
  const [showIncidentModal, setShowIncidentModal] = useState(false);
  const [incidentData, setIncidentData] = useState(null);
  const [showThreatModal, setShowThreatModal] = useState(false);
  const [selectedThreatData, setSelectedThreatData] = useState(null);
 

useEffect(() => {
        const ws = new WebSocket('ws://localhost:8000/ws/threat_count/');
 
        ws.onopen = () => {
            console.log('WebSocket Threat Count Connected');
        };
 
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // console.log('Received Threat Data:', data);
            setSelectedThreatData(data);
            // setShowThreatModal(true);
        };
 
        ws.onclose = () => {
            console.log('WebSocket threat count Disconnected');
        };
 
        return () => {
            ws.close();
        };
    }, []);
 
    const handleShowThreat = () => {
      setShowThreatModal(!showThreatModal);
    };



  // WebSocket Setup
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws/incident_threats/'); // Replace with your WebSocket URL
 
    socket.onmessage = (event) => {
      const incomingData = JSON.parse(event.data); // Assuming the WebSocket data is in JSON format
      console.log("Received WebSocket data:", incomingData);
      setIncidentData(incomingData); // Update the state with incoming data
    };
 
    // Clean up WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);
 
  const handleShowIncident = () => {
    if (incidentData) {
      setShowIncidentModal(true); // Show modal with fetched data
    } else {
      console.error('No incident data available');
    }
  };
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
<ThemeProvider>
      {isLoading ? (
<Loader />
      ) : (
<div className="App">
<Header onToggleIncidents={handleShowIncident}  onToggleThreats={() => handleShowThreat(0)} />
<div className="top-border"></div>
<div className="content">
<MapComponent isSidebarOpen={isRightSidebarOpen} attackSpeed={attackSpeed} />
<StatsPanel
              toggleSidebar={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
              isSidebarOpen={isRightSidebarOpen}
            />
<Threatpanel
              isSidebarOpen={isLeftSidebarOpen}
              toggleSidebar={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
              handleSpeedChange={setAttackSpeed}
              handleUpdateAttacks={(newCount) => console.log('Updated attack count to:', newCount)}
            />
            {showIncidentModal && (
<IncidentModal
                isOpen={showIncidentModal}
                onClose={() => setShowIncidentModal(false)}
                theme="dark"
                data={incidentData}
              />
            )}
            {showThreatModal && (
<ThreatModal
                  isOpen={showThreatModal}
                  onClose={() => setShowThreatModal(false)}
                  data={selectedThreatData}
                />
              )}
</div>
</div>
      )}
</ThemeProvider>
  );
}
export default App;