function showTransaction(json) {
    for (i = 0; i < json.feed.entry.length; i++) {
        entry = json.feed.entry[i];
        $('#trans').append(
            '<tr class="active">' +
            '<td>'+ entry.gsx$seller.$t +'</td>'+
            '<td>'+ entry.gsx$seldep.$t +'</td>'+
            '<td>'+ entry.gsx$buyer.$t +'</td>'+
            '<td>'+ entry.gsx$buydep.$t +'</td>'+
            '<td>'+ entry.gsx$amnt.$t +'</td>'+
            '<td>'+ entry.gsx$time.$t +'</td>'+
            '</tr>'
        );
    }
}