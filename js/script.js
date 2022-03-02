const searchPhone = () => {
  const searchField = document.getElementById('searchField');
  const searchText = searchField.value;
  searchField.value = '';
  if (!isNaN(searchText)) {
    alert('Enter Phone Names');
  }
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data))
}
const displaySearchResult = phones => {


  if (phones.length == 0) {
    alert('Your Device is not Available')
  }

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
  // extra start 
  // const
  // extra bottom 
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <div class="row g-0">
    <div class="col-md-4 pt-4 ps-4 pb-4 pe-4">
      <img src="${phone.image}" class="img-fluid rounded-start spec-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <p class="card-text"><small class="text-muted">${phone.brand}</small></p>
        <h5 class="card-title">${phone.name}</h5>
        <p class="card-text"><small class="text-muted">Release Date : ${phone.releaseDate ? phone.releaseDate : 'Not Enough Info'}</small></p>
        <h5>Main Features</h5>
        <p class="card-text">
        <span><b>Chipset :</b> ${phone.mainFeatures.chipSet}</span><br>
        <span><b>Display Size :</b> ${phone.mainFeatures.displaySize}</span><br>
        <span><b>Memory :</b> ${phone.mainFeatures.memory}</span><br>
        <span><b>Storage :</b> ${phone.mainFeatures.storage}</span><br>
        <span><b>Chipset :</b> ${phone.mainFeatures.chipSet}</span><br>
        <span><b>Sensons :</b> ${phone?.mainFeatures?.sensors[0]},${phone?.mainFeatures?.sensors[1]},${phone?.mainFeatures?.sensors[2]},${phone?.mainFeatures?.sensors[3]},${phone?.mainFeatures?.sensors[4]},${phone?.mainFeatures?.sensors[5]}</span>
        </p>
        <h5>Other Features</h5>
        <p class="card-text">
        <span><b>Bluetooth :</b> ${phone?.others?.Bluetooth ? phone?.others?.Bluetooth : 'No Bluetooth'}</span> <br>
  <span><b>GPS :</b> ${phone?.others?.GPS ? phone?.others?.GPS : 'No GPS Found'}</span><br>
    <span><b>NFC :</b> ${phone?.others?.NFC ? phone?.others?.NFC : 'No NFC'}</span><br>
      <span><b>Radio :</b> ${phone?.others?.Radio ? phone?.others?.Radio : 'No Radio'}</span><br>
        <span><b>USB :</b> ${phone?.others?.USB ? phone?.others?.USB : 'No USB'}</span><br>
          <span><b>WLAN :</b> ${phone?.others?.WLAN ? phone?.others?.WLAN : 'No WLAN'}</span>
        </p>
      </div>
    </div>
  </div>
  `
  phoneDetail.appendChild(div);
}