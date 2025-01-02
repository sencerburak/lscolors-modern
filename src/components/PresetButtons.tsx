import { Button } from '@/components/ui/button';

interface PresetButtonsProps {
  presets: Record<string, { name: string; value: string }>;
  onPresetSelect: (value: string) => void;
}

export const PresetButtons = ({ presets, onPresetSelect }: PresetButtonsProps) => (
  <div className="flex flex-wrap gap-2">
    {Object.entries(presets).map(([key, preset]) => (
      <Button
        key={key}
        variant="outline"
        size="sm"
        onClick={() => onPresetSelect(preset.value)}
        className="flex-1 min-w-[120px]"
      >
        {preset.name}
      </Button>
    ))}
  </div>
);
