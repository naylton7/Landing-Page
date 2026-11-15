(() => {
  const dialog = document.getElementById('sampleLightbox');
  const image = document.getElementById('sampleLightboxImage');
  const closeButton = document.getElementById('sampleLightboxClose');
  if (!dialog || !image || !closeButton || typeof dialog.showModal !== 'function') return;

  document.querySelectorAll('.sample-card[data-preview-src]').forEach((card) => {
    card.addEventListener('click', () => {
      image.src = card.dataset.previewSrc;
      image.alt = card.dataset.previewAlt || 'Página ampliada do Guia de Game Design';
      dialog.showModal();
    });
  });

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
  });
})();
