import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Title from './Title';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from Express API
    fetch('http://localhost:5000/api')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <html>
      <head>
        <Title/>
      </head>
      <body>
        <Header message={message}/>
      </body>
    </html>
  );
}

export default App;