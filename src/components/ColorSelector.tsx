import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ColorDefinition } from '@/types';

interface ColorSelectorProps {
  title: string;
  colors: Record<string, ColorDefinition>;
  selectedColor: string;
  isBold: boolean;
  onColorChange: (color: string) => void;
  onBoldChange: (checked: boolean) => void;
}

export const ColorSelector = ({
  title,
  colors,
  selectedColor,
  isBold,
  onColorChange,
  onBoldChange,
}: ColorSelectorProps) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium">{title}</span>
      <div className="flex items-center gap-2">
        <Checkbox
          checked={isBold}
          onCheckedChange={(checked) => onBoldChange(checked as boolean)}
        />
        <span className="text-sm">Bold</span>
      </div>
    </div>
    <div className="grid grid-cols-5 gap-2">
      {Object.entries(colors).map(([key, color]) => (
        <Tooltip key={key}>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className={`w-full h-8 p-0 ${selectedColor === key ? 'ring-2 ring-primary' : ''}`}
              style={{
                backgroundColor: color.hex,
                border: color.name === 'Default' ? '1px dashed gray' : undefined,
              }}
              onClick={() => onColorChange(key)}
            />
          </TooltipTrigger>
          <TooltipContent>{color.name}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  </div>
);
