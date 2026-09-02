// Service worker do Polski dla Ciebie
// Estratégia: cache-first para o app shell, com fallback de rede.
// Isso deixa o app funcionando offline depois da primeira visita.

const CACHE_NAME = 'polski-dla-ciebie-v1';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Só cuidamos de requisições GET; o resto (ex: nenhuma no nosso caso) segue direto pra rede.
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          // Guarda uma cópia no cache para a próxima vez (ex: fontes do Google Fonts).
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          // Sem rede e sem cache: se for navegação de página, devolve o app shell.
          if (request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});
