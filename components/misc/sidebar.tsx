import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface FileNode {
  name: string;
  path: string;
  slug: string;
  type: 'file' | 'directory';
  children?: FileNode[];
}

interface SidebarProps {
  structure: FileNode;
  className?: string;
  isOpen: boolean;
}

const Sidebar = ({ structure, className = '', isOpen }: SidebarProps) => {
  const [expanded, setExpanded] = useState<{[key: string]: boolean}>({});
  const router = useRouter();
  const currentPath = router.asPath.substring(1); // Remove leading slash

  // Auto-expand folders containing the current file
  useEffect(() => {
    if (currentPath) {
      const pathParts = currentPath.split('/');
      const newExpanded = {...expanded};
      
      // For each part of the path, expand the corresponding folder
      for (let i = 0; i < pathParts.length - 1; i++) {
        const partialPath = pathParts.slice(0, i+1).join('/');
        newExpanded[partialPath] = true;
      }
      
      setExpanded(newExpanded);
    }
  }, [currentPath]);

  const toggleExpand = (path: string) => {
    setExpanded({
      ...expanded,
      [path]: !expanded[path]
    });
  };

  const renderNode = (node: FileNode, level = 0) => {
    if (!node) return null;
    
    if (node.type === 'file') {
      // Format the name to remove the .md extension and make it more readable
      const displayName = node.name
        .replace(/\.md$/, '') // Remove .md extension
        .replace(/^\d+\s*-\s*/, ''); // Remove leading numbers and dashes (e.g., "1 - " or "2-")
      
      // Check if this is the current file
      const isActive = `/${node.slug}` === router.asPath;
      
      return (
        <li key={node.path} className="py-1">
          <Link 
            href={`/${node.slug}`} 
            className={`block pl-${level * 4 + 4} hover:bg-gray-100 py-1 rounded ${isActive ? 'bg-gray-100 font-medium text-blue-600' : 'text-gray-700'}`}
          >
            {displayName}
          </Link>
        </li>
      );
    } else if (node.type === 'directory' && node.children?.length) {
      // Format directory name to make it more readable
      const displayName = node.name
        .replace(/^\d+\s*-\s*/, ''); // Remove leading numbers and dashes
      
      const isExpandedDir = expanded[node.path] || false;
      
      return (
        <li key={node.path} className="py-1">
          <button 
            onClick={() => toggleExpand(node.path)}
            className={`flex items-center w-full text-left pl-${level * 4 + 2} pr-2 py-1 hover:bg-gray-100 rounded`}
          >
            <span className="w-4 text-gray-400">
              {isExpandedDir ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              )}
            </span>
            <span className="ml-1 font-medium text-gray-800">{displayName}</span>
          </button>
          
          {isExpandedDir && (
            <ul className="mt-1">
              {node.children?.map(child => renderNode(child, level + 1))}
            </ul>
          )}
        </li>
      );
    }
    
    return null;
  };

  if (!structure || !structure.children) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`sidebar bg-white h-full overflow-y-auto ${isOpen ? 'block' : 'hidden md:block'} ${className}`}>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4">Files</h3>
        <ul className="space-y-1">
          {structure.children.map(node => renderNode(node))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
