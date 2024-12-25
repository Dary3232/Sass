import React, { useState } from 'react';
import { Notification } from './components/Notification';
import './App.css';



function App() {
  const [notifications, setNotifications] = useState([]);

  const showNotification = (type, message) => {
    const id = Date.now();
    setNotifications([...notifications, { id, type, message }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 2000);
  };

  return (
    <div className="container">
        <button onClick={() => showNotification('success', 'Успех!')}>Уведомление об успехе</button>
        <button onClick={() => showNotification('error', 'Ошибка!')}>Уведомление об ошибке</button>
        <button onClick={() => showNotification('warning', 'Предупреждение!')}>Уведомление о предупреждении</button>

      {notifications.map((notification) => (
        <Notification key={notification.id} type={notification.type} message={notification.message} />
      ))}
    </div>
  );
}

export default App;


