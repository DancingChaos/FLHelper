let list = document.getElementById("category-list");
let add = document.getElementById('add-category-btn');

add.addEventListener('click', function() {
    let elements_count = document.getElementById("category-list").getElementsByTagName("li").length;
    if(elements_count <= 25){
        let tag = document.getElementById("category-input").value
        let itemsByTagName = document.getElementsByTagName("li");
        list.innerHTML += '<li>#' + tag + '</li>'
    }
});