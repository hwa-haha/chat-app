'use client'
import SideBar from '@/components/SideBar'
import Image from "next/image";
import { IoChatbubblesOutline } from 'react-icons/io5'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { CgSpinner } from 'react-icons/cg';
import Login from '@/components/Login';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { getDisplayName } from 'next/dist/shared/lib/utils';


export default function Home() {

    const [user, loading] = useAuthState(auth);
    
    useEffect(() => {
    
        if(user){
         setDoc(doc(db, "users",user.uid),
            {
                email: user.email,
                lastActive: serverTimestamp(),
                photoURL: user.photoURL,
                displayName: user.displayName
            },
            {merge: true}
        )
      }
    }, [user])
    

     if(loading){
        return(
            <div className='flex items-center justify-end w-full h-screen'>
                <CgSpinner className='w-20 h-10 animate-spin'/>
            </div>
        )
    }

    if(!user){
        return(
            <Login />
        )
    }

  return (
    <main className='grid w-full grid-cols-8'>
        <div className='col-span-2'>
            <SideBar/>
        </div>
        <div className='col-span-6 flex justify-center h-screen'>
            <div className='flex flex-col items-center justify-center space-y-4'>
            <IoChatbubblesOutline className='w-24 h-24 text-gray-300'/>
            <p className='text-2xl text-gray-300 '>대화를 시작합니다.</p>
            </div>
        </div>
    </main> 
  )
}



