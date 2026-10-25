SPLITZ — Homepage Cleanup / Fix for dashboard preview section
============================================================

This small update removes the long "02 / PRODUCT INTERFACE" demo section
from the homepage. It does not delete the dashboard preview component,
so it can be reused later on a dedicated portfolio demo page.

Only one file is changed:
  src/app/page.tsx

Preserved:
  - Navbar, Hero, Training Programs, How It Works, About, Footer
  - Language switching and translation dictionaries
  - Motion/hover effects and responsive styles
  - All existing components and files

Install in Windows PowerShell inside C:\Users\DELL\splitz:
  1) VS Code: File > Save All.
  2) Back up your current home page:
     Copy-Item .\src\app\page.tsx .\page-before-cleanup.backup.tsx
  3) Download SPLITZ_Homepage_Cleanup_Step15.zip to Downloads.
  4) Run:
     Expand-Archive -LiteralPath "$env:USERPROFILE\Downloads\SPLITZ_Homepage_Cleanup_Step15.zip" -DestinationPath "$env:USERPROFILE\splitz" -Force
  5) Run:
     npx tsc --noEmit
  6) Open http://localhost:3000 and press Ctrl+Shift+R.

Expected: after the training program cards, the "How It Works" section
appears directly, with no full Dashboard Preview block in between.
