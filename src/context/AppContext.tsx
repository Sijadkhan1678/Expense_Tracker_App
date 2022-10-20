import { createContext } from 'react';
import {ContextProps} from '../types/Types'

 const appContext = createContext<ContextProps> ({} as ContextProps);
 export default  appContext;

 