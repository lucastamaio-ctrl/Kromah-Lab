export interface NavItem {
  label: string;
  id: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  tags: string[];
}

export interface MethodologyStep {
  number: string;
  title: string;
  content: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}