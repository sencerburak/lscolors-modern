import { FileTypePreview as FileTypePreviewType, ColorDefinition } from '@/types';

interface FileTypePreviewProps {
  fileTypes: ReadonlyArray<FileTypePreviewType>;
  selectedTypeIndex: number;
  colorStates: ReadonlyArray<{
    foreground: { color: string; bold: boolean };
    background: { color: string; bold: boolean };
  }>;
  colorMap: Record<string, ColorDefinition>;
}

export const FileTypePreview = ({
  fileTypes,
  selectedTypeIndex,
  colorStates,
  colorMap,
}: FileTypePreviewProps) => (
  <div className="p-4 bg-muted rounded-lg font-mono">
    <h3 className="text-sm font-medium mb-3">Preview</h3>
    <div className="space-y-2 text-sm">
      {fileTypes.map((type, index) => (
        <div
          key={type.id}
          className={`${selectedTypeIndex === index ? 'ring-2 ring-primary rounded' : ''}`}
          style={{
            color: colorMap[colorStates[index].foreground.color].hex,
            backgroundColor:
              colorMap[colorStates[index].background.color].hex === 'transparent'
                ? 'inherit'
                : colorMap[colorStates[index].background.color].hex,
            fontWeight: colorStates[index].foreground.bold ? 'bold' : 'normal',
            padding: '2px 4px',
            borderRadius: '4px',
          }}
        >
          {type.preview}
        </div>
      ))}
    </div>
  </div>
);
