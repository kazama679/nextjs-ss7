'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react'

export default function Page() {
    // lấy query bên cạnh dấu ? 
    // dùng useSearchParam đây là hook đc cung cấp bởi nextjs
    const searchParam=useSearchParams();
    const idProduct=searchParam.get("id");
    console.log(111111111111,idProduct);
  return (
    <div>
      chi tiết sản phẩm!
      
    </div>
  )
}
