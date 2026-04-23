import { jest } from '@jest/globals';
import request from 'supertest';

await jest.unstable_mockModule('../src/middleware/auth.middleware.js', () => ({
  authMiddleware: (req, res, next) => next()
}));

await jest.unstable_mockModule('../src/controllers/auth.controller.js', () => ({
  registerController: jest.fn(),
  loginController: jest.fn(),
  userInfoController: (req, res) => {
    res.status(200).json({
      nombre: 'melina',
      apellido: 'correo',
      correo: 'melina@correo.com'
    });
  }
}));

const { default: app } = await import('../index.js');

describe('Integración API /api/users/info', () => {
  test('POST /api/users/info con token y body correcto devuelve 200 y datos de usuario', async () => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJtZWxpbmEiLCJhcGVsbGlkbyI6Im1lbGluaXRhIiwiY29ycmVvIjoibWVsaW5hQGNvcmVvLmNvbSIsImlhdCI6MTc3Njc3ODEzMX0.Dkq3Z0eV18k8HROuT8telU98xVTUufNv0bVVo0suue0';

    const response = await request(app)
      .post('/api/users/info')
      .set('Authorization', token)
      .send({ email: 'melina@correo.com' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      nombre: 'melina',
      apellido: 'correo',
      correo: 'melina@correo.com'
    });
  });
});