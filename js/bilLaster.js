window.onload = function(e) {

    let klasse = localStorage.getItem('bil')
    if(klasse !== null){
    console.log(klasse)
    document.getElementById('D').selected = 'selected'
  }else{
    console.log("Ingen bil funnet i storage")
  }
  };
