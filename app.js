
let flag=false;

document.querySelector('.firstel').addEventListener('click',function(){
    if(flag==true)
    {
        const div1=document.querySelector('.div1');
        div1.remove();
        flag=false;
    }
    else{
    const div1=document.createElement('div');
    div1.style.padding='10px';
    div1.innerText='hello';
    div1.style.color='black';
    div1.style.backgroundColor='pink';
    div1.className='div1';
    const firstel=document.querySelector('.firstel');
    firstel.style.transition='3s ease-in';
    firstel.appendChild(div1);
    flag=true;
    }
})
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  const sidemedia=document.querySelector('.sidemedia');
  if(66-scrollPos>0)
  sidemedia.style.top=`${66-scrollPos}px`;
  else
  sidemedia.style.top='0px';
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
