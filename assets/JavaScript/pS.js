function searchAndScroll() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var countrySelect = document.getElementById("countrySelect");
    var selectedCountry = countrySelect.value;

    var sections = document.getElementsByTagName("section");

    for (var i = 0; i < sections.length; i++) {
        var sectionId = sections[i].id;
        var header = sections[i].getElementsByTagName("h2")[0];
        var headerText = header.textContent.toLowerCase();

        if (headerText.includes(searchTerm) && sectionId === selectedCountry) {
            sections[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}