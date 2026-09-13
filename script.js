(function(){
  const params=new URLSearchParams(window.location.search);
  const guestId=(params.get('id')||'G000').trim();
  const rawName=(params.get('nm')||'').trim();
  const guestName=rawName?rawName.replace(/\+/g,' '):'Welcome Guest';
  const nameEl=document.getElementById('guestName');
  const idEl=document.getElementById('guestId');
  if(nameEl) nameEl.textContent=guestName;
  if(idEl) idEl.textContent=guestId;

  const openBtn=document.getElementById('openBtn');
  const opening=document.getElementById('openingScreen');
  if(openBtn) openBtn.addEventListener('click',()=>opening.classList.add('hidden'));

  const target=new Date('2026-09-20T07:00:00');
  function update(){
    const diff=Math.max(0,target-new Date());
    const days=Math.floor(diff/86400000);
    const hours=Math.floor(diff/3600000)%24;
    const mins=Math.floor(diff/60000)%60;
    const secs=Math.floor(diff/1000)%60;
    document.getElementById('days').textContent=String(days).padStart(2,'0');
    document.getElementById('hours').textContent=String(hours).padStart(2,'0');
    document.getElementById('minutes').textContent=String(mins).padStart(2,'0');
    document.getElementById('seconds').textContent=String(secs).padStart(2,'0');
  }
  update();setInterval(update,1000);

  const qr=document.getElementById('qrcode');
  if(qr && window.QRCode){
    const guestUrl=window.location.href;
    new QRCode(qr,{text:guestUrl,width:170,height:170,correctLevel:QRCode.CorrectLevel.H});
  }
})();
