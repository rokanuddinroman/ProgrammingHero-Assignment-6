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
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card p-4">
                    <img src="${phone.image}" class="card-img-top" style="width:100%" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">${phone.brand}</p>
                    </div>
                    <button onclick="loadPhoneSpecs()">Specification</button>
                </div>
        `;
        searchResult.appendChild(div)
    })
}
loadPhoneSpecs()
const loadPhoneSpecs = slugId => {
    const url = `https://openapi.programming-hero.com/api/phone/${slugId}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}