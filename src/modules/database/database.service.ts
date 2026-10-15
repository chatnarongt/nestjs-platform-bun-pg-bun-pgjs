import { Injectable, type OnModuleDestroy } from '@nestjs/common'
import postgres from 'postgres'

@Injectable()
export class DatabaseService implements OnModuleDestroy {
  // ponytail: postgres.js has no `min` pool option; connections grow lazily to `max`.
  readonly sql = postgres({
    hostname: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    max: Number(process.env.DATABASE_MAX_POOL_SIZE),
  })

  onModuleDestroy() {
    return this.sql.end()
  }
}
