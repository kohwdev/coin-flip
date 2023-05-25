document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  document.querySelector('#coin').classList.remove('heads' && 'tails' || 'heads' || 'tails');
  const res = await fetch(`/api?coin=flip`)
  const data = await res.json()

  console.log(data);
  let flipResult = data.flip
  document.querySelector('.flip-result').innerHTML = `${flipResult}`

  setTimeout(function(){
    if(flipResult === 'heads'){
      document.querySelector('#coin').classList.add('heads');
      console.log('it is head');
    }
    else{
      document.querySelector('#coin').classList.add('tails');
      console.log('it is tails');
    }
  }, 100);


//  if (data.flip === 'heads') {
//   document.querySelector('.coin-tails').classList.add('hidden')
//  }
}