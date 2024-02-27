import supertest from 'supertest';
import app from './api.controller';

describe('API Controller', () => {
    it('should return 2', async () => {
        const response = await supertest(app)
            .post('/api')
            .send({height: [3, 2, 4, 1, 2]});
        expect(response.body.result).toEqual(2);
    });

    it('should return 8', async () => {
        const response = await supertest(app)
            .post('/api')
            .send({height: [4, 1, 1, 0, 2, 3]});
        expect(response.body.result).toEqual(8);
    })
});