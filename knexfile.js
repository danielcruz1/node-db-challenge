module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/projectsList.db3'
    }
  },
  migrations: {
    filename: './data/migrations'
  },
  seeds: {
    filename: './data/migrations'
  }
}; 
