// import { Sref,db, set, ref, push, getStorage, uploadBytesResumable, getDownloadURL, onChildAdded } from './firebaseconfig.jsz   '

// var Files = []
// var FileReaders = []

// var imagesDiv = document.getElementById('imagesDiv')
// var imagesLinkArray = []

// var pnameInput = document.getElementById('pnameInput')
// var priceInput = document.getElementById('priceInput')
// var stoclInput = document.getElementById('stoclInput')
// var categoriesInput = document.getElementById('categoriesInput')
// var descriptionInput = document.getElementById('descriptionInput')



// function openFileDialog() {
//     let input = document.createElement('input')
//     input.type = 'file'
//     input.multiple = 'multiple'

//     input.onchange = (e) => {
//         createFilesArray(e.target.files)
//         createImgTags()
//     }
//     input.click()
// }

// function createFilesArray(files) {
//     for (var i = 0; i < files.length; i++) {
//         Files.push(files[i])
//     }
// }
// function createImgTags() {
//     imagesDiv.innerHTML = ''
//     console.log(Files)
//     for (let i = 0; i < Files.length; i++) {
//         FileReaders[i] = new FileReader()
//         console.log(';', FileReaders)
//         FileReaders[i].onload = function () {
//             var img = document.createElement('img')
//             img.id = `imgNo${i}`
//             img.classList.add('productImage')
//             img.src = FileReaders[i].result
//             imagesDiv.append(img)
//         }

//         FileReaders[i].readAsDataURL(Files[i])
//     }
// }

// function isAllImagesUploaded() {
//     return imagesLinkArray.length === Files.length ? true : false
// }

// function uploadAnImage(image, num) {
//     const metaData = {
//         contentType: image.type
//     }

//     const storage = getStorage()

//     const imageAddress = `images/img#${num}-${image.name}`

//     const storageRef = Sref(storage, imageAddress)

//     const uploadTask = uploadBytesResumable(storageRef, image, metaData)

//     uploadTask.on('state_changed',
//         (snapshot) => {
//             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             console.log('Upload is ' + progress + '% done');
//         },
//         (error) => {
//             console.error('error uploading files')
//         },
//         () => {
//             // Handle successful uploads on complete
//             // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                 console.log('File available at', downloadURL);
//                 imagesLinkArray.push(downloadURL)


//                 if (isAllImagesUploaded()) {
//                     const productRef = ref(db, `products`);

//                     const newProductRef = push(productRef);
                    
//                     const product = {
//                         key : newProductRef.key,
//                         name : pnameInput.value,
//                         category : categoriesInput.value,
//                         stock : stoclInput.value,
//                         price : priceInput.value,
//                         description : descriptionInput.value,
//                         images : imagesLinkArray
//                     }
//                     set(ref(db, `products/${newProductRef.key}`), product)
//                         .then(res => {
//                             alert('data added successfully')
//                         })
//                         .catch(err => {
//                             console.error("error", err)
//                         })
//                 }
//             });
//         }
//     );
// }

// document.getElementById('selectImagesBtn').addEventListener('click', openFileDialog)

// document.getElementById('addBtn').addEventListener('click', () => {
//     for (let i = 0; i < Files.length; i++) {
//         uploadAnImage(Files[i], i)
//     }
// })

// let productsRef = ref(db,'products/');
// onChildAdded(productsRef , (snapshot) => {
//     console.log('SNAP' , snapshot)
// })

// //  updating product realtime 
// // ... (Previous code)

// let productsRef = ref(db, 'products/'); // Declare the variable here

// function updateProductTable(product) {
//     let tableBody = document.getElementById('productTableBody');
    
//     // Create a new table row
//     let newRow = document.createElement('tr');
    
//     // Add cells with product information
//     let cellNumber = document.createElement('th');
//     cellNumber.scope = 'row';
//     cellNumber.textContent = product.key;

//     let cellName = document.createElement('td');
//     cellName.textContent = product.name;

//     let cellPrice = document.createElement('td');
//     cellPrice.textContent = product.price;

//     let cellDescription = document.createElement('td');
//     cellDescription.textContent = product.description;

//     // Append cells to the row
//     newRow.appendChild(cellNumber);
//     newRow.appendChild(cellName);
//     newRow.appendChild(cellPrice);
//     newRow.appendChild(cellDescription);

