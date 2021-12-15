const { pool } = require('./db/index');

const user = {
  findOne: async (username, cb) => {
    const fUser = await pool.query('SELECT * FROM Users WHERE email = $1', [username.username]);
    // console.log('findOne', user);
    // console.log('findOne', user.rows);
    cb(null, fUser);
  },
  findById: async (id, cb) => {
    const fUser = await pool.query('SELECT * FROM Users WHERE id = $1', [id]);
    cb(null, fUser);
  },
  insert: async (username, hashPass, salt) => {
    const newUser = await pool.query(
      'INSERT into Users (email, hash, password_salt, date_created, employer_enabled) values ($1, $2, $3, $4, $5)',
      [username, hashPass, salt, 'NOW()', false],
    );
  },
};

module.exports = user;
