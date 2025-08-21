import { MinGoLogo } from "./MinGoLogo";

export const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
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
        <div className="p-4 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-colors cursor-pointer">
          <h3 className="font-medium text-sm mb-2">📊 Análise de Vendas</h3>
          <p className="text-xs text-muted-foreground">Quantos clientes tivemos este mês?</p>
        </div>
        <div className="p-4 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-colors cursor-pointer">
          <h3 className="font-medium text-sm mb-2">👥 Principais Compradores</h3>
          <p className="text-xs text-muted-foreground">Quem são nossos melhores clientes?</p>
        </div>
        <div className="p-4 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-colors cursor-pointer">
          <h3 className="font-medium text-sm mb-2">📈 Relatórios</h3>
          <p className="text-xs text-muted-foreground">Como foi o desempenho da última campanha?</p>
        </div>
        <div className="p-4 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-colors cursor-pointer">
          <h3 className="font-medium text-sm mb-2">💡 Insights</h3>
          <p className="text-xs text-muted-foreground">Que tendências você identifica?</p>
        </div>
      </div>
    </div>
  );
};