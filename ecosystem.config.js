module.exports = {
  apps: [
    {
      name: 'osimacosmetics.kz : 3000',
      script: 'npm',
      args: 'start',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
};
