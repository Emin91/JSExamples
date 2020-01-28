//Свойства объектов

var contries = {
  "1": "Baku",
  "25": "Xachmaz",
  "4": "Quba",
  "85": "Meksika",
  "88": "USA",
  w: 200,
  h: 214,
  title: "Name"
};


//Вывод в консоль в порядке возростания /1/4/25/85/88
for (var codes in contries){
  console.log(codes)
}

//При добавлении знака плюс перед числами мы можем вывести их в том порядке в котором они заданы
var contries2 = {
  "+1": "Baku",
  "+25": "Xachmaz",
  "+4": "Quba",
  "+85": "Meksika",
  "+88": "USA"
};


//Вывод в консоль в порядке возростания /1/25/4/85/88
for (var code in contries2){
  var v = contries[code]
  code = +code
  console.log(`${code} : ${v}`)
  console.log(code)
}

