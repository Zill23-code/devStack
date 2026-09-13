import React, { useState, Suspense } from 'react';
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import TechCards from './Components/TechCards';
import './App.css';
import StackCard from './StackCard';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

const dataFetch = async (): Promise<any[]> => {
  const res = await fetch('/data.json');
  const resData = await res.json();
  return resData;
};

function App() {
  const [dataPromise] = useState<Promise<any[]>>(() => dataFetch());
  const [techCard, setTechCard] = useState<any[]>([]);

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div className="text-center py-12 text-gray-500 font-medium">Loading catalog...</div>}>
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 items-start">
         
          <div className="lg:col-span-2">
            <TechCards dataPromise={dataPromise} techCard={techCard} setTechCard={setTechCard} />
          </div>
        
          <div className="lg:col-span-1 lg:sticky lg:top-24">
            <StackCard techCard={techCard} setTechCard={setTechCard} />
          </div>
        </div>
      </Suspense>
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default App;