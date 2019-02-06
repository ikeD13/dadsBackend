// Update with your config settings.

module.exports = {

    development: {
      client: 'pg',
      connection: 'postgresql://localhost/daddy'
    },
    test: {
      client: 'pg',
      connection: 'postgresql://localhost/daddy'
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    },
  }
  
  
