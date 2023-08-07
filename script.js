let imagesData = [
    {
        photo: 'images/img1.webp',
        title: 'Crack the code',
        description: '...of British banter while sipping tea and munching biscuits! Learn English with a splash of royalty and a dash of humor. Jolly good show!'
    },
    {
        photo: 'images/img2.webp',
        title: 'Fancy some fun',
        description: "...with your language learning? Dive into the world of British culture and idioms - it's tea-rific!"
    },
    {
        photo: 'images/img3.webp',
        title: 'Why settle',
        description: "...for ordinary when you can sound extraordinary? Learn English the British way, and you'll be chuffed with your language skills!"
    },
    {
        photo: 'images/img4.webp',
        title: 'Learning English',
        description: '...has never been this delightful! Immerse yourself in the charm of Britain and conquer the language with a posh twist and loads of laughs.'
    }

]

let currentPhoto = 0;

$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);

imagesData.forEach((element, index) => {
    $('.thumbnail-container').append(`<div class="th-box"><div class="hover-box">
    <p>${element.title}</p>
    </div>
    <img class="thumbnail-img" data-number=${index} src=${element.photo}></div>`)

});

var allImages = $('img.thumbnail-img')
var allImagesArr = [].slice.call(allImages)

const removeAllActiveThumbnail = () => {
    for (let index = 0; index < allImagesArr.length; index++) {
        allImagesArr[index]?.classList.remove("border");;
    }
}

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber]?.photo);
    $('#photo-title').text(imagesData[photoNumber]?.title);
    $('#photo-description').text(imagesData[photoNumber]?.description);

    allImagesArr[currentPhoto]?.classList.add("border")
    removeAllActiveThumbnail()
    allImagesArr[currentPhoto]?.classList.add("border")



}

loadPhoto(currentPhoto);

$('.arrow-right').click((event) => {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    }
    else if (currentPhoto = imagesData.length) {
        currentPhoto = 0;
        loadPhoto(currentPhoto);
    }
})


$('.arrow-left').click(() => {
    if (currentPhoto === 0) {
        currentPhoto = (imagesData.length - 1);
        loadPhoto(currentPhoto);
    }

    else if (currentPhoto < (imagesData.length)) {
        currentPhoto--;
        loadPhoto(currentPhoto);

        if (currentPhoto < 0) {
            currentPhoto = (imagesData.length - 1);
            loadPhoto(currentPhoto)
        }
    }
})

const handleclick = (event) => {
    let num = $(event.target).attr('data-number');
    currentPhoto = num;
    loadPhoto(currentPhoto);
}

$('.thumbnail-img').on('click', handleclick)



