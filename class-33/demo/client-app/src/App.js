import './App.css';

import { useEffect, useState } from 'react';

import axios from 'axios';
import logo from './logo.svg';

function App() {
  const [data, setData] = useState([]);
  // const [token, setToken] = useState([]);

  useEffect(() => {
    async function refresh() {
      const refresh = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYzMTA5MzE2NSwianRpIjoiNzcxNjExZDNkZmRlNDMzMjhjYWU5MjRkMTdjY2ViODQiLCJ1c2VyX2lkIjoyfQ.nHDDPUO5IvFLhJRbtkC4SMzLnwgww-1HgcLT3g9q5wI';
      const config = {
        method: 'post',
        url: 'http://localhost:8000/api/token/refresh/',
        data: {
          "refresh": refresh
        },
      };
      const response = await axios(config);
      return response.data.access;
    }

    function fetchData(token) {
        const config = {
          method: 'get',
          url: 'http://localhost:8000/api/v1/posts/',
          headers: { 
            'Authorization': `Bearer ${token}`
          }
        };
        
        axios(config)
        .then(res => setData(res.data))
        .catch(function (error) {
          console.log(error);
          refresh().then((access) => {
            fetchData(access);
          })
        });
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
