declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GITHUB_AUTH_TOKEN: string;
            NODE_ENV: "development" | "production";
            PORT?: string;
            USERNAME: string;
            DATABASE: string;
            DATABASE_LOCAL: string;
            CORS: string;
            PASSWORD: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}