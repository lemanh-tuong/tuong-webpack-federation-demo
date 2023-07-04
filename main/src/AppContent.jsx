import React from 'react';
import Title from 'home/containers/Title';

export default function AppContent() {
  return <div>
    <h1 className='text-3xl text-blue-400 mb-6'>Dòng text màu xanh từ "main app"</h1>
    <div>
      <h1 className='text-3xl'>Dưới đây sẽ là "Home package"</h1>
      <h1 className='text-3xl'>Dưới đây sẽ là  "Title của Home package và trong đó không có import file css có chứa tailwind"</h1>
      <Title />
    </div>
  </div>
}