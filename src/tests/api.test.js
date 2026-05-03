import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { app } from '../../server.js';

// Mock the Google AI SDK
vi.mock('@google/genai', () => {
  return {
    GoogleGenAI: vi.fn().mockImplementation(function() {
      return {
        models: {
          generateContent: vi.fn().mockResolvedValue({
            text: 'Mocked AI response about elections.'
          })
        }
      };
    })
  };
});

describe('VoteSathi AI API Endpoints', () => {
  
  it('GET /api/health should return 200 and status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
    expect(res.body).toHaveProperty('model');
  });

  it('POST /api/chat should return AI response for valid message', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ message: 'How do I register to vote?' });
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('reply');
    expect(typeof res.body.reply).toBe('string');
  });

  it('POST /api/chat should return 400 for empty message', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ message: '' });
    
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', 'Message is required');
  });

  it('POST /api/chat should return 400 for message that is too long', async () => {
    const longMessage = 'a'.repeat(1001);
    const res = await request(app)
      .post('/api/chat')
      .send({ message: longMessage });
    
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', 'Message too long (max 1000 chars)');
  });
});
