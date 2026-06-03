import { useState, useEffect, useCallback } from 'react';

declare const __APP_VERSION__: string;

type OTAState = {
  current: string;
  latest: string | null;
  available: boolean;
  loading: boolean;
  error: string | null;
  buildTime: string | null;
};

async function fetchVersion(): Promise<{ version: string; buildTime: string }> {
  const res = await fetch(`/version.json?t=${Date.now()}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function isNewer(latest: string, current: string): boolean {
  const a = latest.split('.').map(Number);
  const b = current.split('.').map(Number);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const av = a[i] || 0;
    const bv = b[i] || 0;
    if (av !== bv) return av > bv;
  }
  return false;
}

const INITIAL: OTAState = {
  current: typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.0.0',
  latest: null,
  available: false,
  loading: true,
  error: null,
  buildTime: null,
};

export function useOTAUpdate(intervalMs = 300_000): OTAState & { check: () => void } {
  const [state, setState] = useState<OTAState>(INITIAL);

  const check = useCallback(async () => {
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const manifest = await fetchVersion();
      const available = isNewer(manifest.version, state.current);
      setState((s) => ({
        ...s,
        latest: manifest.version,
        available,
        loading: false,
        error: null,
        buildTime: manifest.buildTime,
      }));
    } catch (err) {
      setState((s) => ({
        ...s,
        loading: false,
        error: err instanceof Error ? err.message : 'Failed to check for updates',
      }));
    }
  }, [state.current]);

  useEffect(() => {
    check();
    const id = setInterval(check, intervalMs);
    return () => clearInterval(id);
  }, [check, intervalMs]);

  useEffect(() => {
    const onVisible = () => { if (document.visibilityState === 'visible') check(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, [check]);

  return { ...state, check };
}
