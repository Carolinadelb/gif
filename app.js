window.onload = ()=>{
  const btn = document.querySelector('button');
  const img = document.getElementById('photo');
  const url = 'https://api.giphy.com/v1/gifs/trending?api_key=AJx2Ei3LrZMOTPoBtkEUbv9BOu7H744o&limit=25&rating=G';


  //call back va a estar esperando una llamada y recibiendo cosas
  const getJSON = (url, callback) => {
    //crear instancia del objeto XMLHttpRequest
    const request = new XMLHttpRequest();

    request.onload = () => {
      // 4 significa que la respuesta esta lista, y 200 significa que esta OK
      //esto nunca cambia (4 y 200) es siempre lo mismo
      if (request.readyState === 4 && request.status === 200){ 
        callback(request.responseText);
      }
    }
    //open()
    request.open('GET', url);
    //send()
    request.send();
  }

  btn.addEventListener('click',() => {
  getJSON(url, response => {
    let giphy = JSON.parse(response).data; //JSON.parse es un método completo con parse: sepa a un objeto normal 
    console.log(giphy);
    img.src = giphy[0].images.fixed_width.url.replace('media2', 'i');
  }) 
  });
}
