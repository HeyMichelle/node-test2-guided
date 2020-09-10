module.exports = {
	devlopment: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./data/hobbits.db3",
		},
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
	},
	testing: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./data/test.db3",
		},
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
	},
}

// you can create multiple environments in a knex file
// npx knex migrate:latest --env=testing
// npx knex seed:run --env=testing

// specifying --env=testing will provide that specific database responding to the specific environment