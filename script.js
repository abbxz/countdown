const result=document.querySelectorAll('.counter');
const speed=200;
result.forEach(counter=>
{
 const updatecount=()=>
 {
    const target=+counter.getAttribute('data-target')
    const a_1=+counter.innerText;  //0
    const inc=target/speed;   //60000/200=300

    if(a_1<target)
    {
        counter.innerText=a_1+inc;   //(0+300=300)
        setTimeout(updatecount,10)
    }
    else
    {
        counter.innerText=target;
    }
 }
    updatecount();
}
)
 