import { createContext } from 'react';
import { TAlertMessage } from './type';

export type AlertsContextType = {
  addAlert: (message: string, type?: TAlertMessage, timeout?: number) => void;
};

const AlertsContext = createContext<AlertsContextType | null>(null);

export default AlertsContext;
