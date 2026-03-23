import { useState } from 'react';

const useAlert = () => {
  // Use lowercase 'alert' to match your return and common conventions
  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

  // Destructure the object passed in: showAlert({ text, type })
  const showAlert = ({ text, type = 'danger' }) => setAlert({ 
    show: true,
    text,
    type
  });

  const hideAlert = () => setAlert({ 
    show: false,
    text: '',
    type: 'danger'
  });

  // Ensure 'alert' here matches the useState variable above
  return { alert, showAlert, hideAlert };
};

export default useAlert;