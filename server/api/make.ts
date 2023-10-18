import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { make } from "~/drizzle/schema";
import { env } from "@/utils/env";

export default defineEventHandler(async (event) => {
    const client = createClient({
        url: env.TURSO_DB_URL,
        authToken: env.TURSO_DB_AUTH_TOKEN,
    });

    const db = drizzle(client);

    const result = await db.select().from(make).all();
    return result;
});
