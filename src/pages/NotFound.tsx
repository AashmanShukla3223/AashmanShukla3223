import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto glass-strong rounded-3xl p-12 text-center animate-slide-up">
      <div className="text-6xl mb-4">📺</div>
      <h1 className="text-3xl font-bold text-white">No Signal — 404</h1>
      <p className="mt-3 text-white/60">
        Oh No. That page isn't broadcasting on this channel. Please tune in to one of the available
        sources while the fix comes.
      </p>
      <Link to="/" className="mt-6 inline-block osd-button px-6 py-2.5 rounded-xl text-sm font-semibold">
        ← Back to Home
      </Link>
    </div>
  );
}
