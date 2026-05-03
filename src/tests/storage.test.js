import { describe, it, expect, beforeEach, vi } from 'vitest';
import { storage } from '../utils/storage.js';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: vi.fn((key) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

vi.stubGlobal('localStorage', localStorageMock);

describe('Storage Utility', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('set and get should work correctly', () => {
    storage.set('testKey', { foo: 'bar' });
    expect(localStorage.setItem).toHaveBeenCalledWith('votesathi_testKey', JSON.stringify({ foo: 'bar' }));
    
    const val = storage.get('testKey');
    expect(val).toEqual({ foo: 'bar' });
  });

  it('get should return fallback if key does not exist', () => {
    const val = storage.get('nonExistent', 'fallbackValue');
    expect(val).toBe('fallbackValue');
  });

  it('remove should delete the key', () => {
    storage.set('deleteMe', true);
    storage.remove('deleteMe');
    expect(localStorage.removeItem).toHaveBeenCalledWith('votesathi_deleteMe');
    expect(storage.get('deleteMe')).toBeNull();
  });

  it('toggle should add and remove items from a list', () => {
    // Initial toggle (add)
    const added = storage.toggle('myList', 'item1');
    expect(added).toBe(true);
    expect(storage.get('myList')).toEqual(['item1']);

    // Second toggle (remove)
    const removed = storage.toggle('myList', 'item1');
    expect(removed).toBe(false);
    expect(storage.get('myList')).toEqual([]);
  });

  it('has should check for existence in a list', () => {
    storage.set('myList', ['a', 'b']);
    expect(storage.has('myList', 'a')).toBe(true);
    expect(storage.has('myList', 'c')).toBe(false);
  });
});
