export type Owner = 'a' | 'b' | 'both';
export interface BaseInit { id?: string; createdAt?: string; updatedAt?: string; owner?: Owner }

export class BaseEntity {
  id: string; createdAt: string; updatedAt: string; owner: Owner;
  constructor(i: BaseInit = {}) {
    const now = new Date().toISOString();
    this.id = i.id ?? crypto.randomUUID();
    this.createdAt = i.createdAt ?? now;
    this.updatedAt = i.updatedAt ?? now;
    this.owner = i.owner ?? 'both';
  }
  toRow(): Record<string, unknown> { return { ...this }; }
}
