export const COLOR_MAP = {
  a: { name: 'Black', hex: '#000000', linux: '30', index: 0 },
  b: { name: 'Red', hex: '#FF0000', linux: '31', index: 1 },
  c: { name: 'Green', hex: '#00FF00', linux: '32', index: 2 },
  d: { name: 'Brown', hex: '#A52A2A', linux: '33', index: 3 },
  e: { name: 'Blue', hex: '#0000FF', linux: '34', index: 4 },
  f: { name: 'Magenta', hex: '#FF00FF', linux: '35', index: 5 },
  g: { name: 'Cyan', hex: '#00FFFF', linux: '36', index: 6 },
  h: { name: 'Gray', hex: '#CCCCCC', linux: '37', index: 7 },
  x: { name: 'Default', hex: 'transparent', linux: '0', index: -1 },
} as const;

export const FILE_TYPES = [
  { id: 0, name: 'Directory', code: 'di', preview: 'directory/', description: 'Directory' },
  {
    id: 1,
    name: 'Symbolic Link',
    code: 'ln',
    preview: 'symlink -> target',
    description: 'Symbolic Link',
  },
  { id: 2, name: 'Socket', code: 'so', preview: 'socket.sock', description: 'Socket' },
  { id: 3, name: 'Pipe', code: 'pi', preview: 'pipe.fifo', description: 'Pipe' },
  { id: 4, name: 'Executable', code: 'ex', preview: 'program*', description: 'Executable' },
  {
    id: 5,
    name: 'Block Special',
    code: 'bd',
    preview: 'block-device',
    description: 'Block Special Device',
  },
  {
    id: 6,
    name: 'Character Special',
    code: 'cd',
    preview: 'char-device',
    description: 'Character Special Device',
  },
  {
    id: 7,
    name: 'Setuid Executable',
    code: 'su',
    preview: 'setuid*',
    description: 'Setuid Executable',
  },
  {
    id: 8,
    name: 'Setgid Executable',
    code: 'sg',
    preview: 'setgid*',
    description: 'Setgid Executable',
  },
  {
    id: 9,
    name: 'Dir (Sticky)',
    code: 'tw',
    preview: 'sticky/',
    description: 'Directory with Sticky Bit',
  },
  {
    id: 10,
    name: 'Dir (No Sticky)',
    code: 'ow',
    preview: 'writable/',
    description: 'Directory without Sticky Bit',
  },
] as const;

export const COLOR_PRESETS = {
  default: {
    name: 'Default BSD',
    value: 'exfxcxdxbxegedabagacad',
  },
  vivid: {
    name: 'Vivid Colors',
    value: 'ExGxFxDxBxegedabagacad',
  },
  monochrome: {
    name: 'Monochrome',
    value: 'axaxaxaxaxaxaxaxaxaxax',
  },
  'high-contrast': {
    name: 'High Contrast',
    value: 'BxFxCxDxBxEgEdAbAgAcAd',
  },
} as const;

export type ColorKey = keyof typeof COLOR_MAP;
export type FileTypeId = (typeof FILE_TYPES)[number]['id'];
export type PresetKey = keyof typeof COLOR_PRESETS;
