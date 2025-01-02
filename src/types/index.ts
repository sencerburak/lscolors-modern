import { ReactNode } from 'react';

export interface ColorDefinition {
  name: string;
  hex: string;
  linux: string;
}

export interface FileTypePreview {
  preview: ReactNode;
  id: number;
  name: string;
  code: string;
  description: string;
  linuxCode: string;
  style: {
    color: string;
    backgroundColor: string;
    fontWeight: string;
  };
}

export interface FileTypeColorState {
  foreground: {
    color: string;
    bold: boolean;
  };
  background: {
    color: string;
    bold: boolean;
  };
}

export type ColorPosition = 'foreground' | 'background';

// Preview examples for the ls output
export interface FilePreview {
  permissions: string;
  owner: string;
  group: string;
  size: string;
  date: string;
  name: string;
  type: string;
  link?: string;
}
