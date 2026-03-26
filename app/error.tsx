'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Caught by Next.js Error Boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-light p-6 text-center">
      <h2 className="text-3xl font-display font-bold text-accent mb-4">Something went wrong!</h2>
      <div className="bg-card/20 p-6 rounded-2xl max-w-2xl border border-accent/20 mb-8 w-full shadow-lg">
        <p className="font-mono text-sm text-red-300 break-words">{error.message || "Unknown error occurred"}</p>
        {error.stack && (
          <pre className="mt-4 text-[10px] text-light/50 text-left overflow-x-auto p-4 bg-black/40 rounded-lg whitespace-pre-wrap">
            {error.stack}
          </pre>
        )}
      </div>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-accent text-primary rounded-xl font-bold hover:scale-105 transition-transform"
      >
        Try reloading
      </button>
    </div>
  );
}
