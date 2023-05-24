document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  document.querySelector('.coin-tails').classList.remove('hidden')
  const res = await fetch(`/api?student=flip`)
  const data = await res.json()

  console.log(data);
  document.querySelector('.flip-result').innerHTML = `${data.flip}`

  


 if (data.flip === 'heads') {
  document.querySelector('.coin-tails').classList.add('hidden')
 }
}