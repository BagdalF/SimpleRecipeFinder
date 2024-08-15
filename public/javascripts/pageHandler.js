function changeTopNumeration(currentPage, pages) {
    console.log('funcionou');
    let order;

    if (pages < 5) {
        for (let i = 5; i > pages; i--) {
            let button = document.getElementsByClassName('top-pagination-button')[i-1];
            button.remove()
        }
        for (let i = 1; i <= pages; i++) {
            order += i;
        }
    }
    else if ((currentPage+1) >= pages){
        order = [pages-4, pages-3 , pages-2, pages-1, pages]
    } else if (currentPage > 3){
        order = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
    } else {
        order = [1, 2, 3, 4, 5]
    }

    for (let i = 0; i < order.length; i++) {
        let button = document.getElementsByClassName('top-pagination-button')[i];
        button.setAttribute("value", order[i]);
        button.innerText = order[i];

        if (button.getAttribute("value", order[i]) == currentPage) {
            button.setAttribute("class", "top-pagination-button active-button");
            button.disabled = true;
        }
    }
}

function changeBottomNumeration(currentPage, pages) {
    console.log('funcionou');
    let order;

    if (pages < 5) {
        for (let i = 5; i > pages; i--) {
            let button = document.getElementsByClassName('bottom-pagination-button')[i-1];
            button.remove()
        }
        for (let i = 1; i <= pages; i++) {
            order += i;
        }
    }
    else if ((currentPage+1) >= pages){
        order = [pages-4, pages-3 , pages-2, pages-1, pages]
    } else if (currentPage > 3){
        order = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
    } else {
        order = [1, 2, 3, 4, 5]
    }

    for (let i = 0; i < order.length; i++) {
        let button = document.getElementsByClassName('bottom-pagination-button')[i];
        button.setAttribute("value", order[i]);
        button.innerText = order[i];

        if (button.getAttribute("value", order[i]) == currentPage) {
            button.setAttribute("class", "bottom-pagination-button active-button");
            button.disabled = true;
        }
    }
}