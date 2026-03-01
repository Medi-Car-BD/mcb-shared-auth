# mcb-backend-boilerplate

```bash
rm -r node_modules package-lock.json
```

- Prisma Generate

```bash
pnpm prisma generate
```

- Run Prisma To Initialize Database

```bash
pnpm prisma init
```

- Generate Prisma Client

```bash
pnpm prisma generate

```

- Run Prisma Migrations

```bash
pnpm prisma:migrate
```

- Shared Auth package installation

```bash
set GITHUB_TOKEN="your_github_token"

pnpm install @mcb-shared-auth/auth
```

Or Use

```bash
pnpm install github:Medi-Car-BD/mcb-shared-auth
```
