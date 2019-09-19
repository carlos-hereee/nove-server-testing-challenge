const Users = require('./users-model.js');
const db = require('../data/db-config.js');

describe('users model', () => {
    // beforeEach( async () => {
    //     await db('users').truncate();
    // });
    
    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
    describe('add()', () => {
        it('should add users into the db', async () => {
            //insert a record
            await Users.add({ username: 'carlos' });

            let users = await db('users');
            
            //assert the record was inserted
            expect(users).toHaveLength(2);
        })
    })
})