import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PresetButtons } from './PresetButtons';
import { ColorSelector } from './ColorSelector';
import { FileTypePreview } from './FileTypePreview';
import { ColorStringInputs } from './ColorStringInputs';
import { COLOR_MAP, FILE_TYPES, COLOR_PRESETS } from '@/lib/constants';
import { translateToLinux } from '@/lib/utils';
import { ColorDefinition, FileTypePreview as FileTypePreviewType } from '@/types';

const LSColorsGenerator = () => {
  const [selectedType, setSelectedType] = useState(0);
  const [colorStates, setColorStates] = useState(
    FILE_TYPES.map(() => ({
      foreground: { color: 'x', bold: false },
      background: { color: 'x', bold: false },
    }))
  );
  const [bsdString, setBsdString] = useState<string>(COLOR_PRESETS.default.value);
  const [linuxString, setLinuxString] = useState('');

  const typedColorMap: Record<string, ColorDefinition> = COLOR_MAP;

  const updateBsdString = (states = colorStates) => {
    let str = '';
    states.forEach((state) => {
      str += state.foreground.bold ? state.foreground.color.toUpperCase() : state.foreground.color;
      str += state.background.bold ? state.background.color.toUpperCase() : state.background.color;
    });
    setBsdString(str);
    return str; // Return the string for immediate use
  };

  const updateLinuxString = (bsdStr: string) => {
    const linuxStr = translateToLinux(bsdStr);
    setLinuxString(linuxStr);
  };

  const parseBsdString = (str: string) => {
    if (str.length !== 22) return;

    const newStates = FILE_TYPES.map((_, index) => {
      const fgChar = str[index * 2].toLowerCase();
      const bgChar = str[index * 2 + 1].toLowerCase();
      return {
        foreground: {
          color: fgChar,
          bold: str[index * 2] !== fgChar,
        },
        background: {
          color: bgChar,
          bold: str[index * 2 + 1] !== bgChar,
        },
      };
    });

    setColorStates(newStates);
    setBsdString(str);
    updateLinuxString(str); // Immediately update Linux string with the new BSD string
  };

  const handleColorChange = (isBackground: boolean, color: string) => {
    const newStates = [...colorStates];
    const position = isBackground ? 'background' : 'foreground';
    newStates[selectedType] = {
      ...newStates[selectedType],
      [position]: { ...newStates[selectedType][position], color },
    };
    setColorStates(newStates);

    // Immediately update both strings
    const newBsdString = updateBsdString(newStates);
    updateLinuxString(newBsdString);
  };

  const handleBoldChange = (isBackground: boolean, checked: boolean) => {
    const newStates = [...colorStates];
    const position = isBackground ? 'background' : 'foreground';
    newStates[selectedType] = {
      ...newStates[selectedType],
      [position]: { ...newStates[selectedType][position], bold: checked },
    };
    setColorStates(newStates);

    // Immediately update both strings
    const newBsdString = updateBsdString(newStates);
    updateLinuxString(newBsdString);
  };

  // Initialize with default values
  useEffect(() => {
    parseBsdString(COLOR_PRESETS.default.value);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>LSCOLORS Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <PresetButtons presets={COLOR_PRESETS} onPresetSelect={parseBsdString} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Select
                value={selectedType.toString()}
                onValueChange={(v) => setSelectedType(parseInt(v))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select file type" />
                </SelectTrigger>
                <SelectContent>
                  {FILE_TYPES.map((type) => (
                    <SelectItem key={type.id} value={type.id.toString()}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="p-4 bg-muted rounded-lg">
                <div className="space-y-4">
                  <ColorSelector
                    title="Foreground"
                    colors={typedColorMap}
                    selectedColor={colorStates[selectedType].foreground.color}
                    isBold={colorStates[selectedType].foreground.bold}
                    onColorChange={(color) => handleColorChange(false, color)}
                    onBoldChange={(checked) => handleBoldChange(false, checked)}
                  />
                  <ColorSelector
                    title="Background"
                    colors={typedColorMap}
                    selectedColor={colorStates[selectedType].background.color}
                    isBold={colorStates[selectedType].background.bold}
                    onColorChange={(color) => handleColorChange(true, color)}
                    onBoldChange={(checked) => handleBoldChange(true, checked)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <FileTypePreview
                fileTypes={FILE_TYPES as unknown as ReadonlyArray<FileTypePreviewType>}
                selectedTypeIndex={selectedType}
                colorStates={colorStates}
                colorMap={typedColorMap}
              />
            </div>
          </div>

          <ColorStringInputs
            bsdString={bsdString}
            linuxString={linuxString}
            onBsdStringChange={parseBsdString}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default LSColorsGenerator;
