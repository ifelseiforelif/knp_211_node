import { createClient } from "redis";
import "dotenv/config";
export const clientRedis = createClient({
  url: "redis://172.25.195.127:6379",
});
