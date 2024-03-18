import sqlite3 from "sqlite3";
import * as sqlite from "sqlite";
import path from "path";

export async function sqliteContection(): Promise<sqlite.Database> {
  const db = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database,
  });

  return db;
}
