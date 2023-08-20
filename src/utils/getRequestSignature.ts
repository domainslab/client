import { encrypt } from './cipher';

export const getRequestSignature = (): string => {
  const now = new Date();
  const signature = now.getTime().toString();

  return encrypt(signature, import.meta.env.VITE_AUTH_SECRET_KEY);
};
