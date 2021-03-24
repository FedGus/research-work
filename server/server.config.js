module.exports = {
    apps: [
        {
            name: "research_work",
            script: "./server/server.js",
            instances: 0,
            exec_mode: "cluster",
            watch: true,
            env: {
                NODE_ENV: "production",
                PORT: "8086",
            },
        },
    ],
};