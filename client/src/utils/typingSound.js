let audioContext;

export function initAudio() {
  if (audioContext) return;
  
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  // Create and play a silent audio buffer to unblock audio
  const buffer = audioContext.createBuffer(1, 1, 22050);
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start();
}

export function createTypingSound() {
  if (!audioContext) {
    initAudio();
  }

  return () => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    const frequency = 440 + Math.random() * 220;
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.05);
  };
}

