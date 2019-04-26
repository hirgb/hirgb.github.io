(function() {
    window.setTimeout(function(){
        let href = window.location.href
        if (href.indexOf(`https://m.toutiao.com/i`) === 0) {
            return
        }

        let ratio = window.devicePixelRatio

        let stopDefault = function(e) {
            if (e && e.preventDefault) {
                e.preventDefault()
            } else {
                window.event.returnValue = false;
            }
            return false;
        }

        let timeFormat = function(fmt, flag, timestamp) {
            var t = timestamp ? new Date(timestamp) : new Date();
            if (typeof(flag) == 'number') {
                t.setTime(t.getTime() + (flag * 24 * 60 * 60 * 1000));
            }
            var o = {
                "M+": t.getMonth() + 1, //月份
                "d+": t.getDate(), //日
                "h+": t.getHours(), //小时
                "m+": t.getMinutes(), //分
                "s+": t.getSeconds(), //秒
                "q+": Math.floor((t.getMonth() + 3) / 3), //季度
                "S": t.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
            return fmt;
        }

        let findTouchNode = function(path) {
            let result = path.find(i => {
                if (i.nodeName === 'SECTION') {
                    // if (i.nodeName === 'A') {
                        return true
                    }
                })
                return result
            }

            let findAfterEl = function(el, num = 1) {
                let result = el
                for (let i = 0; i < num; i++) {
                    result = result.nextSibling
                }
                return result
            }

            let createSectionEl = function() {
                let s = document.createElement('section') //toutiao
                // let s = document.createElement('a') //yidian
                let ss = {
                    display: 'block',
                    height: 300 / ratio + 'px',
                    width: '100%',
                    padding: 10 / ratio + 'px 0',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                }
                Object.assign(s.style, ss)
                return s
            }

            let createWraperEl = function() {
                let wraper = document.createElement('div')
                Object.assign(wraper.style, {
                    height: '100%',
                    width: '400%',
                })
                return wraper
            }

            let createCardEl = function(imgSrc, title, url, intro) {
                let card = document.createElement('div')
                Object.assign(card.style, {
                    height: '100%',
                    width: '70vw',
                    borderRadius: 12/ratio + 'px',
                    background: 'linear-gradient(45deg, #0288d1 0%, #26c6da 100%)',
                    float: 'left',
                    marginRight: 20 / ratio + 'px',
                    overflow: 'hidden',
                })
                card.innerHTML = `
                <a style="display: block; width: 100%; height: 100%" href="${url}">
                <img src="${imgSrc}" style="display: block; float: left; width: 25%; height: 100%; border: none" />
                <div style="float: left; width: 75%; height: 100%">
                <div style="height: ${80/ratio}px; font-size: ${48/ratio}px; line-height: ${80/ratio}px; color: #fff; padding: 0 ${20/ratio}px; white-space: nowrap; text-overflow: ellipsis;">${title}</div>
                <p style="height: calc(100% - ${80/ratio}px); font-size: ${40/ratio}px; line-height: ${50/ratio}px; color: #ffffffbb; padding: 0 ${20/ratio}px; text-overflow: ellipsis; overflow: hidden">${intro}</p>
                </div>
                </a>
                `
                return card
            }

            let s = createSectionEl()
            let wraper = createWraperEl()

            let terms = window.localStorage.getItem('terms')
            let runtime = window.localStorage.getItem('runtime')
            if (terms && JSON.parse(terms).length) {
                let cards = JSON.parse(terms)
                let cardCount = cards.length
                wraper.style.width = `calc(${cardCount*70 + 70}vw + ${cardCount * 20}px)`
                cards.forEach(i => {
                    let card = createCardEl(i.pic, i.title, i.url, i.summary)
                    wraper.appendChild(card)
                })

            }
            wraper.appendChild(createCardEl('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556249331623&di=44cfd3814c2256afa7c47fbbc18f8de7&imgtype=0&src=http%3A%2F%2Fpic.duowan.com%2Fwebgame%2F1112%2F187277630090%2F187277630102.jpg', timeFormat("yyyy-MM-dd hh:mm:ss", 0, new Date().getTime()), '#', runtime))
            s.appendChild(wraper)
            window.localStorage.removeItem('terms')
            window.localStorage.removeItem('runtime')
            let parentNode = document.querySelector('#pageletListContent > div.list_content')
            parentNode.insertBefore(s, parentNode.lastChild.previousSibling.previousSibling.previousSibling)

    }, 500)
}())
