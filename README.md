# Albergue Celenis website

This is a lightweight static web site for alberguecelenis.com written with next.js and deployed to Vercel.com

## Usage

### 1. Clone Repo

```bash
git clone https://github.com/frandieguez/alberguecelenis.com
cd alberguecelenis.com
```

### 2. Install Dependencies

```bash
yarn # npm i
```

### 3. Run Development Environment

```bash
yarn dev # npm run dev
```

### Test Production Environment

I also included a `stage` script that will build and start a production server. You can run it with:

```bash
yarn stage # npm run stage
```

Alternatively you can run:

```bash
yarn build # npm run build
yarn start # npm start
```

## Important Notes

- Be sure to update the `package.json` to include your own information for the project you're working on.
- Purge CSS will only run in production, so use either `build` or `stage` to run it and minimize your CSS file size. You can also modify the `postcss.config.js` file to enable Purge CSS in development.
