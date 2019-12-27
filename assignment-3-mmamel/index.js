/*
 * Write your JS code in this file.  Don't forget to include your name and
 * @oregonstate.edu email address below.
 *
 * Name: Melvin Ma
 * Email: mamel@oregonstate.edu
 */
window.onload=function(){
  var updateButton = document.getElementById("filter-update-button");
  updateButton.addEventListener("click", function(){updatePosts()});
  var sellButton = document.getElementById("sell-something-button");
  sellButton.addEventListener("click", function(){openModal()});
}
function openModal(){
  var modal = document.getElementById("sell-something-modal");
  var backdrop = document.getElementById("modal-backdrop");
  var close = document.getElementById("modal-close");
  close.addEventListener("click", function(){closeModal(modal, backdrop)});
  modal.classList.remove("hidden");
  backdrop.classList.remove("hidden");
  var createPost = document.getElementById("modal-accept");
  createPost.addEventListener("click", function(){addPost(modal, backdrop)});
}
function addPost(modal, backdrop){
  var textField = document.getElementById("post-text-input");
  var photoField = document.getElementById("post-photo-input");
  var priceField = document.getElementById("post-price-input");
  var cityField = document.getElementById("post-city-input");
  var conditionN = document.getElementById("post-condition-new");
  var conditionE = document.getElementById("post-condition-excellent");
  var conditionG = document.getElementById("post-condition-good");
  var conditionF = document.getElementById("post-condition-fair");
  var conditionP = document.getElementById("post-condition-poor");
  var conditionValue;
  if(conditionN.checked == true){
    conditionValue = conditionN.value;
  }
  else if(conditionE.checked == true){
    conditionValue = conditionE.value;
  }
  else if(conditionG.checked == true){
    conditionValue = conditionG.value;
  }
  else if(conditionF.checked == true){
    conditionValue = conditionF.value;
  }
  else if(conditionP.checked == true){
    conditionValue = conditionP.value;
  }
  if (textField.value == '' || photoField.value == '' || priceField.value == '' || cityField.value == ''){
    alert("Please complete all fields");
  }
  else{
    var link = document.createElement('a');
    var itemDescription = document.createTextNode(textField.value);
    link.setAttribute('a', '#');
    link.classList.add('post-title');
    link.appendChild(itemDescription);
    var spanPrice = document.createElement('span');
    spanPrice.classList.add('post-price');
    var price = document.createTextNode(priceField.value);
    spanPrice.appendChild(price);
    var spanCity = document.createElement('span');
    spanCity.classList.add('post-city');
    var city = document.createTextNode(cityField.value);
    spanCity.appendChild(city);
    var postInfoContainer = document.createElement('div')
    postInfoContainer.appendChild(link);
    postInfoContainer.appendChild(spanPrice);
    postInfoContainer.appendChild(spanCity);
    var postImageContainer = document.createElement('div')
    var img = document.createElement('img');
    img.src = photoField.value;
    img.setAttribute('alt', textField.value);
    postImageContainer.appendChild(img);
    var postContents = document.createElement('div');
    postContents.classList.add('post-contents');
    postContents.appendChild(img);
    postContents.appendChild(postInfoContainer);
    var post = document.createElement('div')
    post.classList.add('post');
    post.setAttribute('data-price', priceField.value)
    post.setAttribute('data-city', cityField.value);
    post.setAttribute('data-condition', conditionValue);
    post.appendChild(postContents);
    var posts = document.getElementById('posts')
    posts.appendChild(post);
    closeModal(modal, backdrop);
  }
}
function closeModal(modal, backdrop){
  var textField = document.getElementById("post-text-input");
  var photoField = document.getElementById("post-photo-input");
  var priceField = document.getElementById("post-price-input");
  var cityField = document.getElementById("post-city-input");
  var condtionField = document.getElementById("post-condition-new");
  console.log(textField.textContent);

  textField.value = '';
  photoField.value = '';
  priceField.value = '';
  cityField.value = '';
  condtionField.checked = true;
  modal.classList.add("hidden");
  backdrop.classList.add("hidden");
}
function updatePosts(){
  var text = document.getElementById("filter-text");
  var priceMin = document.getElementById("filter-min-price");
  var priceMax = document.getElementById("filter-max-price");
  var city = document.getElementById("filter-city");
  var conditionNew = document.getElementById("filter-condition-new");
  var conditionExcellent = document.getElementById("filter-condition-excellent");
  var conditionGood = document.getElementById("filter-condition-good");
  var conditionFair = document.getElementById("filter-condition-fair");
  var conditionPoor = document.getElementById("filter-condition-poor");
  var notEmpty;
  if(conditionNew.checked == false && conditionExcellent.checked == false && conditionGood.checked == false &&conditionFair.checked == false &&conditionPoor.checked == false){
    notEmpty = false;
  }
  else{
    notEmpty = true;
  }
  var results = document.getElementsByClassName("post");
  var i =0;
  while(i != results.length){
    if((priceMin.value != '' && parseInt(results[i].dataset.price) < parseInt(priceMin.value))||(priceMax.value != '' && parseInt(results[i].dataset.price) > parseInt(priceMax.value))){
      results[i].remove();
    }

    else if(city.options[city.selectedIndex].value != '' && results[i].dataset.city != city.options[city.selectedIndex].value){
      results[i].remove();
    }
    else if(notEmpty == true && conditionNew.checked == false && results[i].dataset.condition == 'new'){
      results[i].remove();
    }
    else if(conditionExcellent.checked == false && notEmpty == true && results[i].dataset.condition == 'excellent'){
      results[i].remove();
    }
    else if(conditionGood.checked == false && notEmpty == true && results[i].dataset.condition == 'good'){
      results[i].remove();
    }
    else if(conditionFair.checked == false && notEmpty == true && results[i].dataset.condition == 'fair'){
      results[i].remove();
    }
    else if(conditionPoor.checked == false && notEmpty == true && results[i].dataset.condition == 'poor'){
      results[i].remove();
    }
    else if(results[i].textContent.includes(text.value.toLowerCase()) == false){
      // results[i].classList.add('remove');
      console.log(i)
      console.log(results[i])
      results[i].remove();
    }
    else{
      i++;
    }
  }


  // var remove = document.getElementsByClassName("remove");
  // for(var i=0; remove.length; i++){
  //
  // }

}
