export const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      {/* MinGo Logo */}
      <div className="mb-8 animate-fade-in">
        <img 
          src="/lovable-uploads/da7dc534-6349-4512-b95f-2d934cad8909.png" 
          alt="MinGo Logo" 
          className="w-32 h-auto mx-auto mb-6"
        />
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
        {/* Suggestion Balloons */}
        <div className="relative">
          <div className="p-4 rounded-3xl bg-chat-assistant text-chat-assistant-foreground hover:bg-accent transition-colors cursor-pointer rounded-bl-lg shadow-sm">
            <h3 className="font-medium text-sm mb-2">📊 Análise de Vendas</h3>
            <p className="text-xs text-muted-foreground">Quantos clientes tivemos este mês?</p>
          </div>
          {/* Speech bubble tail */}
          <div className="absolute bottom-0 left-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-chat-assistant"></div>
        </div>
        
        <div className="relative">
          <div className="p-4 rounded-3xl bg-chat-assistant text-chat-assistant-foreground hover:bg-accent transition-colors cursor-pointer rounded-bl-lg shadow-sm">
            <h3 className="font-medium text-sm mb-2">👥 Principais Compradores</h3>
            <p className="text-xs text-muted-foreground">Quem são nossos melhores clientes?</p>
          </div>
          {/* Speech bubble tail */}
          <div className="absolute bottom-0 left-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-chat-assistant"></div>
        </div>
        
        <div className="relative">
          <div className="p-4 rounded-3xl bg-chat-assistant text-chat-assistant-foreground hover:bg-accent transition-colors cursor-pointer rounded-bl-lg shadow-sm">
            <h3 className="font-medium text-sm mb-2">📈 Relatórios</h3>
            <p className="text-xs text-muted-foreground">Como foi o desempenho da última campanha?</p>
          </div>
          {/* Speech bubble tail */}
          <div className="absolute bottom-0 left-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-chat-assistant"></div>
        </div>
        
        <div className="relative">
          <div className="p-4 rounded-3xl bg-chat-assistant text-chat-assistant-foreground hover:bg-accent transition-colors cursor-pointer rounded-bl-lg shadow-sm">
            <h3 className="font-medium text-sm mb-2">💡 Insights</h3>
            <p className="text-xs text-muted-foreground">Que tendências você identifica?</p>
          </div>
          {/* Speech bubble tail */}
          <div className="absolute bottom-0 left-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-chat-assistant"></div>
        </div>
      </div>
    </div>
  );
};