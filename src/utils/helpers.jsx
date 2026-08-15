export function isPlaceholderLink(url) {
  return !url || url.startsWith('[') || url === '#';
}

export function ExternalLink({ href, children, className = '', showIcon = true }) {
  const placeholder = isPlaceholderLink(href);

  if (placeholder) {
    return (
      <span
        className={`cursor-not-allowed opacity-50 ${className}`}
        title="Update this link in src/data/"
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 transition-colors hover:text-accent ${className}`}
    >
      {children}
      {showIcon && (
        <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
    </a>
  );
}

export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
