## Repo Structure
- `src/app/page.tsx` - Contains the high level main application code
- `src/app/layout.tsx` - Contains components used in `page.tsx`
- `src/app/components` - Contains the [shadcn](https://ui.shadcn.com/) components
- `data` - Contains backend [Pandas](https://pandas.pydata.org/) files

## Set-Up
1. Install Python (I am using Python 3.9.13).
2. Create virtual environment `venv`:
   ```bash
    python -m venv .venv
    ```
3. Activate virtual environment:
    ```bash
    . venv/bin/activate
    ```
4. Set kernal to use `venv` (may need to install `ipykernel`)

## Running Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) to view server in browser.
