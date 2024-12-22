"use client";

import React, { createContext, useContext, ReactNode, useState } from 'react';

import { Message, useChat as useAiChat } from 'ai/react';

export enum ColorMode {
    LIGHT = 'light',
    DARK = 'dark',
}

interface ChatContextType {
    messages: Message[];
    input: string;
    setInput: (input: string) => void;
    onSubmit: () => Promise<void>;
    isLoading: boolean;
    sendMessage: (message: string) => void;
    isResponseLoading: boolean;
}

const ChatContext = createContext<ChatContextType>({
    messages: [],
    input: '',
    setInput: () => {},
    onSubmit: async () => {},
    isLoading: false,
    sendMessage: () => {},
    isResponseLoading: false,
});

interface ChatProviderProps {
    children: ReactNode;
}

const initialMessage =
`You are a helpful on-chain agent that can act on the user's behalf.`

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {

    const [isResponseLoading, setIsResponseLoading] = useState(false);

    const { messages, input, setInput, append, isLoading } = useAiChat({
        maxSteps: 5,
        initialMessages: [
            {
                id: 'initial-message',
                role: 'system',
                content: initialMessage,
            }
        ],
        onResponse: () => {
            setIsResponseLoading(false);
        },
    });

    const onSubmit = async () => {
        if (!input.trim()) return;
        setIsResponseLoading(true);
        await append({
            role: 'user',
            content: input,
        });
        setInput('');
    }

    const sendMessage = async (message: string) => {
        setIsResponseLoading(true);
        await append({
            role: 'user',
            content: message,
        });
    }

    return (
        <ChatContext.Provider value={{ 
            messages, 
            input, 
            setInput, 
            onSubmit, 
            isLoading,
            sendMessage,
            isResponseLoading,
        }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);