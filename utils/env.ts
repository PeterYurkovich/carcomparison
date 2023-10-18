import { createEnv } from "@t3-oss/env-nuxt";
import { z } from "zod";

export const env = createEnv({
    server: {
        TURSO_DB_URL: z.string().url(),
        TURSO_DB_AUTH_TOKEN: z.string().min(1),
    },
});
