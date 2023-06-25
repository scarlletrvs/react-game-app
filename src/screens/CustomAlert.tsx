import React from 'react';
import { ContainerCustomAlert } from '../screens/home/CustomAlertsStyle';


export interface CustomAlertProps {
  type: string;
  message: string;
  onClose: () => void; // Novo prop para manipular o fechamento do alerta
}

const CustomAlert: React.FC<CustomAlertProps> = ({ type, message, onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <ContainerCustomAlert>
      <div className={`alert ${type}`}>
        <span>{message}</span>
        </div>
        <button onClick={handleCloseClick}>OK</button>
     
    </ContainerCustomAlert>
  );
};

export default CustomAlert;
