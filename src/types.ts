export type RootStackParamList = {
  Home: undefined;
  Messages: { directory: Directory };
};

export interface Directory {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  description: string;
  messages: Message[];
}

export interface Message {
  id: string;
  sender: string;
  preview: string;
  time: string;
  read: boolean;
  avatar: string;
  body: string;
}