//     // Append the row to the table body
//     tableBody.appendChild(newRow);
// }

// document.getElementById('addBtn').addEventListener('click', () => {
//     for (let i = 0; i < Files.length; i++) {
//         uploadAnImage(Files[i], i);
//     }
// });

// productsRef = ref(db, 'products/');
// onChildAdded(productsRef, (snapshot) => {
//     let product = snapshot.val();
//     updateProductTable(product);
// });




import { Sref, db, set, ref, push, getStorage, uploadBytesResumable, getDownloadURL, onChildAdded } from './firebaseconfig.jsz';

var Files = [];
var FileReaders = [];
var imagesDiv = document.getElementById('imagesDiv');
var imagesLinkArray = [];
var pnameInput = document.getElementById('pnameInput');
var priceInput = document.getElementById('priceInput');
var stoclInput = document.getElementById('stoclInput');
var categoriesInput = document.getElementById('categoriesInput');
var descriptionInput = document.getElementById('descriptionInput');
var productsRef = ref(db, 'products/'); // Declare the variable here

function openFileDialog() {
    let input = document.createElement('input');
    input.type = 'file';
    input.multiple = 'multiple';

    input.onchange = (e) => {
        createFilesArray(e.target.files);
        createImgTags();
    };
    input.click();
}

function createFilesArray(files) {
    for (var i = 0; i < files.length; i++) {
        Files.push(files[i]);
    }
}

function createImgTags() {
    imagesDiv.innerHTML = '';
    for (let i = 0; i < Files.length; i++) {
        FileReaders[i] = new FileReader();
        FileReaders[i].onload = function () {
            var img = document.createElement('img');
            img.id = `imgNo${i}`;
            img.classList.add('productImage');
            img.src = FileReaders[i].result;
            imagesDiv.append(img);
        };

        FileReaders[i].readAsDataURL(Files[i]);
    }
}

function isAllImagesUploaded() {
    return imagesLinkArray.length === Files.length ? true : false;
}

function uploadAnImage(image, num) {
    const metaData = {
        contentType: image.type
    };

    const storage = getStorage();
    const imageAddress = `images/img#${num}-${image.name}`;
    const storageRef = Sref(storage, imageAddress);
    const uploadTask = uploadBytesResumable(storageRef, image, metaData);

    uploadTask.on(
        'state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },
        (error) => {
            console.error('error uploading files');
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                imagesLinkArray.push(downloadURL);

                if (isAllImagesUploaded()) {
                    const productRef = ref(db, `products`);
                    const newProductRef = push(productRef);
                    
                    const product = {
                        key: newProductRef.key,
                        name: pnameInput.value,
                        category: categoriesInput.value,
                        stock: stoclInput.value,
                        price: priceInput.value,
                        description: descriptionInput.value,
                        images: imagesLinkArray
                    };

                    set(ref(db, `products/${newProductRef.key}`), product)
                        .then(res => {
                            alert('data added successfully');
                        })
                        .catch(err => {
                            console.error("error", err);
                        });
                }
            });
        }
    );
}

document.getElementById('selectImagesBtn').addEventListener('click', openFileDialog);

document.getElementById('addBtn').addEventListener('click', () => {
    for (let i = 0; i < Files.length; i++) {
        uploadAnImage(Files[i], i);
    }
});

function updateProductTable(product) {
    let tableBody = document.getElementById('productTableBody');
    let newRow = document.createElement('tr');
    let cellNumber = document.createElement('th');
    cellNumber.scope = 'row';
    cellNumber.textContent = product.key;

    let cellName = document.createElement('td');
    cellName.textContent = product.name;

    let cellPrice = document.createElement('td');
    cellPrice.textContent = product.price;

    let cellDescription = document.createElement('td');
    cellDescription.textContent = product.description;

    newRow.appendChild(cellNumber);
    newRow.appendChild(cellName);
    newRow.appendChild(cellPrice);
    newRow.appendChild(cellDescription);

    tableBody.appendChild(newRow);
}

// Initial load of existing products
onChildAdded(productsRef, (snapshot) => {
    let product = snapshot.val();
    updateProductTable(product);
});
