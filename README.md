# Aron Landing Page

Production landing website for Aron, built with Next.js App Router and deployed as a standalone Docker service.

The app contains:
- Marketing landing page at `/`
- Product dashboard demo at `/dashboard`
- Modern animated UI components (Framer Motion, Three.js, Recharts)

## Deployment Status

Current deployment profile in this folder is validated for:
- Bun-first dependency and runtime workflow
- Docker Compose deployment on `127.0.0.1:4000`
- Nginx reverse proxy from `iliterate.ai` and `www.iliterate.ai` to `127.0.0.1:4000`

## Requirements

For local development:
- Bun `1.3.6+`
- Node-compatible environment supported by Next.js 16

For server deployment:
- Docker Engine + Docker Compose v2
- Nginx (if exposing domain)

## Project Structure

Key route files:
- `src/app/page.tsx` (landing page composition)
- `src/app/dashboard/page.tsx` (dashboard overview demo)
- `src/app/dashboard/layout.tsx` (dashboard shell)

Landing sections:
- `src/components/landing/Navbar.tsx`
- `src/components/landing/Hero.tsx`
- `src/components/landing/LogoCloud.tsx`
- `src/components/landing/TextRevealSection.tsx`
- `src/components/landing/StatsSection.tsx`
- `src/components/landing/Features.tsx`
- `src/components/landing/HowItWorks.tsx`
- `src/components/landing/Pricing.tsx`
- `src/components/landing/Testimonial.tsx`
- `src/components/landing/Trust.tsx`
- `src/components/landing/Footer.tsx`
- `src/components/landing/FloatingChatButton.tsx`

Dashboard widgets:
- `src/components/dashboard/KPICards.tsx`
- `src/components/dashboard/Charts.tsx`
- `src/components/dashboard/ConversationsTable.tsx`

## Routes

- `/`
- `/dashboard`
- `/dashboard/analytics`
- `/dashboard/chatbot`
- `/dashboard/conversations`
- `/dashboard/integration`
- `/dashboard/settings`

## Package Manager Policy (Bun-First)

- Use `bun.lock` as the only lockfile.
- Do not reintroduce `package-lock.json`.
- In CI/CD, use `bun install --frozen-lockfile`.

## Local Development

Install dependencies:

```bash
bun install
```

Run dev server:

```bash
bun run dev
```

Build and run production mode locally:

```bash
bun run build
bun run start
```

Lint:

```bash
bun run lint
```

## Docker Deployment (Standalone)

Files used:
- `Dockerfile` (multi-stage Bun build/runtime)
- `docker-compose.yml` (single service + healthcheck)
- `.dockerignore`

Port mapping:

```text
127.0.0.1:4000 -> container:3000
```

This loopback-only mapping is intentional so public traffic goes through Nginx.

### First-Time Deploy

Run from `landing_page` directory:

```bash
docker compose up -d --build
```

Verify service:

```bash
docker compose ps
curl -I http://127.0.0.1:4000
curl -I http://127.0.0.1:4000/dashboard
```

View logs:

```bash
docker compose logs -f app
```

### Update Deploy

After pulling code changes:

```bash
docker compose up -d --build
```

### Stop or Remove

Stop services:

```bash
docker compose stop
```

Stop and remove services/network:

```bash
docker compose down
```

### Rebuild Without Cache

```bash
docker compose build --no-cache app
docker compose up -d
```

## Nginx Setup for iliterate.ai

Use `nginx.conf` in this folder as the landing vhost.

Current behavior:
- listens on port 80
- serves `iliterate.ai` and `www.iliterate.ai`
- proxies to `http://127.0.0.1:4000`
- applies gzip and security headers

Install example:

```bash
sudo cp landing_page/nginx.conf /etc/nginx/conf.d/iliterate.ai.conf
sudo nginx -t
sudo systemctl reload nginx
```

### TLS Guidance

Current config is intentionally HTTP-only for simplicity.

Use one of these patterns:
- TLS at edge (for example Cloudflare Full Strict) with origin access restricted
- TLS at origin (Nginx 443 + certificates) and redirect 80 -> 443

If origin is publicly reachable, prefer origin TLS and HSTS.

## Operations Runbook

Container status:

```bash
docker compose ps
```

Health and startup logs:

```bash
docker compose logs --tail 100 app
```

Restart service:

```bash
docker compose restart app
```

Check rendered compose config:

```bash
docker compose config
```

## Troubleshooting

Port 4000 already in use:
- Check listener and free the port, or change `docker-compose.yml` + `nginx.conf` to a new host port.

Container stuck in unhealthy:
- Check app logs: `docker compose logs app`
- Verify health endpoint responds inside container startup window.

Nginx 502 Bad Gateway:
- Confirm app is running: `docker compose ps`
- Confirm proxy target matches compose host binding (`127.0.0.1:4000`).

Build fails on dependencies:
- Ensure `bun.lock` exists and is committed.
- Re-run `bun install` locally and retry Docker build.

## Security Notes

- Container runs as non-root user (`bun`).
- Public exposure should happen through Nginx only.
- Keep CSP and headers reviewed when adding third-party scripts.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Three.js
- Recharts
