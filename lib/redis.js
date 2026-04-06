import { Redis } from '@upstash/redis';

let redisClient = null;

export function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  
  if (!url || !token) {
    console.warn('Redis credentials not configured');
    return null;
  }
  
  if (!redisClient) {
    redisClient = new Redis({
      url,
      token,
    });
  }
  
  return redisClient;
}