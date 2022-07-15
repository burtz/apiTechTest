const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "docker_familytree_db_1",
        user: "person",
        password: "personpw",
        database: "familytree",
    },
    listPerPage: 10,
};
module.exports = config;
