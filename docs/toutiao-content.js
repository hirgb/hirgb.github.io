(function(){
    let checkLocalStorage = function(){
        if (!window.localStorage) {
            return false
        }
        return true
    }

    if (!checkLocalStorage()) {
        throw new Error('Your browser is not support localStorage')
    }
    
    let t = {
        title: 'aaa',
        content: 'bbb'
    }
    window.localStorage.setItem('terms', JSON.stringify(t))
}())
