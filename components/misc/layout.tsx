import React, { useState, useEffect } from 'react'
import Footer from './footer'
import Header from './header'
import Sidebar from './sidebar'
import { getFileStructure } from '../../lib/getFileStructure'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const [fileStructure, setFileStructure] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Fetch the file structure on the client side
    const fetchFileStructure = async () => {
      try {
        const structure = await fetch('/api/file-structure')
          .then(res => res.json());
        setFileStructure(structure);
      } catch (error) {
        console.error('Error fetching file structure:', error);
      }
    };
    
    fetchFileStructure();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-grow relative pt-16 md:pt-20">
        {/* Sidebar */}
        <div className={`fixed left-0 top-16 md:top-20 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-64 bg-white border-r z-20 transform transition-transform duration-300 ease-in-out md:relative ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          {fileStructure && <Sidebar structure={fileStructure} isOpen={true} />}
        </div>

        {/* Main content */}
        <main className="flex-grow min-w-0 md:ml-4 w-full md:w-auto">
          {children}
        </main>
      </div>
      <Footer />
      
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default Layout
