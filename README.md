# nestjs-platform-bun-pg-bun-pgjs

NestJS + custom Bun platform adapter + Postgres (postgres.js) on Bun. Implements the benchmark contract from `http-framework-benchmarks`. Identical to `nestjs-platform-bun-pg-bun-sql` except driver.

```bash
bun install
docker compose up -d --wait   # Postgres, seeded from db/init-postgres.sql
bun run start:dev
```

Config comes from `.env` / environment (`PORT`, `DATABASE_*`). Checks: `bun run check`, `bun test`.
