window.trackingApp=new Tracking({debug:true,handlers(){this.on('NewEmployer',({gtag},payload)=>{gtag('event','NewEmployer');})
this.on('NewEmployerFB',({fbq},payload)=>{fbq('track','NewEmployerFB');})
this.on('NewEmployerGG',({gtag},payload)=>{gtag('event','NewEmployerGG',{'send_to':'AW-823531084/naNvCL7Il9kBEMys2IgD'});})
this.on('VerifiedEmployer',({gtag},payload)=>{gtag('event','VerifiedEmployer');})
this.on('VerifiedEmployerFB',({fbq},payload)=>{fbq('track','VerifiedEmployerFB');})
this.on('VerifiedEmployerGG',({gtag},payload)=>{gtag('event','VerifiedEmployerGG',{'send_to':'AW-823531084/gHSoCKfThdoBEMys2IgD'});})}})
$(function(){if(trackingQueue){setTimeout(function(){trackingApp.setQueue(trackingQueue).processQueue()},3000)}
$(document).ajaxSuccess(function(event,xhr,settings){setTimeout(function(){let response=xhr.responseJSON
if(response&&response.tracking_queue){trackingApp.setQueue(response.tracking_queue).processQueue()}},500)})})