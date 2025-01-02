import { Input } from '@/components/ui/input';

interface ColorStringInputsProps {
  bsdString: string;
  linuxString: string;
  onBsdStringChange: (value: string) => void;
}

export const ColorStringInputs = ({
  bsdString,
  linuxString,
  onBsdStringChange,
}: ColorStringInputsProps) => (
  <div className="space-y-4">
    <div className="space-y-2">
      <label className="text-sm font-medium">BSD LSCOLORS=</label>
      <Input
        value={bsdString}
        onChange={(e) => onBsdStringChange(e.target.value)}
        className="font-mono"
      />
    </div>
    <div className="space-y-2">
      <label className="text-sm font-medium">Linux LS_COLORS=</label>
      <Input value={linuxString} readOnly className="font-mono" />
    </div>
  </div>
);
