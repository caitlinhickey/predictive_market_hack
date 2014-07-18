function showTransaction(json) {
    for (i = 0; i < json.feed.entry.length; i++) {
        entry = json.feed.entry[i];
        $('#trans').append(
            '<tr class="active">' +
            '<td title="'+ entry.gsx$sellerreas.$t +'">'+ entry.gsx$seller.$t +'</td>'+
            '<td>'+ entry.gsx$seldep.$t +'</td>'+
            '<td title="'+ entry.gsx$buyerreas.$t +'">'+ entry.gsx$buyer.$t +'</td>'+
            '<td>'+ entry.gsx$buydep.$t +'</td>'+
            '<td>'+ entry.gsx$amnt.$t +'</td>'+
            '<td>'+ entry.gsx$time.$t +'</td>'+
            '</tr>'
        );
    }
}

function showSales(json) {
    for (i = 0; i < json.feed.entry.length; i++) {
        entry = json.feed.entry[i];
        $('#sales').append(
            '<tr class="active">' +
            '<td>'+ entry.gsx$seller.$t +'</td>'+
            '<td style="width:70px;">'+ entry.gsx$seldep.$t +'</td>'+
            '<td>'+ entry.gsx$sellerreas.$t +'</td>'+
            '</tr>'
        );
    }
}

function showBuys(json) {
    for (i = 0; i < json.feed.entry.length; i++) {
        entry = json.feed.entry[i];
        $('#buys').append(
            '<tr class="active">' +
            '<td>'+ entry.gsx$buyer.$t +'</td>'+
            '<td style="width:70px;">'+ entry.gsx$buydep.$t +'</td>'+
            '<td>'+ entry.gsx$buyerreas.$t +'</td>'+
            '</tr>'
        );
    }
}

function findPrice(json) {
    var end = json.feed.entry.length;
    entry = json.feed.entry[end - 1];
    $('#currentPrice').append(
            '<h2>'+ entry.gsx$amnt.$t +'</h2>'
    );
}

function curSell(json) {
    for (i = 0; i < json.feed.entry.length; i++) {
        entry = json.feed.entry[i];
        $('#currentSeller').append(
            '<tr class="active">' +
            '<td>'+ entry.gsx$time.$t +'</td>'+
            '<td>'+ entry.gsx$name.$t +'</td>'+         
            '<td style="width:100px;">'+ entry.gsx$amnt.$t +'</td>'+
            '<td >'+ entry.gsx$reason.$t +'</td>'+
            '</tr>'
        );
    }
}