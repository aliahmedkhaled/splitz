SPLITZ — Step 16 / Mobile-First Portfolio Polish
=================================================

Only one project file is replaced:
  src/app/portfolio-polish.css

Nothing else is removed or overwritten. This change preserves the navbar,
translations, homepage layout, existing program cards and CSS animations.

Installation (PowerShell, inside C:\Users\DELL\splitz):

1. Save all VS Code files.
2. Make a backup:
   Copy-Item .\src\app\portfolio-polish.css .\portfolio-polish-step14.backup.css
3. Unzip:
   Expand-Archive -LiteralPath "$env:USERPROFILE\Downloads\SPLITZ_Portfolio_Step16_Mobile_Polish.zip" -DestinationPath "$env:USERPROFILE\splitz" -Force
4. Check and run:
   npx tsc --noEmit
   npm run dev

Preview http://localhost:3000
In Chrome DevTools toggle device toolbar (Ctrl+Shift+M) and test:
  - 375px phone, 430px phone, 768px tablet and desktop
  - both Arabic and English
  - navbar/mobile menu, CTA buttons, program cards, How It Works and footer
  - no horizontal scrollbar

No new dependencies, database or external accounts.
The changes were statically checked; run the actual project and report errors.
