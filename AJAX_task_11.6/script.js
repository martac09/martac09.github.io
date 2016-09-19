var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(function() {
	searchCountries();
});
function searchCountries() {
	var countryName = $('#country-name').val();
	if (!countryName.length) {
		countryName = "Poland";
	}
	$.ajax ({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}
function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		var $tableWrapper = $('<div>').appendTo('#countries').addClass('col-md-6 col-sm-12')
		var $countryTable = $('<table>').appendTo($tableWrapper).addClass('table table-striped countries-table');
		var $countryRow = $('<tr>').appendTo($countryTable);
		$('<th>').text(item.name).appendTo($countryRow).addClass('countries-table-head').attr('colspan', '2');

		function addRow(label, value) {
			var $tableRow = $('<tr>').appendTo($countryTable);
			$('<td>').text(label).appendTo($tableRow).addClass('country-attribute');
			$('<td>').text(value).appendTo($tableRow).addClass('country-value');
		}

		addRow("Stolica", item.capital);
		addRow("Region", item.region);
		addRow("Liczba ludności", item.population);
		addRow("Waluta", item.currencies);
		addRow("Języki urzędowe", item.languages);
	})
}