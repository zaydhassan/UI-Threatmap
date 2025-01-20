import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './ThemeContext';
import Modal from './Modal';

 const BoxContainer = styled.div`
  border: 2px solid #3478f6;  
  margin-bottom: 20px;
  padding: 5px;
   background-color: ${({ theme }) => theme === 'dark' ? '#000' : '#fff'};  
  transition: background-color 0.3s, box-shadow 0.3s;
 
  &:hover {
    background-color:${({ theme }) => theme === 'dark' ? '#1a2f40' : '#e3f2fd'}; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`;
 
const Title = styled.h3`
  border-bottom: 2.5px solid burlywood;  
  padding-bottom: 9px;
  color:${({ theme }) => theme === 'dark' ? 'white' : 'black'}; 
  text-align: center;
  font-size: 1em;
`;
 
const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 1px;
  color: ${({ theme }) => theme === 'dark' ? 'white' : 'black'};  
  cursor: pointer;
  `;
 
  const ColorIndicator = styled.span`
  height: 11px;
  width: 11px;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: inline-block;
  margin-right: 11px;
`;

const Flag = styled.img`
  width: 20px;  
  height: 15px;  
  object-fit: cover;  
  margin-right: 10px;  
  vertical-align: middle;  
`;

const ModalHeader = styled.h2`
  font-size: 20px;
  align-items: center;  
  color: #000;
  margin-bottom: 10px; 
  `;

  const preventionDetails = {
    HTTP_Exploit: {
      title: "HTTP_Exploit (Prevention)",
      content: [
        "Regularly update and patch web servers and applications.",
        "Use Web Application Firewalls (WAFs).",
        "Add security features to your website (like Content Security Policy)."
      ]
    },
    HTTP_Scan: {
      title: "HTTP_Scan (Prevention)",
      content: [
        "Use Intrusion Detection Systems (IDS).",
        "Block scanning IPs with rate limiting or IP blocking.",
        "Implement rate limiting for HTTP requests."
      ]
    },
    SSH_Bruteforce: {
      title: "SSH_Bruteforce (Prevention)",
      content: [
        "Use key-based authentication .",
        "Enforce strong passwords.",
        "Use multi-factor authentication (MFA)."
      ]
    },
    SMB_RDP_bruteforce: {
      title: "SMB/RDP_bruteforce (Prevention)",
      content: [
        "Use multi-factor authentication (MFA).",
        "Use newer, safer versions of SMB.",
        "Limit access to trusted IPs."
      ]
    },
    Telnet_Bruteforce: {
      title: "Telnet_Bruteforce (Prevention)",
      content: [
        "Restrict access to Telnet via firewalls (trusted IPs).",
        "Disable Telnet, replace with SSH",
        "Implement strong passwords"
      ]
    },
  };
 
const StatBox = ({ title, items }) => {
  const { theme } = useContext(ThemeContext);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const handleItemClick = item => {
    setSelectedItem(preventionDetails[item.name]);
  };

  return (
 <BoxContainer theme={theme}>
  <Title theme={theme}>{title}</Title>
      {items.map((item, index) => (
<ListItem key={index} theme={theme} onClick={() => handleItemClick(item)}>
          {item.color  && title !== "TARGETED NATIONS" && <ColorIndicator color={item.color} />}
          {item.icon && <img src={item.icon} alt={item.name || "Icon"} style={{ width: '24px', height: '24px', marginRight: '8px' }} />}
          {item.flag && <Flag src={item.flag} alt={`${item.name} flag`} />}
<span>{item.name || 'Unknown'}</span> 
</ListItem>
      ))}
     <Modal isOpen={selectedItem !== null} onClose={() => setSelectedItem(null)}  position="left">
      <ModalHeader theme={theme}>{selectedItem ? selectedItem.title : ''}</ModalHeader>
        <ul>
          {selectedItem ? selectedItem.content.map((point, idx) => (
            <li key={idx}>{point}</li>
          )) : null}
        </ul>
      </Modal>
</BoxContainer>
  );
};

export default StatBox;