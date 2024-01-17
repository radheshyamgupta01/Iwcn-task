import React, { useState } from 'react';

const Task3= () => {

  const [receivedHeaders, setReceivedHeaders] = useState('');

 
  const handleApiRequest = async () => {
    try {
      const response = await fetch('https://chimpu.xyz/api/post.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phonenumber: '123456789', 
        }),
      });

      console.log('API Response:', response);
      const headers = response.headers;
     
      
      const headersString = Array.from(headers.entries())
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');

    
      setReceivedHeaders('Headers received:\n' + headersString);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='bg-gray-100 p-4 rounded-md'>
    <button
      onClick={handleApiRequest}
      className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
    >
      Make API Request
    </button>

    {receivedHeaders && (
      <div className='mt-4'>
        <p className='text-lg font-semibold mb-2'>Headers received:</p>
        <ul className='list-disc pl-4'>
          {receivedHeaders.split('\n').map((header, index) => (
            <li key={index} className='text-gray-700'>
              {header}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  );
};

export default Task3
