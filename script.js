let cel=document.getElementById('cel');
let fah=document.getElementById('fah');
let kel=document.getElementById('kel');
cel.oninput=function(){
    let fa=(parseFloat(cel.value)*9)/5+32;
    fah.value=parseFloat(fa.toFixed(2));
    let ke=(parseFloat(cel.value)+273.15);
    kel.value=parseFloat(ke.toFixed(2));
}
kel.oninput=function(){
   let fa=(parseFloat(kel.value)-273.15)*9/5+32;
    fah.value=parseFloat(fa.toFixed(2));
    let ce=(parseFloat(kel.value)-273.15);
    cel.value=parseFloat(ce.toFixed(2));
}
fah.oninput=function(){
    let ke=(parseFloat(fah.value)-32)*5/9+273.15;
    kel.value=parseFloat(ke.toFixed(2));
    let ce=(parseFloat(fah.value)-32)*5/9;
    cel.value=parseFloat(ce.toFixed(2));

}