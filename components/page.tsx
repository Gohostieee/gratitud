import React from 'react';

import Head from 'next/head'
import Header from "./header";
import Footer from "./footer"


interface PageProps {
    children: JSX.Element | JSX.Element[];
}

export default function Page({children}: PageProps){
    return(<>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header url={"/"}/>  
        <div data-theme={"mytheme"} className={""}>
            {children}
            <Footer/>
        <div className={"fixed w-[100vw] top-0 z-[-1] h-[100%] bg-neutral left-0"}/>
        </div> 
        
    </>);
}