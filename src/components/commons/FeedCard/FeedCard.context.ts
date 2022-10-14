import { createContext } from 'react';
import { FeedCardContextProps } from './FeedCard.types';

export const FeedCardContext = createContext<FeedCardContextProps>(
    {} as FeedCardContextProps
);