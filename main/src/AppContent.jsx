import React from 'react';
import HomeAppContent from 'home/AppContent';

export default function AppContent() {
  return <div>
    <h1 className='text-3xl text-blue-400 mb-6'>Dòng text màu xanh từ "main app"</h1>
    <div>
      <h1 className='text-3xl'>Dưới đây sẽ là "Home package"</h1>
      <HomeAppContent />
    </div>
  </div>
}