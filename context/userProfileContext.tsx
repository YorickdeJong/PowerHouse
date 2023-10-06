'use client'
import { createContext, useContext, useState } from 'react';

type User = {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    createdAt: string;
    defaultAddress: {
      id: string;
      address1: string;
      city: string;
      province: string;
      country: string;
      zip: string;
    };
    addresses: {
      edges: {
        node: {
          id: string;
          address1: string;
          city: string;
          province: string;
          country: string;
          zip: string;
        };
      }[];
    };
};
  
type UserContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    accessToken: string | null;
    setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);
  
export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
  
export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
  
    return (
      <UserContext.Provider value={{ user, setUser, accessToken, setAccessToken }}>
        {children}
      </UserContext.Provider>
    );
}