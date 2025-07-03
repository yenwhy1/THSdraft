const config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'U0kwMktEZlp0TU9uVDVPVjNRYTJ6R2JVZEI2c1Y2a3N5RkViSGlSYw=='
};

const countrySelect = document.querySelector('#country');
const stateSelect = document.querySelector('#province');
const citySelect = document.querySelector('#city');
const barangaySelect = document.querySelector('#barangay');

const fallbackCities = {
  PH: {
    AKL: {
      "Altavas": [
        "Cabangila", "Cabugao", "Catmon", "Dalipdip", "Ginictan", "Linayasan", "Lumaynay", "Lupo", "Man-up", "Odiong", "Poblacion", "Quinasay-an", "Talon", "Tibiao"
      ],
      "Balete": [
        "Aranas", "Arcangel", "Calizo", "Cortes", "Feliciano", "Fulgencio", "Guanko", "Morales", "Oquendo", "Poblacion"
      ],
      "Banga": [
        "Agbanawan", "Bacan", "Badiangan", "Cerrudo", "Cupang", "Daguitan", "Daja Norte", "Daja Sur", "Dingle", "Jumarap", "Lapnag", "Libas", "Linabuan Sur", "Mambog", "Mangan", "Muguing", "Pagsanghan", "Palale", "Poblacion", "Polo", "Polocate", "San Isidro", "Sibalew", "Sigcay", "Taba-ao", "Tabayon", "Tinapuay", "Torralba", "Ugsod", "Venturanza"
      ],
      "Batan": [
        "Ambolong", "Angas", "Bay-ang", "Caiyang", "Cabugao", "Camaligan", "Camanci", "Ipil", "Lalab", "Lupit", "Magpag-ong", "Magubahay", "Mambuquiao", "Man-up", "Mandong", "Napti", "Palay", "Poblacion", "Songcolan", "Tabon"
      ],
      "Buruanga": [
        "Alegria", "Bagongbayan", "Balusbos", "Bel-is", "Cabugan", "El Progreso", "Habana", "Katipunan", "Mayapay", "Nazareth", "Panilongan", "Poblacion", "Santander", "Tag-osip", "Tigum"
      ],
      "Ibajay": [
        "Agbago", "Agdugayan", "Antipolo", "Aparicio", "Aquino", "Aslum", "Bagacay", "Batuan", "Buenavista", "Bugtongbato", "Cabugao", "Capilijan", "Colongcolong", "Laguinbanwa", "Mabusao", "Malindog", "Maloco", "Mina-a", "Monlaque", "Naile", "Naisud", "Naligusan", "Ondoy", "Poblacion", "Polo", "Regador", "Rivera", "Rizal", "San Isidro", "San Jose", "Sta. Cruz", "Tagbaya", "Tul-ang", "Unat", "Yawan"
      ],
      "Kalibo": [
        "Andagaw", "Bachaw Norte", "Bachaw Sur", "Briones", "Buswang New", "Buswang Old", "Caano", "Estancia", "Linabuan Norte", "Mabilo", "Mobo", "Nalook", "Poblacion", "Pook", "Tigayon", "Tinigaw"
      ],
      "Lezo": [
        "Agcawilan", "Bagto", "Bugasongan", "Carugdog", "Cogon", "Ibao", "Mina", "Poblacion", "Sta. Cruz", "Sta. Cruz Biga-a", "Silakat Nonok", "Tayhawan"
      ],
      "Libacao": [
        "Agmailig", "Alfonso XII", "Batobato", "Bonza", "Calacabian", "Calamcan", "Can-awan", "Casit-an", "Dalagsaan", "Guadalupe", "Janlud", "Julita", "Luctoga", "Magugba", "Manika", "Ogsip", "Ortega", "Oyang", "Pampango", "Pinonoy", "Poblacion", "Rivera", "Rosal", "Sibalew"
      ],
      "Madalag": [
        "Alaminos", "Alas-as", "Bacyang", "Balactasan", "Cabangahan", "Cabilawan", "Catabana", "Dit-Ana", "Galicia", "Guinatu-an", "Logohon", "Mamba", "Maria Cristina", "Medina", "Mercedes", "Napnot", "Pang-Itan", "Paningayan", "Panipiason", "Poblacion", "San Jose", "Singay", "Talangban", "Talimagao", "Tigbawan"
      ],
      "Makato": [
        "Agbalogo", "Aglucay", "Alibagon", "Bagong Barrio", "Baybay", "Cabatanga", "Cajilo", "Calangcang", "Calimbajan", "Castillo", "Cayangwan", "Dumga", "Libang", "Mantiguib", "Poblacion", "Tibiawan", "Tina", "Tugas"
      ],
      "Malay": [
        "Argao", "Balabag", "Balusbus", "Cabulihan", "Caticlan", "Cogon", "Cubay Norte", "Cubay Sur", "Dumlog", "Manoc-Manoc", "Naasug", "Nabaoy", "Napaan", "Poblacion", "San Viray", "Yapak", "Motag"
      ],
      "Malinao": [
        "Banaybanay", "Biga-a", "Bulabud", "Cabayugan", "Capataga", "Cogon", "Dangcalan", "Kinalangay Nuevo", "Kinalangay Viejo", "Lilo-an", "Malandayon", "Manhanip", "Navitas", "Osman", "Poblacion", "Rosario", "San Dimas", "San Ramon", "San Roque", "Sipac", "Sugnod", "Tambuan", "Tigpalas"
      ],
      "Nabas": [
        "Alimbo Baybay", "Buenasuerte", "Buenafortuna", "Buenavista", "Gibon", "Habana", "Laserna", "Libertad", "Magallanes", "Matabana", "Nagustan", "Pawa", "Pinatuad", "Poblacion", "Rizal", "Solido", "Tagororoc", "Toledo", "Unidos", "Union"
      ],
      "New Washington": [
        "Candelaria", "Cawayan", "Dumaguit", "Fatima", "Guinbaliwan", "Jalas", "Jugas", "Lawa-an", "Mabilo", "Mataphao", "Ochando", "Pinamuk-an", "Poblacion", "Polo", "Puis", "Tambak"
      ],
      "Numancia": [
        "Albasan", "Aliputos", "Badio", "Bubog", "Bulwang", "Camanci Norte", "Camanci Sur", "Dongon East", "Dongon West", "Joyao-joyao", "Laguinbanua East", "Laguinbanua West", "Marianos", "Navitas", "Poblacion", "Pusiw", "Tabangka"
      ],
      "Tangalan": [
        "Afga", "Baybay", "Dapdap", "Dumatad", "Jawili", "Lanipga", "Napatag", "Panayakan", "Poblacion", "Pudiot", "Tagas", "Tamalagon", "Tamokoe", "Tondog", "Vivo"
      ]
    }
  }
};


