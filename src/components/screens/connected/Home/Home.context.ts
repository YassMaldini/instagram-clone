import { createContext } from 'react';
import { HomeContextProps } from './Home.types';

export const HomeContext = createContext<HomeContextProps>(
    {} as HomeContextProps
);