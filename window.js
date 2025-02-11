function first() {
    let response = confirm('do you want to go in paragraph')

    if (response) {
        location.href = 'windowPara.html'
    }
    else {
        return;
    }
}

function goback() {
    let res = confirm('do you want to back')

    if (res) {
        location.href = 'window.html'
    }
    else {
        return;
    }
}
