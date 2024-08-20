'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Posts() {
    const router = useRouter();
    const [value, setValue] = useState<string>('');
    const searchParams = useSearchParams();
    useEffect(() => {
        const searchValue = searchParams.get('search') || '';
        setValue(searchValue);
    }, [searchParams]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const handleClick = () => {
        router.push(`/posts?search=${value}`);
    };
    return (
        <div>
            <div>Search value: {value}</div>
            <input onChange={(e) => handleChange(e)} type="text" className='border border-black' />
            <button onClick={() => handleClick()}>Tìm kiếm</button>
        </div>
    )
}