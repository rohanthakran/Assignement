$('#my').click(function() {
    console.log("You click on h1")

})
let city;
$("button").click(function(){
    city = $('input:text').val();
    console.log(city)
    $('input:text').val("")
    get();
   
})
var get = async function(){
    await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=132cdced319af009f4ad6d49cef24938')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var temp1 = (tempValue -273);
        var temp2 = Math.floor(temp1)+" 'C";

        $('#name').text(nameValue)
        $('#desc').text(descValue)
        $('#temp').text(temp2)
        $('#temp1').text(temp2)

    })
    .catch(err => alert("Wrong city"));
    

}
