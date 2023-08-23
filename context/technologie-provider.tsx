
'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface TextArrayItem {
    text: string;
    heading: string;
  }
  
  interface ExtendedProjectState {
    label?: string
    textOne?: string;
    textTwo?: string;
    textArray?: TextArrayItem[];
  }
  
  const initialState: ExtendedProjectState = {
    label: '',
    textOne: '',
    textTwo: '',
    textArray: [],
  };
  
  const TechnologyContext = createContext<{
    technologyState: ExtendedProjectState;
    setTechnologyStateHandler: (state: ExtendedProjectState) => void;
  }>({
    technologyState: initialState,
    setTechnologyStateHandler: () => {},
  });
  

interface TechnologyProviderProps {
  children: ReactNode;
}

export const TechnologyProvider: React.FC<TechnologyProviderProps> = ({ children }) => {
    const [technologyState, setTechnologyState] = useState<ExtendedProjectState>(initialState);

    // Load the initial state from local storage if it exists
    useEffect(() => {
      const savedState = localStorage.getItem("technologyState");
      if (savedState) {
        console.log('Saved state from localStorage:', savedState);
        try {
          const parsedState = JSON.parse(savedState);
          console.log('Parsed state:', parsedState);
          setTechnologyState(parsedState);
        } catch (e) {
          console.error('Error parsing state:', e);
        }
      }
    }, []);
  
    // Save the state to local storage whenever it changes
    useEffect(() => {
      console.log('Saving to localStorage:', technologyState);
      localStorage.setItem("technologyState", JSON.stringify(technologyState));
    }, [technologyState]);
  
    const setTechnologyStateHandler = (state: ExtendedProjectState) => {
        setTechnologyState(state);
      };
    
      return (
        <TechnologyContext.Provider value={{ technologyState, setTechnologyStateHandler }}>
          {children}
        </TechnologyContext.Provider>
      );
    };

    

  

export const useTechnologyState = () => {
  const context = useContext(TechnologyContext);
  if (!context) {
    throw new Error('useProjectState must be used within a ProjectProvider');
  }
  return context;
};