function loadCountries() {
    fetch(config.cUrl, {
        headers: { "X-CSCAPI-KEY": config.ckey }
    })
    .then(res => res.json())
    .then(data => {
        data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.iso2;
            option.textContent = country.name;
            countrySelect.appendChild(option);
        });
    })
    .catch(err => console.error('Error loading countries:', err));
}

function loadStates() {
    const countryCode = countrySelect.value;
    stateSelect.innerHTML = '<option value="">Select Province</option>';
    citySelect.innerHTML = '<option value="">Select City</option>';
    barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
    stateSelect.disabled = true;
    citySelect.disabled = true;
    barangaySelect.disabled = true;

    if (!countryCode) return;

    fetch(`${config.cUrl}/${countryCode}/states`, {
        headers: { "X-CSCAPI-KEY": config.ckey }
    })
    .then(res => res.json())
    .then(data => {
        if (data.length === 0) return;

        stateSelect.disabled = false;

        data.forEach(state => {
            const option = document.createElement('option');
            option.value = state.iso2;
            option.textContent = state.name;
            stateSelect.appendChild(option);
        });
    })
    .catch(err => console.error('Error loading states:', err));
}

function loadCities() {
    const countryCode = countrySelect.value;
    const stateCode = stateSelect.value;
    citySelect.innerHTML = '<option value="">Select City</option>';
    barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
    citySelect.disabled = true;
    barangaySelect.disabled = true;

    if (!countryCode || !stateCode) return;

    fetch(`${config.cUrl}/${countryCode}/states/${stateCode}/cities`, {
        headers: { "X-CSCAPI-KEY": config.ckey }
    })
    .then(res => res.json())
    .then(data => {
        let cities = data;

        // Use fallback if empty or if Aklan
        if (!Array.isArray(cities) || cities.length === 0 || (countryCode === 'PH' && stateCode === 'AKL')) {
            console.warn('Using fallback cities for PH > AKL');
            const aklanCities = fallbackCities?.[countryCode]?.[stateCode];
            if (aklanCities) {
                cities = Object.keys(aklanCities).map(city => ({ name: city }));
            }
        }

        if (!cities || cities.length === 0) return;

        citySelect.disabled = false;

        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.name;
            option.textContent = city.name;
            citySelect.appendChild(option);
        });
    })
    .catch(err => console.error('Error loading cities:', err));
}

function loadBarangays() {
    const countryCode = countrySelect.value;
    const stateCode = stateSelect.value;
    const cityName = citySelect.value;

    barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
    barangaySelect.disabled = true;

    if (countryCode === 'PH' && stateCode === 'AKL') {
        const barangays = fallbackCities?.[countryCode]?.[stateCode]?.[cityName];
        if (Array.isArray(barangays)) {
            barangaySelect.disabled = false;
            barangays.forEach(brgy => {
                const option = document.createElement('option');
                option.value = brgy;
                option.textContent = brgy;
                barangaySelect.appendChild(option);
            });
        }
    }


}

window.addEventListener('load', loadCountries);
countrySelect.addEventListener('change', loadStates);
stateSelect.addEventListener('change', loadCities);
citySelect.addEventListener('change', loadBarangays);