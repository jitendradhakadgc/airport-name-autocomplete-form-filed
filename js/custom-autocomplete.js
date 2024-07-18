jQuery(document).ready(function($) {
    $.getJSON(airportsData.json_url, function(data) {
        var availableAirports = [];

        $.each(data, function(key, val) {
            availableAirports.push({
                label: val.name + " (" + val.icao + ")",
                //value: val.icao
            });
        });

        $('#airport-search').autocomplete({
            source: availableAirports,
            minLength: 2, // Minimum number of characters before autocomplete starts
            select: function(event, ui) {
                // When an item is selected, set the hidden input field with the ICAO code
                $('#airport-search-hidden').val(ui.item.value);
            }
        });
    });
});
