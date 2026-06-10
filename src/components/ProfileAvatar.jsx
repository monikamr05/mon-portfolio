import { useState } from "react";
import { personalInfo } from "../data";

export function ProfileAvatar() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative flex justify-center">
      <div
        className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent via-accent-light to-accent-blue opacity-50 blur-md"
        aria-hidden="true"
      />
      <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-card bg-muted shadow-2xl shadow-accent/15 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
        {!hasError ? (
          <img
            src={personalInfo.profileImage}
            alt={`${personalInfo.name} - Professional Profile`}
            className="h-full w-full object-cover object-top"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-4xl font-bold gradient-text sm:text-5xl">
            MMR
          </div>
        )}
      </div>
    </div>
  );
}
