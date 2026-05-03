import { describe, it, expect, vi, beforeEach } from 'vitest';
import { setupVoiceFeatures, handleMicClick } from '../utils/voice.js';

describe('Voice Utility', () => {
  beforeEach(() => {
    vi.stubGlobal('alert', vi.fn());
    vi.stubGlobal('window', {
      speechSynthesis: {
        speaking: false,
        cancel: vi.fn(),
        speak: vi.fn(),
      },
      SpeechRecognition: vi.fn(),
      webkitSpeechRecognition: vi.fn(),
      Event: vi.fn(),
      alert: vi.fn(),
    });
    vi.stubGlobal('SpeechSynthesisUtterance', vi.fn());
  });

  it('setupVoiceFeatures should initialize window properties', () => {
    setupVoiceFeatures();
    expect(window.currentUtterance).toBeNull();
    expect(window.currentListenBtn).toBeNull();
    expect(typeof window.toggleSpeech).toBe('function');
  });

  it('handleMicClick should show alert if SpeechRecognition is not supported', () => {
    // Override window to remove SpeechRecognition support
    vi.stubGlobal('window', { 
      alert: vi.fn(),
      SpeechRecognition: undefined,
      webkitSpeechRecognition: undefined
    });
    vi.stubGlobal('alert', vi.fn());
    
    const input = { value: '' };
    const btn = { classList: { add: vi.fn(), remove: vi.fn() } };
    
    handleMicClick(input, btn);
    expect(alert).toHaveBeenCalledWith(expect.stringContaining('not supported'));
  });

  it('toggleSpeech should call speechSynthesis.speak', () => {
    setupVoiceFeatures();
    const btn = { querySelector: vi.fn().mockReturnValue({ innerText: '' }) };
    const text = 'Hello world';
    
    window.toggleSpeech(btn, text);
    expect(window.speechSynthesis.cancel).toHaveBeenCalled();
    expect(window.speechSynthesis.speak).toHaveBeenCalled();
  });
});
