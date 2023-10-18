import type { Config } from "drizzle-kit";
import { env } from "./utils/env";

export default {
    schema: "./drizzle/schema.ts",
    out: "./drizzle/migrations",
    driver: "turso",
    dbCredentials: {
        url: env.TURSO_DB_URL as string,
        authToken: env.TURSO_DB_AUTH_TOKEN as string,
    },
} satisfies Config;
