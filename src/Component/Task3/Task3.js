
import React, { useState } from 'react';

const Task3 = () => {
  const [headersResponse, setHeadersResponse] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

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

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

  
      const contentType = response.headers.get('Content-Type');
      const contentLength = response.headers.get('Content-Length');
      // const date = response.headers.get('Date');
      // const phoneOrigin = response.headers.get('Phoneorigen');
      
      const headersString = `Content-Type: ${contentType},Content-Length: ${contentLength}`;
      

      const data = await response.json();

     
      setHeadersResponse(headersString);
      setApiResponse(data);
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

      {headersResponse && (
        <div className='mt-4'>
          <p className='text-lg font-semibold mb-2'>Headers Received:</p>
          <p className='text-gray-700'>{headersResponse}</p>
        </div>
      )}

      {apiResponse && (
        <div className='mt-4'>
          <p className='text-lg font-semibold mb-2'>API Response:</p>
          <p className='text-gray-700'>{apiResponse.msg}</p>
        </div>
      )}
    </div>
  );
};

export default Task3;

