# WhatsUpTeam_Coursework
A basic chatting webpage that has been secured as part of our Secure Software Development Module at Roehampton.

## Development

Start Docker's Linux container engine, then run this from the repository root:

```sh
npm run dev
```

The command creates `.env` from `.env.example` if needed, builds the development
images, and starts MySQL, FastAPI, and Vite. Open **http://localhost:3000**.
The terminal stays attached to the logs; **Ctrl+C** stops the services.

Hot reload is enabled by default through `compose.override.yaml`:

- Changes under `frontend/src/` update the browser through Vite and React Fast
  Refresh. The HTML and Vite/TypeScript configuration files are also mounted.
- Changes under `backend/app/` restart Uvicorn automatically. Subsequent API
  requests use the updated Python code.
- Polling detects edits made through Windows and Docker Desktop reliably.

Source files are mounted read-only in the containers. Node dependencies stay
inside the frontend image, so a host `node_modules` folder is not required.
After changing npm packages, Python requirements, Docker configuration, or `.env`,
restart `npm run dev` to rebuild or recreate the affected services.

For detached development, use `docker compose up --build --detach --wait`.
Use `npm run logs` to follow logs and `npm run stop` to stop the stack. Database
data is preserved when stopping services.

Run frontend type checking and the production asset build with
`npm --prefix frontend run build`. Vite transforms TypeScript during development;
the separate build command performs the TypeScript checks.

## Static runtime build

To use the runtime images with Nginx and Uvicorn without source mounts, select
the base Compose file explicitly:

```sh
docker compose -f compose.yaml up --build --detach --wait
```

Running `npm run dev` switches the stack back to development mode.
