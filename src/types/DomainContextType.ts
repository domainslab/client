import { Domain } from './domains';
import { AxiosResponse } from 'axios';
import { Dispatch, SetStateAction } from 'react';

export type DomainContextType = [
  Domain[],
  Dispatch<SetStateAction<Domain[]>>,
  boolean,
  Dispatch<SetStateAction<boolean>>,
  string,
  Dispatch<SetStateAction<string>>,
  string[],
  Dispatch<SetStateAction<string[]>>,
  () => Promise<AxiosResponse>
]
