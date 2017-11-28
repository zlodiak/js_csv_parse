init();

function init() {
  $.ajax({
    type: 'GET',
    url: '2.csv',
    dataType: 'text',
    success: function(data) {
      //console.log(data);
      csvParse(data);
    },
    error: function(textStatus) {
      console.log(textStatus);
    }
  });
};

function csvParse(data) {
  var tbody = document.getElementById('tbody');
  var results = Papa.parse(data).data;
  console.log(results, typeof results);

  for(prop in results) {
    //console.log(results[prop]);
    var tr = document.createElement('tr');

    for(prop2 in results[prop]) {
      //console.log(results[prop][prop2]);
      var td = document.createElement('td');
      td.innerHTML = results[prop][prop2];
      tr.appendChild(td);      
    }    

    tbody.appendChild(tr);
  }
}


