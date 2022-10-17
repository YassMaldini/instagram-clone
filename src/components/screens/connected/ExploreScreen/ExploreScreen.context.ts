import { createContext } from 'react';
import { ExploreScreenContextProps } from './ExploreScreen.types';

export const ExploreScreenContext = createContext<ExploreScreenContextProps>(
    {} as ExploreScreenContextProps
);