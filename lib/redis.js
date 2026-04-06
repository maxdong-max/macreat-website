import { Redis } from '@upstash/redis';

let redisClient = null;

export function getRedis() {
  if (!redisClient) {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    
    if (!url || !token) {
      console.warn('Redis credentials not configured');
      return null;
    }
    
    redisClient = new Redis({
      url,
      token,
    });
  }
  
  return redisClient;
}

export const redis = {
  async get(key) {
    const client = getRedis();
    if (!client) return null;
    try {
      return await client.get(key);
    } catch (e) {
      console.error('Redis get error:', e);
      return null;
    }
  },
  
  async set(key, value) {
    const client = getRedis();
    if (!client) return;
    try {
      await client.set(key, value);
    } catch (e) {
      console.error('Redis set error:', e);
    }
  }
};