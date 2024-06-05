This is the client application for Legend Mama!

## Evironment Variables
Create a `.env.local` file in this folder with the following ENV variable:
```.env
NEXT_PUBLIC_API = "http://localhost:3000/api/v1" # Set this to whatever URL the server is hosted on
```

## Local Development

1. Install Node.js
2. Install dependencies - make sure you're in this folder!
```bash
npm i
```
3. Start the Firestore emulator in the **/server** directory (i.e. `firestore emulators:start`)
4. Start the Next.js dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
