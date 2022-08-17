const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryEl = document.querySelector('.gallery');

// const makeGallery = images => {
//   return images.map(image => {
//     const imageItemEl = document.createElement('li');
//     imageItemEl.classList.add('gallery-item');

//     const imageImgEl = document.createElement('img');
//     imageImgEl.classList.add('gallery-img');
//     imageImgEl.src = image.url;
//     imageImgEl.alt = image.alt;

//     imageItemEl.appendChild(imageImgEl);  

//     return imageItemEl;
//   })
// }

// const elements = makeGallery(images);
// galleryEl.append(...elements);

// console.log(galleryEl);

for(const image of images) {
  const galleryEl = document.querySelector('.gallery');
  galleryEl.insertAdjacentHTML('afterbegin', `<li class="gallery-item"> <img class="gallery-img" src = '${image.url}' alt = '${image.alt}' ></img> </li>`);

}
 