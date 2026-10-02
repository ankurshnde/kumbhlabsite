# Kumbh Labs — Official Website

> Intelligence for places where millions gather. A research and development initiative for an AI-first Kumbh Mela (Nashik Simhastha 2027).

---

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- **UI**: [React 19](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com/)
- **Build Tool**: [Vite](https://vitejs.dev)
- **Server Runtime / Deployment**: [Nitro](https://nitro.unjs.io) targeting [Cloudflare Pages & Workers](https://pages.cloudflare.com/)

---

## Local Development

Ensure you have Node.js 20+ installed.

```bash
# Install dependencies
npm install

# Start local development server (runs on http://localhost:8080)
npm run dev

# Format code
npm run format

# Run linter
npm run lint

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Cloudflare Deployment

This application builds with Nitro and is configured for zero-configuration Cloudflare deployment.

### Deploying to Cloudflare Pages:

1. Connect your repository (`https://github.com/ankurshnde/kumbhlabsite.git`) in the [Cloudflare Dashboard](https://dash.cloudflare.com/) under **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
2. Set build settings:
   - **Framework Preset**: `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `.output/public`
3. Environment Variables (optional):
   - `PARTNERSHIP_FORM_TOKEN`: FormSubmit alias token (e.g. `5b09d6112bd9d0509f468e1930797a37`)
   - `RESEND_API_KEY`: If using Resend for email delivery
