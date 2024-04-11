import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SuperDetailedView() {
  const { id, info } = useParams();
  const [infoValue, setInfoValue] = useState('');

  useEffect(() => {
    fetch(`https://pokemon-backend-1f5a.vercel.app/pokemon/${id}/${info}`)
      .then((response) => response.json())
      .then((data) => setInfoValue(data[info]));
  }, [id, info]);

  return (
    <div>
      <h2>Super Detailed View</h2>
      <p>{infoValue}</p>
    </div>
  );
}

export default SuperDetailedView;