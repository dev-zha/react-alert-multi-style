import { AlertsProvider } from './alert';
import Page from './Page';

export default function App() {
  return (
    <AlertsProvider>
      <Page />
    </AlertsProvider>
  );
}
