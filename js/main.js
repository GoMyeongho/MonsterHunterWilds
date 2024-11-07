const overlay = document.getElementById('overlay');

window.addEventListener('scroll', () => {
  // 스크롤 위치를 확인
  const scrollY = window.scrollY;
  const videoHeight = document.getElementById('video').clientHeight;

  // 100vw(브라우저의 너비)만큼 내려갔을 때 배경을 추가
  if (scrollY >= window.innerHeight) {
    overlay.style.display = 'block';  // 배경을 표시
  } else {
    overlay.style.display = 'none';   // 배경을 숨김
  }

  (function(d) {
    var config = {
        kitId: 'cvx8btf',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
});
