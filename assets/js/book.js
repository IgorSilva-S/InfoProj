const d = new Date
const zd = (n) => {return ('0' + n).slice(-2)}
const dow = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
document.getElementById('date').innerText = `${zd(d.getDate())}/${zd(d.getMonth() + 1)}/${d.getFullYear()}`
document.getElementById('weekdate').innerText = dow[d.getDay()]
let cusD