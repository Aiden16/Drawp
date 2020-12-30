// alert('Connected');
// $(document).ready(function(){
//   alert('Readyyyy');
// });
$(document).ready(function(){
  // var imageBoard = new DrawingBoard.Board('div', {
	// controls: true,
	// background: 'bower_components/drawingboard.js/example/drawingboardjs.png',
	// color: '#000 ',
	// webStorage: false
  var defaultBoard = new DrawingBoard.Board('div');




  $('#button').click(function(){
    domtoimage.toBlob(document.getElementById('div'))
.then(function (blob) {
    window.saveAs(blob, 'picture.png');
});
});
});
