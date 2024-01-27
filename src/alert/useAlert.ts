import { useContext } from 'react';
import AlertsContext from './AlertContext';

export const useAlert = () => {
  const context = useContext(AlertsContext);
  if (!context) {
    throw new Error('useAlert must be used within a AlertsContext');
  }
  return context;
};
