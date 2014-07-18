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

function date_time(){
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
        document.getElementById("Time").innerHTML = result;
        document.getElementById("Name").innerHTML = 'John Smith';
        console.log('time is ' + result);
         $('#Time').val(result);
        return true;
}
