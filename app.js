(function(){
var t=document.getElementById('toast');
function toast(m){t.textContent=m;t.classList.add('show');clearTimeout(window._t);window._t=setTimeout(function(){t.classList.remove('show')},2200)}
document.addEventListener('click',function(e){
 var x=e.target.closest('[data-toast]');
 if(x){if(x.tagName==='A')e.preventDefault();toast(x.getAttribute('data-toast'))}
 var tb=e.target.closest('[data-tab]');
 if(tb&&document.getElementById(tb.getAttribute('data-tab'))){
  document.querySelectorAll('.pane').forEach(function(p){p.classList.remove('on')});
  document.querySelectorAll('.tab').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-tab')===tb.getAttribute('data-tab'))});
  document.getElementById(tb.getAttribute('data-tab')).classList.add('on');if(tb.tagName==='A')e.preventDefault();
 }
 var sz=e.target.closest('.size');if(sz){document.querySelectorAll('.size').forEach(function(s){s.classList.remove('on')});sz.classList.add('on')}
 if(e.target.id==='m'||e.target.id==='p'){var q=document.getElementById('q'),n=+q.textContent+(e.target.id==='p'?1:-1);q.textContent=Math.max(1,n)}
 var pay=e.target.closest('.pay');if(pay){document.querySelectorAll('.pay').forEach(function(p){p.classList.remove('on')});pay.classList.add('on')}
});
// search page heading from ?q=
var q=new URLSearchParams(location.search).get('q');
var rt=document.getElementById('rt');if(rt&&q){rt.textContent='Search results for "'+q+'"';var i=document.querySelector('.search input');if(i)i.value=q}
// upload page
var f=document.getElementById('file'),c=document.getElementById('choose'),d=document.getElementById('drop');
if(f){
 var s2=document.getElementById('s2'),s3=document.getElementById('s3'),cont=document.getElementById('cont');
 function done(){document.getElementById('fname').textContent='Selected: '+f.files[0].name;
  setTimeout(function(){s2.classList.remove('cur');s2.classList.add('done');s2.querySelector('i').textContent='✓';s3.classList.add('done');s3.querySelector('i').textContent='✓';
  cont.classList.remove('dis');cont.href='checkout.html';toast('Prescription verified')},1800)}
 c.addEventListener('click',function(){f.click()});f.addEventListener('change',function(){if(f.files.length)done()});
 d.addEventListener('dragover',function(e){e.preventDefault();d.classList.add('hov')});d.addEventListener('dragleave',function(){d.classList.remove('hov')});
 d.addEventListener('drop',function(e){e.preventDefault();d.classList.remove('hov');if(e.dataTransfer.files.length){f.files=e.dataTransfer.files;done()}});
 cont.addEventListener('click',function(e){if(cont.classList.contains('dis'))e.preventDefault()});
}
})();
