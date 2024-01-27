import React, { useState } from 'react';
import AlertsContext from './AlertContext';
import AlertsWrapper from './AlertsWrapper';
import AlertCard from './AlertCard';
import { TAlert, TAlertMessage } from './type';
import { DEFAULT_TIMEOUT } from './constant';

interface AlertsProviderProps {
  children: React.ReactNode;
}

function generateUniqueId() {
  const timestamp = new Date().getTime().toString(36);
  const randomString = Math.random().toString(36).substring(2, 5);

  return `${timestamp}-${randomString}`;
}

export default function AlertsProvider({ children }: AlertsProviderProps) {
  const [alerts, setAlerts] = useState<TAlert[]>([]);

  const addAlert = (
    message: string,
    type?: TAlertMessage,
    timeout?: number
  ) => {
    const id = generateUniqueId();
    const alert: TAlert = {
      id,
      message,
      type: type || TAlertMessage.NORMAL,
      timeout: timeout || DEFAULT_TIMEOUT,
    };

    setAlerts((prev) => [alert, ...prev]);
    return id;
  };

  const dismissAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <AlertsContext.Provider value={{ addAlert }}>
      {children}
      <AlertsWrapper>
        {alerts.map((alert) => (
          <AlertCard
            key={alert.id}
            message={alert.message}
            timeout={alert.timeout}
            type={alert.type}
            onDismiss={() => {
              dismissAlert(alert.id);
            }}
          />
        ))}
      </AlertsWrapper>
    </AlertsContext.Provider>
  );
}
