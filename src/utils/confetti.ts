type ConfettiListener = () => void;

const listeners = new Set<ConfettiListener>();

export function subscribeConfetti(listener: ConfettiListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function fireConfetti(): void {
  listeners.forEach((listener) => listener());
}
