$(document).ready(function() { 
	document.title=chrome.i18n.getMessage("extName");
	$("#theTitle").text(chrome.i18n.getMessage("extName"));
	$("#settingOff").text(chrome.i18n.getMessage("settingOff"));
	$("#settingAspectRatio").text(chrome.i18n.getMessage("settingAspectRatio"));
	$("#settingCrop").text(chrome.i18n.getMessage("settingCrop"));
	$("#settingForceModes").text(chrome.i18n.getMessage("settingForceModes"));
	$("#settingForceCrop").text(chrome.i18n.getMessage("settingForceCrop"));
	$("#settingForceAspect").text(chrome.i18n.getMessage("settingForceAspect"));
});