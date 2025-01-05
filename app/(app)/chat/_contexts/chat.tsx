"use client";

import React, { createContext, useContext, ReactNode, useState } from 'react';

import { Message, useChat as useAiChat } from 'ai/react';
import { Models } from '@/types/models';

export enum ColorMode {
    LIGHT = 'light',
    DARK = 'dark',
}

// Define a type for tool results
type ToolResult = {
    message: string;
    body?: Record<string, unknown>;
}

interface ChatContextType {
    messages: Message[];
    input: string;
    setInput: (input: string) => void;
    onSubmit: () => Promise<void>;
    isLoading: boolean;
    sendMessage: (message: string) => void;
    addToolResult: (toolCallId: string, result: ToolResult) => void;
    isResponseLoading: boolean;
    model: Models;
    setModel: (model: Models) => void;
}

const ChatContext = createContext<ChatContextType>({
    messages: [],
    input: '',
    setInput: () => {},
    onSubmit: async () => {},
    isLoading: false,
    sendMessage: () => {},
    isResponseLoading: false,
    addToolResult: () => {},
    model: Models.OpenAI,
    setModel: () => {},
});

interface ChatProviderProps {
    children: ReactNode;
}

const initialMessage =
`You are a helpful on-chain agent that can act on the user's behalf.`

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {

    const [isResponseLoading, setIsResponseLoading] = useState(false);
    const [model, setModel] = useState<Models>(Models.OpenAI);

    const { messages, input, setInput, append, isLoading, addToolResult } = useAiChat({
        maxSteps: 15,
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
        api: '/api/chat/solana',
        body: {
            model,
            modelName: model,
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
            addToolResult: (toolCallId: string, result: ToolResult) => addToolResult({
                toolCallId,
                result,
            }),
            model,
            setModel,
        }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);