function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}
var subbt=document.getElementById('sub-button');
var emailId=document.getElementById('email-address');
var error=document.getElementById('error');
var submit=document.querySelector('.submit-response');
var container=document.querySelector('.container');
var emailC=document.getElementById('email');
var dismiss=document.getElementById('dismiss-button');
subbt.addEventListener('click',()=>{
    const email = emailId.value;
    if(!validateEmail(email)){
        error.style.display='inline';
        emailId.style.backgroundColor='rgba(255, 0, 0, 0.2)';
        emailId.style.border='1px solid rgba(255, 0, 0, 0.6)';
    }
    else{
        error.style.display='none';
        container.style.display='none';
        submit.style.display='block';
        emailC.innerHTML=`${email}`;

    }
})

var mcontainer=document.querySelector('.mcontainer');
var msubbt=document.getElementById('msub-button');
var memailId=document.getElementById('memail-address');
var merror=document.getElementById('merror');
msubbt.addEventListener('click',()=>{
    const memail=memailId.value;
    if(!validateEmail(memail)){
        merror.style.display='inline';
        memailId.style.backgroundColor='rgba(255, 0, 0, 0.2)';
        memailId.style.border='1px solid rgba(255, 0, 0, 0.6)';
    }
    else{
        merror.style.display='none';
        mcontainer.style.display='none';
        submit.style.display='block';
        emailC.innerHTML=`${memail}`;
        submit.style.height='100%';
        dismiss.style.marginTop='200px';
    }
})
dismiss.addEventListener('click',()=>{
    const width=window.innerWidth;
    if(width>376){
    container.style.display='flex';
    }
    else{
        mcontainer.display='block';
    }
    submit.style.display='none';
    emailId.value='';
})