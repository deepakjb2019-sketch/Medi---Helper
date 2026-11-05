const menu=document.querySelector('.menu'), nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('tripForm').addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  const msg=`Hello Freedom Finders!%0A%0AI'd like to plan a trip.%0A%0AName: ${encodeURIComponent(f.get('name'))}%0APhone/WhatsApp: ${encodeURIComponent(f.get('phone'))}%0ADestination: ${encodeURIComponent(f.get('destination'))}%0ATravel date: ${encodeURIComponent(f.get('date')||'Flexible')}%0ATravellers: ${encodeURIComponent(f.get('travellers')||'Not specified')}%0ATrip type: ${encodeURIComponent(f.get('type'))}%0AMessage: ${encodeURIComponent(f.get('message')||'')}`;
  window.open(`https://wa.me/?text=${msg}`,'_blank');
});
