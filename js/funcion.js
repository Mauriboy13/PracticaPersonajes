
$('#selectPersonaje, #selectTemporada').on('change', function () {
var seleccionPersonaje = $('#selectPersonaje').val();
var seleccionTemporada = $('#selectTemporada').val();
var imagen = $('#imagenPersonaje img');
var infoPersonaje = $('#infoPersonaje'); // Pinfo del personaje

switch (seleccionPersonaje) {

case 'futurama':
imagen.attr('src', 'img/futurama.jpg');
var descripcion = '';

break;
case 'personaje1':
switch (seleccionTemporada) {
  case 'temporada1':
    imagen.attr('src', 'img/F1.jpg');
    descripcion = '';
    break;
  case 'temporada2':
    imagen.attr('src', 'img/FryRetro.jpg');
    descripcion = '';
    break;
    case 'temporada3':
    imagen.attr('src', 'img/FScooby.jpg');
    descripcion = '';
    break;
  default:
    imagen.attr('src', 'img/F1.jpg');
    descripcion = '';
    break;
}
break;
case 'personaje2':
    switch (seleccionTemporada) {
      case 'temporada1':
    imagen.attr('src', 'img/B1.jpg');
    descripcion = '';
    break;
  case 'temporada2':
    imagen.attr('src', 'img/BenRetro1.jpg');
    descripcion = '';
    break;
    case 'temporada3':
    imagen.attr('src', 'img/BScooby.jpg');
    descripcion = '';
    break;
  default:
    imagen.attr('src', 'img/B1.jpg');
    descripcion = '';
    break;
    }
    break;
    case 'personaje3':
    switch (seleccionTemporada) {
      case 'temporada1':
    imagen.attr('src', 'img/L1.jpg');
    descripcion = '';
    break;
  case 'temporada2':
    imagen.attr('src', 'img/leelaretro.jpg');
    descripcion = '';
    break;
    case 'temporada3':
    imagen.attr('src', 'img/LScooby.jpg');
    descripcion = '';
    break;
  default:
    imagen.attr('src', 'img/L1.jpg');
    descripcion = '';
    break;
    }
    break;
    case 'personaje4':
    switch (seleccionTemporada) {
      case 'temporada1':
      imagen.attr('src', 'img/A1.jpg');
      descripcion = '';
    break;
  case 'temporada2':
    imagen.attr('src', 'img/amyRetro.jpg');
    descripcion = '';
    break;
    case 'temporada3':
    imagen.attr('src', 'img/AScooby.jpg');
    descripcion = '';
    break;
  default:
    imagen.attr('src', 'img/A1.jpg');
    descripcion = '';
    break;
    }
    break;
    case 'personaje5':
    switch (seleccionTemporada) {
      case 'temporada1':
    imagen.attr('src', 'img/H1.jpg');
    descripcion = '';
    break;
  case 'temporada2':
    imagen.attr('src', 'img/hermesRetro.jpg');
    descripcion = '';
    break;
    case 'temporada3':
    imagen.attr('src', 'img/HScooby.jpg');
    descripcion = '';
    break;
  default:
    imagen.attr('src', 'img/H1.jpg');
    descripcion = '';
    break;
    }
    break;
    case 'personaje6':
    switch (seleccionTemporada) {
      case 'temporada1':
    imagen.attr('src', 'img/Z1.jpg');
    descripcion = '';
    break;
  case 'temporada2':
  imagen.attr('src', 'img/zoidbergRetro.jpg');
  descripcion = '';
    break;
    case 'temporada3':
    imagen.attr('src', 'img/ZScooby.jpg');
    descripcion = '';
    break;
  default:
    imagen.attr('src', 'img/Z1.jpg');
    descripcion = '';
    break;
    }
    break;
}
$('#descripcionPersonaje').text(descripcion);
});
$('#imagenPersonaje img').on('click', function() {
var seleccionPersonaje = $('#selectPersonaje').val();
var descripcion = '';

switch (seleccionPersonaje) {
  case 'personaje1':
    descripcion = 'Fry es el protagonista de Futurama. Es un joven repartidor de pizza que se despierta mil años después de haber sido congelado por accidente.';
    break;
  case 'personaje2':
    descripcion = 'Bender es un robot doblador de acero que trabaja en la planta de doblado de Planet Express. Es conocido por su carácter cínico y su amor por el alcohol.';
    break;
  case 'personaje3':
    descripcion = 'Leela es la capitana y piloto de la nave Planet Express. Es una mutantey es conocida por su habilidad en las artes marciales y su única apéndice ocular.';
    break;
  case 'personaje4':
    descripcion = 'Amy es una estudiante universitaria y pasante en Planet Express. Es conocida por su actitud despreocupada y su relación romántica con Kif, un teniente anfibio de la nave Nimbus.';
    break;
  case 'personaje5':
    descripcion = 'Hermes es el inspector de beisbol y contador de Planet Express. Es conocido por su amor por la burocracia y su obsesión por las regulaciones.';
    break;
  case 'personaje6':
    descripcion = 'Zoidberg es el médico de la tripulación de Planet Express. Es un crustáceo alienígena incompetente y hambriento que se alimenta de desechos orgánicos.';
    break;
  default:
    descripcion = '';
    break;
}

$('#descripcionPersonaje').text(descripcion);
});

