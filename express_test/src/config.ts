export default {
    database: {
        uri: process.env.DB_URI!,
    },
    port: process.env.PORT ?? 3003,
};
