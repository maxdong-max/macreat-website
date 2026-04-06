// Simple Upstash Redis HTTP API wrapper
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

export const redis = {
  async get(key) {
    if (!REDIS_URL || !REDIS_TOKEN) {
      console.warn('Redis credentials not configured');
      return null;
    }
    try {
      const res = await fetch(`${REDIS_URL}/get/${key}`, {
        headers: { Authorization: REDIS_TOKEN }
      });
      const data = await res.json();
      // Upstash returns { result: "..." } - result is a JSON string
      if (data.result) {
        return JSON.parse(data.result);
      }
      return null;
    } catch (e) {
      console.error('Redis get error:', e);
      return null;
    }
  },
  
  async set(key, value) {
    if (!REDIS_URL || !REDIS_TOKEN) {
      console.warn('Redis credentials not configured');
      return;
    }
    try {
      // Caller passes JSON string, we send it directly
      await fetch(`${REDIS_URL}/set/${key}`, {
        method: 'POST',
        headers: { 
          Authorization: REDIS_TOKEN,
          'Content-Type': 'application/json'
        },
        body: value
      });
    } catch (e) {
      console.error('Redis set error:', e);
    }
  }
};