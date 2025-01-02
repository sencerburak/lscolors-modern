import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const translateToLinux = (colorString: string): string => {
  // Maps BSD color codes to Linux color numbers
  const colorMap: { [key: string]: string } = {
    a: '30', // black
    b: '31', // red
    c: '32', // green
    d: '33', // brown/orange
    e: '34', // blue
    f: '35', // magenta
    g: '36', // cyan
    h: '37', // light grey
    x: '0', // default
  };

  const results: string[] = [];

  // File type codes in Linux format
  const typeMap = [
    'di', // directory
    'ln', // symbolic link
    'so', // socket
    'pi', // pipe
    'ex', // executable
    'bd', // block device
    'cd', // character device
    'su', // setuid
    'sg', // setgid
    'tw', // sticky + other writable
    'ow', // other writable
  ];

  // Process pairs of characters (foreground and background colors)
  for (let i = 0; i < colorString.length; i += 2) {
    const typeCode = typeMap[i / 2];
    const fg = colorString[i].toLowerCase();
    const bg = colorString[i + 1].toLowerCase();

    const parts: string[] = [];

    // Add file type code
    parts.push(typeCode + '=');

    // Check if foreground is bold (uppercase)
    if (colorString[i] !== fg) {
      parts.push('01;');
    }

    // Add foreground color
    if (fg === 'x') {
      parts.push('0');
    } else {
      parts.push(colorMap[fg]);
    }

    // Add background color if not default
    if (bg !== 'x') {
      parts.push(';' + (parseInt(colorMap[bg]) + 10));
    }

    results.push(parts.join(''));
  }

  return results.join(':');
};
