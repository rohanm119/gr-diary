import { Memory } from '../models/Memory';
import { demoMemories } from '../data/demo';
import { Repository } from './Repository';
export const memoryService = new Repository<Memory>('diary.memories', Memory.from, demoMemories);
