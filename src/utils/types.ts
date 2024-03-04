import { links } from '@/lib/data';

export type SectionName = (typeof links)[number]['name'];
export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export interface IFormData {
  email: string;
  message: string;
}
export type Theme = 'light' | 'dark';
