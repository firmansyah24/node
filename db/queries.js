const knex = require('./knex')

module.exports = {
    User: {
        getAll: function() {
            return knex('Users')
        },
        getById: function(id) {
            return knex('Users').where('id', id).first()
        },
        create: function(User) {
            return knex('Users').insert(User).returning('*')
        },
        update: function() {
            
        }
    },
    Product: {
        getAll: function() {
            return knex('Products')
            .leftJoin('Users', {'Products.user_id': 'Users.id'})
            .select(
                'Products.id',
                'Users.firstname as user_id',
                'Products.location',
                'Products.title'
            )
        },
        getById: function(id) {
            return knex('Products')
            .leftJoin('Users', {'Products.user_id': 'Users.id'})
            .select(
                'Products.id',
                'Users.firstname as user_id',
                'Products.location',
                'Products.title'
            )
            .where('Products.id',id).first()
        },
        create: function(Product) {
            return knex('Products').insert(Product).returning('*')
        }
    },
    Categories: {
        getAll: function() {
            return knex('Categories')
        },
        getById: function(id) {
            return knex('Categories').where('id', id)
        },
        create: function(Categories) {
            return knex('Categories').insert(Categories).returning('*')
        }
    },
    Image: {
        getAll: function() {
            return knex('Images')
        },
        getById: function(id) {
            return knex('Images').where('id', id).first()
        },
        create: function(Image) {
            return knex('Images').insert(Image).returning('*')
        }
    }
}