function showTransaction(json) {
    for (i = 0; i < json.feed.entry.length; i++) {
        entry = json.feed.entry[i];
        $('#trans').append(
            '<tr class="active">' +
            '<div id="theTog" class="TogWrap"><td>'+ entry.gsx$seller.$t +'</td><p class="togContent"> '+ entry.gsx$seldep.$t +'</p></div>'+
            '<td>'+ entry.gsx$seldep.$t +'</td>'+
            '<div id="theTog" class="TogWrap"><td>'+ entry.gsx$buyer.$t +'</td><p class="togContent"> hello </p></div>'+
            '<td>'+ entry.gsx$buydep.$t +'</td>'+
            '<td>'+ entry.gsx$amnt.$t +'</td>'+
            '<td>'+ entry.gsx$time.$t +'</td>'+
            '</tr>'
        );
    }
}