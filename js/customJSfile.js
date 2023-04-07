const parentOfBoxes = document.querySelector(".heroBoxes");
// BOX ITEM
const boxItem = `
<div class=" text-center col-md-6 col-lg-4">
<div class="box p-4">
<div class="top d-flex mb-3 align-items-center justify-content-between">
<h5 class="fw-bold feature_title"></h5>
<i class='fas icon fs-3'></i>
</div>
<p class="p-0 m-0 text-secondary feature_description"></p>
</div>
</div>
`;

// PRINT SPECIFIC BOXES
for (let index = 0; index < 3; index++) {
    parentOfBoxes.innerHTML += boxItem;
}

// ######## FEATURES BOXES ########
// TITLES OF BOXES
const items = document.querySelectorAll(".col");
const feature_title = document.querySelectorAll(".feature_title");
const feature_icon = document.querySelectorAll(".top .icon");
const feature_description = document.querySelectorAll(".feature_description");
const titles = ["كتب متعددة", "يمكنك الطلب", "تحميل مباشر"];
const descriptions = ["يمكنك العثور على كتب متعددة مثل، كتب التنمية البشرية وكتب برمجية وكتب دينية ونستمر بإضافة المزيد من الكتب.", "يتميز الموقع بالتحميل المباشر للكتب عبر زر التحميل، بدون التوجيه التلقائي لمواقع أخرى، ربما تكون مواقع خبيثة.", "لا تقلق إذا لم تجد الكتاب الذي تريده فيمكنك التواصل معي على البريد الإلكتروني في الأسفل، وسأقوم بتوفيره بإذن الله."];
const icons = ["fa-book", "fa-envelope", "fa-rocket"];

for (let index = 0; index < 3; index++) {
    feature_title[index].innerHTML += titles[index];
    feature_description[index].innerText += descriptions[index];
    feature_icon[index].classList.add(icons[index]);
}



const allBooks = document.querySelector(".all-books");

const singleBook = `
<div class="col-sm-6 col-md-4 books">
<div class="my-2">
    <img class="book_image mw-100 w-75" src="" alt="">
</div>
</div>
`;

for (let index = 0; index < 6; index++) {
    allBooks.innerHTML += singleBook;
}


const link = `https://jsonplaceholder.typicode.com/photos`;
const book_image = document.querySelectorAll(".book_image");



book_image.forEach((image)=>{
    fetch(link).then((resolve) => {
        return resolve.json();
    }).then((result) => {
        // console.log(result[0]);
        image.src = result[200].url;
    })
})