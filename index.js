function addingEventListener() {

    const input = document.getElementById('input');
        
    function clickAlert() {
      alert('Yessir Yessir!');
    }
    
    input.addEventListener('click', clickAlert());
    
        
    }