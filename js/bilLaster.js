window.onload = function(e) {

    let klasse = localStorage.getItem('bil')
    if(klasse !== null){
    console.log(klasse)
    document.getElementById(klasse).selected = 'selected'
  }else{
    console.log("Ingen bil funnet i storage")
  }
  };
