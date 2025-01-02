import LSColorsGenerator from './components/LSColorsGenerator';
import { TooltipProvider } from '@/components/ui/tooltip';

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <LSColorsGenerator />
      </div>
    </TooltipProvider>
  );
}

export default App;
