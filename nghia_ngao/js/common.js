var ajaxLock=false;$(function(){$.ajaxSetup({headers:{'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')}});$('ul.nav li.dropdown').hover(function(){$(this).find('.dropdown-menu').stop(true,true).show();},function(){$(this).find('.dropdown-menu').stop(true,true).hide();});});function validateEmail(email){var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email);}
function showModalError(message){$('#modal-error-message').html(message);$('#modal-error').modal('show');}
function showModalSuccess(message){$('#modal-success-message').html(message);$('#modal-success').modal('show');}
function showModalInfo(message){$('#modal-info-message').html(message);$('#modal-info').modal('show');}
function removeSign(str)
{str=String(str).toLowerCase();str=str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");str=str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");str=str.replace(/ì|í|ị|ỉ|ĩ/g,"i");str=str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");str=str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");str=str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");str=str.replace(/đ/g,"d");str=str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");str=str.replace(/-+-/g,"-");str=str.replace(/^\-+|\-+$/g,"");return str;}
function searchStr(str)
{return removeSign(str).replace(/\-/g,"");}
function searchStrfirstLetters(str)
{return removeSign(str).replace(/\-/g," ").match(/\b(\w)/g).join('').toLowerCase();}
function filterSearchStr(str)
{return searchStr(str)+'-'+searchStrfirstLetters(str);}
function requestSupport(type)
{if(ajaxLock)return false;var data={'type':type};$.ajax({url:window.globalData.ajax_request_support_url,data:data,type:'post',beforeSend:function(){ajaxLock=true;},success:function(){ajaxLock=false;if(type)type=type+'-';$('.btn-request-'+type+'support').attr('disabled',true);showModalRequestSupportSuccess();},error:function(error){ajaxLock=false;showModalErrorMessage('Có lỗi xảy ra vui lòng thử lại!');}});}
function showModalRequestSupportSuccess()
{$('#requestSupportSuccessModal').modal('show');}
function goTop(){$(window).scrollTop(0);}
function showModalVipContact()
{$('#vipContactModal').modal('show');}
function updateGlobalCurrentCredit(credit)
{window.globalData.currentCredit=credit;$('#currentCredit').html(credit);}
function updateGlobalCurrentPrepaidCV(prepaidCV)
{window.globalData.currentPrepaidCV=prepaidCV;$('#currentPrepaidCvCount').html(prepaidCV);}
function getUrlParameter(sParam){var sPageURL=decodeURIComponent(window.location.search.substring(1)),sURLVariables=sPageURL.split('&'),sParameterName,i;for(i=0;i<sURLVariables.length;i++){sParameterName=sURLVariables[i].split('=');if(sParameterName[0]===sParam){return sParameterName[1]===undefined?true:sParameterName[1];}}};