const version = '1.0'
const cacheName = 'hirgb-cache'

this.addEventListener('fetch', (e) => {
    let url = e.request.url
    e.respondWith(
        caches.open(cacheName)
        .then((cache) => {
            return cache.match(url)
        })
        .then(res => {
            if (res) {
                return res
            } else {
                let purl = parse(url)
                if (purl.pathname && purl.pathname.startsWith('/img')) {
                    caches.open(cacheName)
                    .then(cache => {
                        cache.add(url)
                    })
                    return fetch(url)
                } else {
                    return fetch(e.request)
                }
            }
        })
    )
})

function parse(url) {
    let urlParseRE = /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/;

    let matches = urlParseRE.exec(url || "") || [];

    return {
        href: matches[0] || "",
        hrefNoHash: matches[1] || "",
        hrefNoSearch: matches[2] || "",
        domain: matches[3] || "",
        protocol: matches[4] || "",
        doubleSlash: matches[5] || "",
        authority: matches[6] || "",
        username: matches[8] || "",
        password: matches[9] || "",
        host: matches[10] || "",
        hostname: matches[11] || "",
        port: matches[12] || "",
        pathname: matches[13] || "",
        directory: matches[14] || "",
        filename: matches[15] || "",
        search: matches[16] || "",
        hash: matches[17] || ""
    };
};
