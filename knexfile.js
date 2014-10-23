'use strict';

var connection = process.env.DATABASE_URL || {
  host     : process.env.DATABASE_HOST     || '127.0.0.1',
  user     : process.env.DATABASE_USER     || '',
  password : process.env.DATABASE_PASSWORD || '',
  database : process.env.DATABASE_NAME     || 'microbloggy'
};

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      filename: './dev.postgresql'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
