import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css';

const Ariane = () => {
  const [data, setData] = useState([]);

  const push = (event) => {
    let datas = data.slice();
    if (data.length !== 0) datas.push('-' + event.detail);
    else datas.push(event.detail);
    setData(datas);
    window.removeEventListener('ariane-push', push);
    window.removeEventListener('ariane-pop', pop);
    window.removeEventListener('ariane-path', path);
  }

  const pop = (event) => {
    let datas = data.slice();
    datas.pop();
    setData(datas);
    window.removeEventListener('ariane-push', push);
    window.removeEventListener('ariane-pop', pop);
    window.removeEventListener('ariane-path', path);
  }

  const path = (event) => {
    console.log(event.detail)
    let datas = event.detail;
    if (datas.length > 1) {
      for (let i = 0; i < datas.length - 1; i++) {
        datas[i] += '-';
      }
    }
    setData(datas);
    window.removeEventListener('ariane-push', push);
    window.removeEventListener('ariane-pop', pop);
    window.removeEventListener('ariane-path', path);
  }

  window.addEventListener('ariane-push', push);
  window.addEventListener('ariane-pop', pop);
  window.addEventListener('ariane-path', path);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Skeleton MFE</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700">
          {data}
        </p>
      </div>
    </div>
  );
};

export default Ariane; 