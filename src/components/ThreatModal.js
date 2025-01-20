// import React from 'react';
// import styled, { keyframes } from 'styled-components';

// const fadeIn = keyframes`
//   from { opacity: 0; }
//   to { opacity: 1; }
// `;

// const ModalBackdrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.75);
//   animation: ${fadeIn} 0.3s;
//   z-index: 9999;
// `;

// const ModalContainer = styled.div`
//   background: ${({ theme }) => theme === 'dark' ? 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)' : 'linear-gradient(135deg, #ddfcf7 0%, #2C3E50 100%)'};
//   color: ${({ theme }) => theme === 'dark' ? '#ECF0F1' : '#333'};
//   border-radius: 15px;
//   padding: 20px;
//   width: 80%;
//   max-width: 80vw;
//   max-height: 60%;
//   overflow-x: auto;
//   overflow-y: hidden;
//   box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
//   position: relative;
//   font-family: 'Arial', sans-serif;
//   line-height: 1.6;
//   // border: 3.5px solid ${({ theme }) => theme === 'dark' ? '#76baff' : '#0056b3'};
//   border: 3px solid cyan;
//   box-shadow: 0px 0px 15px cyan, 0px 0px 15px cyan inset;
//   animation: ${fadeIn} 0.4s ease-out;
//   font-size: 17.2px; 
//   font-weight: bold; 
//   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
// `;

// const TitleBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-bottom: 10px;
//   border-bottom: 1px solid ${({ theme }) => theme === 'dark' ? '#ECF0F1' : '#333'};
//   margin-bottom: 20px;
// `;

// const ModalTitle = styled.h1`
//   font-size: 1.8rem;
//   margin: 0;
//   font-weight: 700;
// `;

// const CloseButton = styled.button`
//   font-size: 24px;
//   background: none;
//   border: none;
//   color:rgb(248, 232, 232);
//   cursor: pointer;
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   transition: color 0.2s ease-in-out;

//   &:hover {
//     color:rgb(254, 90, 90);
//   }
// `;

// const HorizontalContent = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding-top: 10px;
//   padding-bottom: 10px;
// `;

// const ThreatCard = styled.div`
//   background: ${({ theme }) => theme === 'dark' ? '#34495E' : '#FFFFFF'};
//   border-radius: 10px;
//   padding: 10px;
//   margin: 0 20px;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s ease-in-out;

//   &:hover {
//     transform: translateY(-5px);
//     color: rgb(117, 202, 231)
//   }

//   hr {
//     border: 0;
//     height: 1px;
//     background: ${({ theme }) => theme === 'dark' ? '#76baff' : '#0056b3'};
//     margin: 10px 0;
//   }

//   p {
//     margin: 5px 0;
//   }

//   strong {
//     display: block;
//     margin-bottom: 5px;
//   }
// `;

// const ThreatModal = ({ isOpen, onClose, theme = 'light', data }) => {
//   if (!isOpen || !data || data.length === 0) return null;

//   return (
//     <ModalBackdrop onClick={onClose}>
//       <ModalContainer theme={theme} onClick={(e) => e.stopPropagation()}>
//         <TitleBar theme={theme}>
//           <ModalTitle>Threat Counts</ModalTitle>
//           <CloseButton theme={theme} onClick={onClose}>&times;</CloseButton>
//         </TitleBar>
//         <HorizontalContent>
//           {data.map((threat, index) => (
//             <ThreatCard key={index} theme={theme}>
//               <strong></strong> {threat.threat_name}
//               <strong>count:</strong> {threat.count}
//               <strong>PERCENTAGE:</strong> {threat.percentage.toFixed(2)}%
              
//             </ThreatCard>
//           ))}
//         </HorizontalContent>
//       </ModalContainer>
//     </ModalBackdrop>
//   );
// };

// export default ThreatModal;
















import React from 'react';
import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
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
  animation: ${fadeIn} 0.3s;
  z-index: 9999;
`;
const ModalContainer = styled.div`
  background: ${({ theme }) => theme === 'dark' ? 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)' : 'linear-gradient(135deg, #ddfcf7 0%, #2C3E50 100%)'};
  color: ${({ theme }) => theme === 'dark' ? '#ECF0F1' : '#333'};
  border-radius: 15px;
  padding: 20px;
  width: 80%;
  max-width: 80vw;
  max-height: 90%;
  overflow-x: auto;
  overflow-y: hidden;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  position: relative;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  border: 3px solid cyan;
  box-shadow: 0px 0px 15px cyan, 0px 0px 15px cyan inset;
  animation: ${fadeIn} 0.4s ease-out;
  font-size: 17.2px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;
const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme === 'dark' ? '#ECF0F1' : '#333'};
  margin-bottom: 20px;
`;
const ModalTitle = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  font-weight: 700;
`;
const CloseButton = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  color:rgb(248, 232, 232);
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: color 0.2s ease-in-out;
&:hover {
    color:rgb(254, 90, 90);
  }
`;
const HorizontalContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;
const ThreatCard = styled.div`
  background: ${({ theme }) => theme === 'dark' ? '#34495E' : '#d8edeb'};
  border-radius: 10px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  text-align: left;
  width: 250px;
  min-width: 200px;
 
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => theme === 'dark' ? '#76baff' : '#007acc'};
  }
  hr {
    border: 0;
    height: 1px;
    background: ${({ theme }) => theme === 'dark' ? '#76baff' : '#0056b3'};
    margin: 15px 0;
  }
  strong {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 15px;
    color: ${({ theme }) => theme === 'dark' ? '#b0c7db' : '#333'};
  }
 
  .threat-name {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme === 'dark' ? '#76baff' : '#0056b3'};
    margin-bottom: 10px;
    text-transform: capitalize;
  }
 
  .count {
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme === 'dark' ? '#ecf0f1' : '#555'};
  }
 
  .percentage {
    font-size: 14px;
    color: ${({ theme }) => theme === 'dark' ? '#a9cce3' : '#666'};
  }
`;
const ThreatModal = ({ isOpen, onClose, theme = 'light', data }) => {
  if (!isOpen || !data || data.length === 0) return null;
  return (
<ModalBackdrop onClick={onClose}>
<ModalContainer theme={theme} onClick={(e) => e.stopPropagation()}>
<TitleBar theme={theme}>
<ModalTitle>Threat Counts</ModalTitle>
<CloseButton theme={theme} onClick={onClose}>&times;</CloseButton>
</TitleBar>
<HorizontalContent>
          {data.map((threat, index) => (
<ThreatCard key={index} theme={theme}>
<div className="threat-name">{threat.threat_name}</div>
<hr />
<div className="count">
<strong>Count:</strong> {threat.count}
</div>
<div className="percentage">
<strong>Percentage:</strong> {threat.percentage.toFixed(2)}%
</div>
</ThreatCard>
          ))}
</HorizontalContent>
</ModalContainer>
</ModalBackdrop>
  );
};
export default ThreatModal;