import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9999;
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => (theme === 'dark' ? '#212930' : '#ECF0F1')};
  color: ${({ theme }) => (theme === 'dark' ? '#ECF0F1' : '#2C3E50')};
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  max-width: 650px;
  border: 3px solid cyan;
  box-shadow: 0px 0px 15px cyan, 0px 0px 15px cyan inset;
  // box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  overflow: auto;
  border: 2.5px solid ${({ theme }) => (theme === 'dark' ? '#76baff' : '#0056b3')};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: none;
  border: none;
  color: ${({ theme }) => (theme === 'dark' ? '#ECF0F1' : '#fff')};
  cursor: pointer;

  &:hover {
    color:rgb(254, 90, 90);
  }
`;
const IncidentModal = ({ isOpen, onClose, theme = 'light', data }) => {
  if (!isOpen || !data || !data.incident_data) {
    console.error('IncidentModal: No valid incident data received');
    return null;
  }
 
  const incidentData = data.incident_data;
 
  // Extract properties with fallbacks
  const displayDate = new Date(incidentData.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
 
  const incidentName = incidentData.incident_name || 'Unknown Incident';
  const description = incidentData.description || 'No description available.';
  const affectedZones = incidentData.affected_zones || 'No affected zones available.';
  const status = incidentData.status || 'Unknown';
 
  // Debug logs
  console.log("Rendering incidentName:", incidentName);
  console.log("Rendering description:", description);
  console.log("Rendering affectedZones:", affectedZones);
  console.log("Rendering status:", status);
 
  return (
<ModalBackdrop onClick={onClose}>
<ModalContainer theme={theme} onClick={(e) => e.stopPropagation()}>
<CloseButton onClick={onClose}>&times;</CloseButton>
<h1>{incidentName}</h1>
<p>
<strong>DATE:</strong> {displayDate}
</p>
<p>
<strong>DESCRIPTION:</strong> {description}
</p>
<p>
<strong>AFFECTED ZONES:</strong> {affectedZones}
</p>
<p>
<strong>STATUS:</strong> {status}
</p>
</ModalContainer>
</ModalBackdrop>
  );
};
 
export default IncidentModal;