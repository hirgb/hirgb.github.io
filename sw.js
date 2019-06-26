const version = '1.0'
const cacheName = 'hirgb-cache'

this.addEventListener('install', (e)=>{
    console.log('install success');
})

this.addEventListener('activate', (e)=>{
    console.log('activate');
})

this.addEventListener('fetch', (e)=>{
    e.respondWith(
        caches.open(cacheName).then((cache)=>{
            return cache.match(e.request.url)
        }).then((response)=>{
            if (response) {
                console.log(`cache: ${e.request.url}`);
                return response
            }
            console.log(`net: ${e.request.url}`);
            return fetch(e.request)
        })
    )
})
