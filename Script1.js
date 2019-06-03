
  var x = 0;
$( function()
{
    $( "#datepicker" ).datepicker({
        minDate: 0,
        beforeShowDay:  function (date) {
            /* Blokowanie dni tygodnia */
            var dni_tygodna = ["1", "2", "3", "4", "5"];
            var dtDate = date.getDay().toString();
            if ($.inArray(dtDate, dni_tygodna) == -1) return [false,"","Transport pn-pt"];
            else return [true, ""];
        }
    });

    $('#add').click(function(){
        var newRow = $('#elements .element:first').clone();

        newRow.find('input[name="name[0]"]').attr('id', 'name['+x+']');
        newRow.find('input[id="name['+x+']"]').attr('name', 'name['+(x)+']');
        ++x;

        newRow.find('input').val('');

        newRow.appendTo($('#elements'));
        return false;
    });
}

);


function test2(x, y, t) {
    for (y = 0; t = x.getElementsByTagName('input')[y++];)
        if (t.value == '')
        {
            alert('Pole pozosta³o puste. Wpisz wszystkie dane !!!');
            return false;
        }

    return true;
}


function test(liczba) {
    
   var model = document.getElementById('Model');
   var model_tekst = model.value.toString();
   var m1 = "Airbus_A380";
   var m2 = "Boeing_747";

   if (model_tekst == m1)
       if (parseInt(liczba) > 35)
           alert('Za duzy ciezar!');

   if (model_tekst == m2)
       if (parseInt(liczba) > 38)
           alert('Za duzy ciezar!');

   if (model_tekst == "") {
       document.getElementById('ciezar').value = null;
       document.getElementById('ciezar').disabled = true;
       alert('Wybierz model samplotu !');
   }
       if (isNaN(liczba) || liczba == "") {
        alert("Wprowadzona wartosc nie jest liczba !");
    } 
}

function test3(x)
{
    if (x == "")
        alert('Wpisz dane !');
}

function test3_model(x) {
    if (x == "")
        alert('Wpisz dane !');
    else
    {
        document.getElementById('ciezar').disabled = false;
    }
}
