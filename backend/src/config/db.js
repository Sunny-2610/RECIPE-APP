import {drizzle} from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { ENV } from "./env.js";
import * as schema from "./schema.js";

const sql = new(ENV.DATABASE_URL)
export const db = drizzle(sql, {schema});