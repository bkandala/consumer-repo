/**
 * Consumer repo bootstrap.
 *
 * LIBS_URL points to the shared libs repo on AEM Live.
 * All shared blocks (header, footer, cards, carousel, etc.) load from there.
 * Only blocks listed in /blocks/ here are custom to this site.
 */

// ---- Update this URL when promoting to stage/prod ----
const LIBS_URL = (() => {
  const { host } = window.location;
  // Local dev: run the libs repo on http://localhost:6456 via `aem up` in that repo
  if (host.includes('localhost')) return 'http://localhost:6456/libs';
  // Stage: preview URL of the libs repo
  if (host.includes('.aem.page') || host.includes('.hlx.page')) return 'https://main--libs-repo--<your-org>.aem.page/libs';
  // Prod / live
  return 'https://main--libs-repo--<your-org>.aem.live/libs';
})();

// Dynamically import loadPage from the shared libs repo
const { loadPage } = await import(`${LIBS_URL}/scripts/scripts.js`);

await loadPage({
  libsUrl: LIBS_URL,
  codeRoot: '/',            // this repo's own code root for custom blocks
  locale: { ietf: 'en-US' },

  // externalLibs lets you register additional per-block overrides if needed:
  // externalLibs: [{ base: 'https://...', blocks: ['my-custom-block'] }],
});
