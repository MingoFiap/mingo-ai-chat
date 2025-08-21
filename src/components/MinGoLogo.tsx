export const MinGoLogo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        {/* Flamingo shape inspired by MinGo logo */}
        <div className="w-8 h-8 bg-primary rounded-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 bg-surface rounded-full"></div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-foreground rounded-full opacity-20"></div>
      </div>
      <span className="text-xl font-bold text-foreground">
        Min<span className="text-primary">Go</span>
      </span>
    </div>
  );
};