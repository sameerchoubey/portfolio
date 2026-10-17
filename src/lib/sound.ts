let ctx: AudioContext | undefined;

// Call synchronously inside the click handler. Safari only lets audio start during the
// user gesture itself, and anything awaited (like a clipboard write) resolves after it.
export function unlockAudio() {
  if (typeof AudioContext === "undefined") return;
  ctx ??= new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
}

// A soft rising two-note chime (E5 → B5), synthesized so there's no audio file to load.
export function playCopyChime() {
  const audio = ctx;
  if (!audio) return;

  const start = audio.currentTime;
  [659.25, 987.77].forEach((frequency, i) => {
    const t = start + i * 0.08;
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = "sine";
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.08, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    osc.connect(gain).connect(audio.destination);
    osc.start(t);
    osc.stop(t + 0.24);
  });
}
