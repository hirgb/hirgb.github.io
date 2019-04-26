(function() {
    let href = window.location.href
    if (href.indexOf(`https://m.toutiao.com/i`) !== 0) {
        return
    }

    let checkLocalStorage = function() {
        if (!window.localStorage) {
            return false
        }
        return true
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

    let startTime = timeFormat("yyyy-MM-dd hh:mm:ss", 0, new Date().getTime())

    let getCard = function(query) {
        window.fetch(`https://bridge.sanjiaoshou.net/web/term/getcardcommon`,
            {
                body: JSON.stringify({query}), // must match 'Content-Type' header
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'user-agent': 'Mozilla/4.0 MDN Example',
                    'content-type': 'application/json'
                },
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                referrer: 'no-referrer', // *client, no-referrer
            }
        ).then(function(response) {
            response.json().then((res) => {
                let data123 = res.data
                if (data123.rtnCode === '1') { //failed
                    window.localStorage.removeItem('terms')
                    return
                }
                terms = data123.data.result_list[0].term_list
                customInfoList = data123.data.result_list[0].custom_info_list

                terms.concat(customInfoList)

                let total = 0

                terms.forEach((i, index) => {
                    let term
                    if (i.ner === 'FILM' && i.film_list) {
                        term = {
                            title: i.film_list[0].name,
                            url: i.film_list[0].url,
                            pic: i.film_list[0].posturl,
                            ner: i.ner,
                            summary: i.film_list[0].summary,
                        }
                    } else if (i.ner === 'PERSON_NAME' && i.person_list) {
                        term = {
                            title: i.person_list[0].name,
                            url: i.person_list[0].url,
                            pic: i.person_list[0].display_img,
                            ner: i.ner,
                            summary: i.person_list[0].summary,
                        }
                    } else if (i.source = 'TRIO_SEARCH' && i.title) {
                        term = {
                            title: i.title,
                            url: i.url,
                            pic: i.img_url || i.thumbUrl,
                            ner: 'TRIO_SEARCH',
                            summary: '',
                        }
                    }

                    if (term) {
                        total ++
                        if (index === 0) {
                            let terms = [term]
                            window.localStorage.setItem('terms', JSON.stringify(terms))
                        } else {
                            let terms = window.localStorage.getItem('terms')
                            if (terms) {
                                terms = JSON.parse(terms)
                                exist = terms.some(i => i.title === term.title)
                                if (!exist) {
                                    terms.push(term)
                                    window.localStorage.setItem('terms', JSON.stringify(terms))
                                }
                            } else {
                                let terms = [term]
                                window.localStorage.setItem('terms', JSON.stringify(terms))
                            }
                        }
                    }
                })
                let endTime = timeFormat("yyyy-MM-dd hh:mm:ss", 0, new Date().getTime())
                let pageIn = window.localStorage.getItem('pageIn')
                window.localStorage.setItem('runtime', `进入：${pageIn}，开始：${startTime}，结束：${endTime}。共加载${total}条。`)
            })
        })
    }

    if (!checkLocalStorage()) {
        throw new Error('Your browser is not support localStorage')
    }

    let t = []
    window.localStorage.setItem('terms', JSON.stringify(t))

    let content = document.querySelector('#article_content').innerText
    // let content = document.querySelector('#imedia-article').innerText
    getCard(content.replace(/\n/g, '').slice(0, 150))
}())
