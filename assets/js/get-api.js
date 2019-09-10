var model = {
    name: "Shyju",
    hash: "saasdas",
    highScore: 123
};

$.ajax({
    type: "POST",
    data: JSON.stringify(model),
    url: "http://doodlejump.giloy.ir/api/records/toptenrecords",
    contentType: "application/json"
}).done(function(res) {       
    console.log('res', res);
    // Do something with the result :)
});