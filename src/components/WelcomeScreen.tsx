import { MinGoLogo } from "./MinGoLogo";

export const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      {/* MinGo Logo Image */}
      <div className="mb-6 animate-fade-in">
        <img 
          src="/mingo-logo.png" 
          alt="MinGo" 
          className="w-32 h-32 mx-auto"
        />
      </div>
      
      <div className="mb-8 animate-fade-in">
        <MinGoLogo />
      </div>
      
      <div className="space-y-4 animate-fade-in">
        <h1 className="text-3xl font-semibold text-foreground">
          Olá. O que podemos te ajudar?
        </h1>
        <p className="text-muted-foreground max-w-md">
          Faça perguntas sobre seus clientes, vendas, análises ou qualquer coisa que precise saber sobre seu negócio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 max-w-2xl w-full">
        {/* Dialog Balloon Style Cards */}
        <div className="relative p-4 rounded-2xl bg-chat-assistant text-chat-assistant-foreground hover:bg-chat-assistant/80 transition-colors cursor-pointer">
          {/* Speech Bubble Tail */}
          <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-chat-assistant"></div>
          <h3 className="font-medium text-sm mb-2">📊 Análise de Vendas</h3>
          <p className="text-xs opacity-80">Quantos clientes tivemos este mês?</p>
        </div>
        
        <div className="relative p-4 rounded-2xl bg-chat-assistant text-chat-assistant-foreground hover:bg-chat-assistant/80 transition-colors cursor-pointer">
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-chat-assistant"></div>
          <h3 className="font-medium text-sm mb-2">👥 Principais Compradores</h3>
          <p className="text-xs opacity-80">Quem são nossos melhores clientes?</p>
        </div>
        
        <div className="relative p-4 rounded-2xl bg-chat-assistant text-chat-assistant-foreground hover:bg-chat-assistant/80 transition-colors cursor-pointer">
          <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-chat-assistant"></div>
          <h3 className="font-medium text-sm mb-2">📈 Relatórios</h3>
          <p className="text-xs opacity-80">Como foi o desempenho da última campanha?</p>
        </div>
        
        <div className="relative p-4 rounded-2xl bg-chat-assistant text-chat-assistant-foreground hover:bg-chat-assistant/80 transition-colors cursor-pointer">
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-chat-assistant"></div>
          <h3 className="font-medium text-sm mb-2">💡 Insights</h3>
          <p className="text-xs opacity-80">Que tendências você identifica?</p>
        </div>
      </div>
    </div>
  );
};