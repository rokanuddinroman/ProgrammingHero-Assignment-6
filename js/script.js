const searchPhone = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}
const displaySearchResult = phones => {
    // clear detail after search 
    const phoneDetail = document.getElementById('phoneDetail');
    phoneDetail.textContent = '';
    // main 
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    phones.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                    <img src="${phone.image}" class="card-img-top pt-4 ps-4 pe-4" style="width:100%" alt="...">
                    <div class="card-body ps-4">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">${phone.brand}</p>
                    </div>
                    <div class="ps-4 pe-4 pb-4">
                        <button class="spec-btn" onclick="loadPhoneSpecs('${phone.slug}');">Specification</button>
                    </div>
                </div>
        `;
        searchResult.appendChild(div)
    })
}
const loadPhoneSpecs = slug => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneSpecs(data.data));
};
const displayPhoneSpecs = phone => {
    console.log(phone)
    const phoneDetail = document.getElementById('phoneDetail');
    phoneDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
  <div class="row g-0 mt-4">
    <div class="col-md-4 pt-4 ps-4 pb-4">
      <img src="${phone.image}" class="img-fluid rounded-start spec-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <p class="card-text"><small class="text-muted">${phone.brand}</small></p>
        <h5 class="card-title">${phone.name}</h5>
        <p class="card-text"><small class="text-muted">Release Date : ${phone.releaseDate}</small></p>
        <h5>Main Features</h5>
        <p class="card-text">
        <span><b>Chipset :</b> ${phone.mainFeatures.chipSet}</span><br>
        <span><b>Display Size :</b> ${phone.mainFeatures.displaySize}</span><br>
        <span><b>Memory :</b> ${phone.mainFeatures.memory}</span><br>
        <span><b>Storage :</b> ${phone.mainFeatures.storage}</span><br>
        <span><b>Chipset :</b> ${phone.mainFeatures.chipSet}</span>
        </p>
        <h5>Other Features</h5>
      </div>
    </div>
  </div>
    `
    phoneDetail.appendChild(div);
}