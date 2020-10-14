//on load, populate poemlist w/poems

function randomPoemList() {
    const poemlist = document.querySelector('#poemlist');
    fetch('./poems/dictionary.txt')
        .then((poemlist) => {
            return poemlist.text();
        })
        .then((poemlist) => {
            const splitpoems = poemlist.split('BREAK')
            console.log(splitpoems)
            let displayArray = []
            for (let x = 0; x < 5; x++) {
                if (x % 2 == 0) {
                    displayArray.push(`<a href="${splitpoems[x]} class="list-group-item list-group-item-info">${splitpoems[x]}</a>`)
                }
                else {
                    displayArray.push(`<a href="${splitpoems[x]} class="list-group-item list-group-item-light">${splitpoems[x]}></a>`)
                }
            }
            return displayArray
        }).then((displayArray)=>{
            poemlist.innerHTML = displayArray.join('');
        })

}

window.addEventListener('DOMContentLoaded', function () {

    randomPoemList();
})