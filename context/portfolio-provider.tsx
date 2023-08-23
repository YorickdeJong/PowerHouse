
'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ImageDetail {
    alt: string;
    text: Array<{ type: string; children?: Array<any>; [key: string]: any }>;
}

interface ProjectDetail {
    detailImage: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
      hotspot?: {
        x: number;
        y: number;
      };
      crop?: {
        top: number;
        bottom: number;
        left: number;
        right: number;
      };
      fields: ImageDetail;
    };
}

interface ProjectState {
    title?: string | null;
    subTitle?: string | null;
    projectDetails: ProjectDetail[];
}

const initialState: ProjectState = {
  title: null,
  subTitle: null,
  projectDetails: [],
};

const ProjectContext = createContext<{
    projectState: ProjectState;
    setProjectStateHandler: (state: ProjectState) => void;  // Corrected type here
}>({
    projectState: initialState,
    setProjectStateHandler: () => {}  // Corrected default value here
});

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
    const [projectState, setProjectState] = useState<ProjectState>(initialState);
  
    // Load the initial state from local storage if it exists
    useEffect(() => {
      const savedState = localStorage.getItem("projectState");
      if (savedState) {
        console.log('Saved state from localStorage:', savedState);
        try {
          const parsedState = JSON.parse(savedState);
          console.log('Parsed state:', parsedState);
          setProjectState(parsedState);
        } catch (e) {
          console.error('Error parsing state:', e);
        }
      }
    }, []);
  
    // Save the state to local storage whenever it changes
    useEffect(() => {
      console.log('Saving to localStorage:', projectState);
      localStorage.setItem("projectState", JSON.stringify(projectState));
    }, [projectState]);
  
    const setProjectStateHandler = (state: ProjectState) => {
      console.log('Setting project state:', state);
      setProjectState(state);
    };
  
    return (
      <ProjectContext.Provider value={{ projectState, setProjectStateHandler }}>
        {children}
      </ProjectContext.Provider>
    );
};
  

export const useProjectState = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectState must be used within a ProjectProvider');
  }
  return context;
};