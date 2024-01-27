import { TAlertMessage, useAlert } from './alert';

export default function Page() {
  // Alert
  const { addAlert } = useAlert();

  const handleShowAlert = () => {
    const message = 'This is Normal Alert' + new Date().getMilliseconds();
    addAlert(message);
  };

  const handleShow10sTimeoutAlert = () => {
    const message =
      'This is 10 second Success Alert' + new Date().getMilliseconds();
    addAlert(message, TAlertMessage.SUCCESS, 10);
  };

  const handleShow5sTimeoutAlert = () => {
    const message =
      'This is 5 second Error Alert' + new Date().getMilliseconds();
    addAlert(message, TAlertMessage.ERROR, 5);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-gray-800 text-4xl font-bold mb-4">
        Display different types of alerts in React
      </h1>
      <p className="text-gray-500">
        Creating a custom Alert/Toast component in React without an external UI
        library involves using useState and useEffect hooks to manage visibility
        and duration. To ensure proper rendering, leverage React Portals with
        ReactDOM.createPortal for flexibility. Tailwind CSS can be integrated
        for quick and easy styling, allowing seamless customization based on
        specific design and functionality requirements. This approach provides a
        lightweight and customizable solution, tailored to your project's needs.
      </p>
      <div className="flex flex-wrap gap-8 mt-8">
        <button
          type="button"
          onClick={handleShowAlert}
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-xl py-1.5 px-3"
        >
          Show Normal Alert
        </button>
        <button
          type="button"
          onClick={handleShow10sTimeoutAlert}
          className="bg-green-500 hover:bg-green-700 text-white font-medium rounded-xl py-1.5 px-3"
        >
          Show Timeout 10s Success Alert
        </button>
        <button
          type="button"
          onClick={handleShow5sTimeoutAlert}
          className="bg-red-500 hover:bg-red-700 text-white font-medium rounded-xl py-1.5 px-3"
        >
          Show Timeout 5s Error Alert
        </button>
      </div>
    </div>
  );
}
