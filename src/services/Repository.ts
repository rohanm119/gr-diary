import { BaseEntity } from '../models/BaseEntity';

/** Generic repository. Storage is localStorage for now; replace read/write with Supabase later. */
export class Repository<T extends BaseEntity> {
  constructor(private key: string, private fromRow: (row: any) => T, private seed: () => T[]) {}

  private read(): T[] {
    try {
      const raw = localStorage.getItem(this.key);
      if (raw) return (JSON.parse(raw) as unknown[]).map(this.fromRow);
    } catch { /* fall through to seed */ }
    const rows = this.seed();
    this.write(rows);
    return rows;
  }
  private write(rows: T[]) {
    try { localStorage.setItem(this.key, JSON.stringify(rows.map((r) => r.toRow()))); } catch { /* storage unavailable */ }
  }
  async list(): Promise<T[]> { return this.read(); }
  async save(entity: T): Promise<T> {
    const rows = this.read();
    entity.updatedAt = new Date().toISOString();
    const i = rows.findIndex((r) => r.id === entity.id);
    if (i >= 0) rows[i] = entity; else rows.push(entity);
    this.write(rows);
    return entity;
  }
  async remove(id: string): Promise<void> { this.write(this.read().filter((r) => r.id !== id)); }
}
