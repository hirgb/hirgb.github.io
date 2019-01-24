let engines = {
    google: 'https://www.google.com/search?q=',
    baidu: 'https://www.baidu.com/s?wd=',
    bing: 'https://cn.bing.com/search?q=',
    wiki: 'https://zh.wikipedia.org/wiki/',
    youdao: 'http://youdao.com/w/',
    github: 'https://github.com/search?q=',
    linux: 'http://linux.51yip.com/search/',
    image: 'https://www.picsearch.com/index.cgi?q=',
    music: 'https://www.tikitiki.cn/search.do?page=1&type=2&keyword=',
    video: 'https://so.youku.com/search_video/',
    doc: 'https://www.docin.com/search.do?nkey=',
    icon: 'https://www.iconfinder.com/search/?price=free&q=',
    pan: 'http://pansou.com/?q=',
    // stock: ''
}

function getEngine(e, q) {
    let engine = e
    let sep
    if (q.includes(':')) {
        sep = ':'
    } else if (q.includes('：')) {
        sep = '：'
    } else {
        return {engine, q}
    }

    let key = q.split(sep)[0]
    if (key in engines) {
        engine = engines[key]
        q = q.replace(`${key}${sep}`, '').trim()
    }
    return {engine, q}

}

export {
    engines,
    getEngine
}
