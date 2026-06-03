import { useOTAUpdate } from '../hooks/useOTAUpdate';

export default function OTAUpdateBanner() {
  const { current, latest, available, loading, error, buildTime, check } = useOTAUpdate();

  if (!available) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-slide-up">
      <div className="glass-strong rounded-2xl p-4 border border-tahoe-blue/40 shadow-osd">
        <div className="flex items-start gap-3">
          <span className="text-lg mt-0.5">📡</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white">
              Update available
            </p>
            <p className="text-xs text-white/60 mt-0.5 font-mono">
              v{current} → v{latest}
              {buildTime && (
                <span className="text-white/40 ml-1">
                  · {new Date(buildTime).toLocaleDateString()}
                </span>
              )}
            </p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => location.reload()}
                className="osd-button px-3 py-1 rounded-lg text-xs font-semibold"
              >
                Reload
              </button>
              <button
                onClick={check}
                disabled={loading}
                className="glass px-3 py-1 rounded-lg text-xs font-semibold text-white/70 hover:text-white disabled:opacity-50"
              >
                {loading ? 'Checking…' : 'Check again'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
