# JishAtlas

JishAtlas is a free, open-source Windows application that helps organize files
with AI. It scans a folder, creates a proposed organization plan, and asks the
user to review and approve the plan before applying changes.

- Website: https://jishatlas.com
- Source code: https://github.com/jishnudutta/JishAtlas
- Documentation: https://jishatlas.com/docs/introduction
- Releases: https://github.com/jishnudutta/JishAtlas/releases
- License: MIT; see the `LICENSE` file in the repository.

## What it does

1. The user selects a folder to organize.
2. JishAtlas scans files and folders, detects software projects, and protects
   project internals from reorganization.
3. The user chooses Local AI or Google Gemini to create an organization plan.
4. JishAtlas presents the plan for review.
5. The user chooses to create an organized copy or organize the selected folder
   in place, then explicitly approves or declines applying the plan.

The default organization mode creates a separate copy. In-place mode verifies
the copied results before replacing the original contents; if copying or
verification fails, the original folder is left in place.

## AI backends and data

### Local AI

Local AI uses the Qwen3-1.7B-Q4_K_M GGUF model through llama.cpp. The model is
downloaded from Hugging Face on first use. File analysis and planning run on
the local computer after the model is installed. Internet access is needed for
the initial model download, but not for later local analysis.

### Google Gemini

Gemini requires an internet connection and a Gemini API key. JishAtlas sends
relative file paths, folder and project information, and up to 1,200 characters
of readable UTF-8 text per file to Google's API. The files themselves are not
uploaded. Do not use Gemini for folders whose names or text contents should not
be sent to Google.

The Gemini API key is stored locally in `.env` for source runs or in
`%LOCALAPPDATA%\\JishAtlas\\.env` for packaged Windows runs. Keep this file
private.

## Protected and skipped content

Detected software projects are treated as units, so their internal files are
not reorganized. Directories named `.git`, `node_modules`, `__pycache__`,
`.venv`, `venv`, `build`, `dist`, `.vscode`, `.vs`, `obj`, or `.idea` are
excluded from scanning and preserved when copying.

Readable text files are sampled as UTF-8, up to 1,200 characters per file.
Binary and unreadable files are included in the scan without a content sample.

## Run from source

Requires Python 3.13 or later and `uv`:

```powershell
git clone https://github.com/jishnudutta/JishAtlas.git
cd JishAtlas
uv sync
uv run python main.py
```

For the Windows executable, download `JishAtlas.exe` from the
[GitHub releases](https://github.com/jishnudutta/JishAtlas/releases).

## Project status

The Python terminal application is the functional organizer. The separate
React and Tauri desktop interface is a prototype and is not yet connected to
the Python organizer.

## Guidance for AI agents

- Treat the repository and its source files as the authoritative description
  of implementation details.
- Preserve the review-before-apply safety boundary when changing behavior.
- Do not claim the desktop prototype can scan or organize files until it is
  connected to the Python organizer.
- Review the [documentation](https://jishatlas.com/docs/introduction) before
  giving detailed usage instructions.
