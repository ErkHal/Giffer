'use strict'

const getGIF = (evt) => {

  console.log('clicked');
  const whatAiNeedRiteNao = document.querySelector('#muhFeels').value;
  const howManyGifs = document.querySelector('#howMany').value;

  if(howManyGifs > 50) {
    howManyGifs = 50;
  }

  console.log(howManyGifs);
  for(var i = 0; i < howManyGifs; i++) {
  //Get a GIF with the wanted search word from giphy.com
  fetch('http://api.giphy.com/v1/gifs/random?api_key=85f97d35cf164d89b98dbfd8d6557591&tag=' +
          whatAiNeedRiteNao + '&rating=g').then((response) => {
            return response.json();
          }).then((json) => {

              const listItem = document.createElement("li");
              const linkToImage = document.createElement("a");
              const image = document.createElement("IMG");
              image.src = json.data.image_url;
              linkToImage.href = json.data.image_url;
              image.classList.add("gridImage");

              linkToImage.append(image);
              listItem.append(linkToImage);
              document.querySelector("#gifGrid").append(listItem);

          });
        }
      }

document.querySelector('#getMeSumGifs').addEventListener('click', getGIF);
