function generarCURP() {
    abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    random09a = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    random09b = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    randomAZ = Math.floor(Math.random() * (26 - 0 + 1)) + 0;
    ano = Number($("#fecha").val().slice(6, 10));
  
    var CURP = [];
    CURP[0] = $("#paterno").val().charAt(0).toUpperCase();
    CURP[1] = $("#paterno").val().slice(1).replace(/\a\e\i\o\u/gi, "").charAt(0).toUpperCase();
    CURP[2] = $("#materno").val().charAt(0).toUpperCase();
    CURP[3] = $("#nombre").val().charAt(0).toUpperCase();
    CURP[4] = ano.toString().slice(2);
    CURP[5] = $("#fecha").val().slice(3, 5);
    CURP[6] = $("#fecha").val().slice(0, 2);
    CURP[7] = $("#genero").val().toUpperCase();
    CURP[8] = abreviacion[estados.indexOf($("#estado").val().toLowerCase())];
    CURP[9] = $("#paterno").val().slice(1).replace(/[aeiou]/gi, "").charAt(0).toUpperCase();
    CURP[10] = $("#materno").val().slice(1).replace(/[aeiou]/gi, "").charAt(0).toUpperCase();
    CURP[11] = $("#nombre").val().slice(1).replace(/[aeiou]/gi, "").charAt(0).toUpperCase();;
    // CURP[12] = ano < 2000 ? random09a : abc[randomAZ];
    // CURP[13] = random09b;
    return CURP.join("");
  }
  var estados = ["aguascalientes", "baja california", "baja california sur", "campeche", "chiapas", "chihuahua", "coahuila", "colima", "ciudad de mexico", "distrito federal", "durango", "guanajuato", "guerrero", "hidalgo", "jalisco", "estado de mexico", "michoacan", "morelos", "nayarit", "nuevo leon", "oaxaca", "puebla", "queretaro", "quintana roo", "san luis potosi", "sinaloa", "sonora", "tabasco", "tamaulipas", "tlaxcala", "veracruz", "yucatan", "zacatecas"];
  var abreviacion = ["AS", "BC", "BS", "CC", "CS", "CH", "CL", "CM", "CX", "DF", "DG", "GT", "GR", "HG", "JC", "MC", "MN", "MS", "NT", "NL", "OC", "PL", "QT", "QR", "SP", "SL", "SR", "TC", "TS", "TL", "VZ", "YN", "ZS"];
  
  $("#generar").click(function() {
    alert(generarCURP());
  });
  