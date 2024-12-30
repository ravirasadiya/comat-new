import Chat from "./_components/chat";

import { ChatProvider } from "./_contexts/chat";

export default function Home() {
  return (
    <ChatProvider>
      <div className="h-full w-full">
        <Chat />
      </div>
    </ChatProvider>
  );
}
