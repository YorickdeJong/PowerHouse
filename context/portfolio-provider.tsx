
'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProjectState {
    title: string | null | undefined;
    subTitle: string | null | undefined;
    projectDetails: string | null | undefined;
}

const initialState: ProjectState = {
  title: null,
  subTitle: null,
  projectDetails: null,
};

const ProjectContext = createContext<{
  projectState: ProjectState;
  setProjectState: React.Dispatch<React.SetStateAction<ProjectState>>;
}>({
  projectState: initialState,
  setProjectState: () => {},
});

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
  const [projectState, setProjectState] = useState<ProjectState>(initialState);

  return (
    <ProjectContext.Provider value={{ projectState, setProjectState }}>
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