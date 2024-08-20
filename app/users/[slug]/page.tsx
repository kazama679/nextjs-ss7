'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';

export default function User() {
    const searchParam=useSearchParams();
    const userName=searchParam.get('name');
    const userAddress=searchParam.get('address');
    console.log(userName,userAddress);
    
  return (
    <div>
        trang chi tiết user
    </div>
  )
}
