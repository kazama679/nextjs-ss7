'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function B3() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [value, setValue] = useState<string>('');
    useEffect(() => {
        const searchValue = searchParams.get('search') || '';
        setValue(searchValue);
    }, [searchParams]);
    const [name,setName]=useState<string>('')
    const [category,setCategory]=useState<string>('')
    const change1=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }
    const change2=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setCategory(e.target.value)
    }
    const click1=()=>{
        router.push(`/b3?name=${name}&category=${category}`);
    }
  return (
    <div>
        <div>tên: {name}</div>
        <div>danh mục: {category}</div>
      <input onChange={(e)=>change1(e)} type="text" />tên
      <input onChange={(e)=>change2(e)} type="text" />danh mục
      <button onClick={()=>click1()}>tìm kiếm</button>
    </div>
  )
}
