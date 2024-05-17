import { Certificate_info } from "./data/DocuInfo.js";
import { Government_Certificate_info } from "./data/CertificateInfo.js";
//import { ExploreData } from "./data/CertificateInfo.js";



let Certificatehtml = ' ';
Certificate_info.forEach((info,index)=>{
  Certificatehtml +=`
    <div class="docu-container">
      <div class="docu-img">
        <img class="info-image" src="${info.image}" alt="pan-card">
      </div>
      <div class="docu-content">
        <h2>Doc ${index+1}: ${info.name}</h2>
        <p>${info.content}</p>
      </div>
      <button class="Explore-button js-Explore-button" data-info-id="${info.id}" data-info-name="${info.name}">Explore</button>
    </div>
  `; 
});

document.querySelector('.js-middle-grid').innerHTML = Certificatehtml;




document.querySelectorAll('.js-Explore-button').forEach((button)=>{
  button.addEventListener('click',()=>{
    window.location.href = "certificateInfo.html"
    const infoId = button.dataset.infoId;
    saveToStorage(infoId);
    ExploreData();
  });
});

function saveToStorage(infoId){
  localStorage.setItem('id',JSON.stringify(infoId));
}



function ExploreData(){
  const ExploreId = JSON.parse(localStorage.getItem('id'));
  let html = '';
  Government_Certificate_info.forEach((data)=>{
      if(ExploreId === data.id){
          html =`
            <p class="certificate-name">${data.name}</p>
            <p>${data.content}</p>
          `;
      }
  });
  document.querySelector('.js-About-container').innerHTML = html;
}











