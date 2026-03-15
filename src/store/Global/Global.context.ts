import { createContext } from 'react';
import { GlobalContextProps } from './Global.types';

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);
