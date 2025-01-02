# LSCOLORS Generator

An interactive tool for customizing and generating BSD LSCOLORS and Linux LS_COLORS configurations.

## Features

- Real-time preview of file type colors
- Support for 11 different file types
- Foreground and background color selection
- Bold text options
- Pre-made color schemes
- Automatic conversion between BSD and Linux formats

## Usage

1. Visit [https://sencerburak.github.io/lscolors-modern/](https://sencerburak.github.io/lscolors-modern/)
2. Select a file type and customize its colors
3. Copy the generated color string
4. Add to your shell configuration:

For BSD (macOS, FreeBSD):
```bash
export LSCOLORS="your-color-string"
```

For Linux:
```bash
export LS_COLORS="your-color-string"
```

## File Types Supported

- Directories
- Symbolic Links
- Sockets
- Pipes
- Executables
- Block Special
- Character Special
- Setuid
- Setgid
- Sticky Directories
- Other Writable Directories

## Credits

This project is a modern reimplementation of [LSCOLORS](https://github.com/ggreer/lscolors) by Geoff Greer, featuring an updated UI and additional functionality.

## License

ISC License