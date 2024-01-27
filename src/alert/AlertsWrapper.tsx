import { createPortal } from 'react-dom';

interface AlertsWrapperProps {
  children: React.ReactNode;
}

export default function AlertsWrapper({ children }: AlertsWrapperProps) {
  return createPortal(
    <div className="fixed top-0 right-0 p-4 z-50 flex flex-col gap-4 max-w-sm min-w-fit w-full">
      {children}
    </div>,
    document.body
  );
}
