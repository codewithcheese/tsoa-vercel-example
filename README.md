# tsoa-vercel-example

Deploy with `vercel deploy`

Vercel creates serverless functions for files in `api/` and static assets for `public/`.

`vercel.json` rewrites requests to `api/index` function.

`pnpm run tsoa` to create routes and swapper.json after updating the API, or rely on pre-commit hook.
