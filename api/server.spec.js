const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {
        it('return a 200 OK status code', () => {
            // make a GET request to the / endpoint on the server
            return request(server)
            .get('/')
            .then( res => {
                // assertthat we get an http status code of 200
                expect(res.status).toBe(200);
            })
        });

        it("should return {api: 'its live'} ", async () => {
            const res = await request(server).get('/');

            expect(res.body.api).toBe('its live');
            expect(res.body).toEqual({ api: 'its live' });
        });
        
        it('return JSON', done => {
            request(server)
            .get('/')
            .then(res => {
                // assert taht we get a http status code 200
                expect(res.type).toMatch(/json/i);
                done();
            });
        });
    });
});