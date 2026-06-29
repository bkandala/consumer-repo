/**
 * custom-hero — a block that only exists in this consumer repo.
 * Shared blocks (cards, carousel, etc.) are loaded from the libs repo automatically.
 */
export default function decorate(block) {
  const [textCol, imageCol] = [...block.children[0].children];

  block.innerHTML = '';

  const content = document.createElement('div');
  content.className = 'custom-hero-content';
  content.append(...textCol.childNodes);

  const visual = document.createElement('div');
  visual.className = 'custom-hero-visual';
  if (imageCol) visual.append(...imageCol.childNodes);

  block.append(content, visual);
}
