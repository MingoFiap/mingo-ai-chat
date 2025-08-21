import { useState, useRef, useEffect } from "react";
import { ChatBubble } from "@/components/ChatBubble";
import { ChatInput } from "@/components/ChatInput";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { MinGoLogo } from "@/components/MinGoLogo";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 2000));
    
    // Simulate different responses based on keywords
    let response = "";
    const message = userMessage.toLowerCase();
    
    if (message.includes("cliente") || message.includes("quantos")) {
      response = "Com base nos dados mais recentes, tivemos 2.847 clientes ativos este mês, representando um crescimento de 23% em relação ao mês anterior. Posso detalhar mais informações específicas se desejar.";
    } else if (message.includes("comprador") || message.includes("melhor")) {
      response = "Os principais compradores são: 1) Empresa XYZ Ltda (R$ 45.230), 2) João Silva (R$ 32.100), 3) Corporação ABC (R$ 28.950). Esses três representam 31% do faturamento total.";
    } else if (message.includes("vendas") || message.includes("faturamento")) {
      response = "O faturamento total foi de R$ 341.250 este mês, com ticket médio de R$ 119,80. O produto mais vendido foi o Plano Premium, representando 42% das vendas.";
    } else if (message.includes("campanha") || message.includes("marketing")) {
      response = "A última campanha de marketing digital teve ROI de 340%, gerando 156 novos leads qualificados e conversão de 28%. O canal com melhor performance foi o Instagram Ads.";
    } else {
      response = "Entendi sua pergunta. Com base nos dados disponíveis, posso ajudar você a analisar essas informações. Você gostaria que eu detalhe algum aspecto específico ou forneça mais contexto sobre os dados?";
    }
    
    setIsTyping(false);
    
    const botMessage: Message = {
      id: Date.now().toString() + "_bot",
      text: response,
      isUser: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, botMessage]);
  };

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    await simulateResponse(text);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <MinGoLogo />
          <div className="text-xs text-muted-foreground">
            Assistente Inteligente
          </div>
        </div>
      </header>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6">
          {messages.length === 0 ? (
            <WelcomeScreen />
          ) : (
            <div className="py-6">
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                />
              ))}
              {isTyping && (
                <ChatBubble
                  message=""
                  isUser={false}
                  isTyping={true}
                />
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </div>
  );
};

export default Chat;