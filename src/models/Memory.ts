import { BaseEntity, BaseInit } from './BaseEntity';
export interface MemoryInit extends BaseInit { title?: string; date?: string; text?: string }

export class Memory extends BaseEntity {
  title: string; date: string; text: string;
  constructor(i: MemoryInit = {}) {
    super(i);
    this.title = i.title ?? '';
    this.date = i.date ?? new Date().toISOString().slice(0, 10);
    this.text = i.text ?? '';
  }
  static from(row: MemoryInit) { return new Memory(row); }
}
