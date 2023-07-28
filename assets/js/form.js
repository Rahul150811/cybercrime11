// JavaScript code for the openForm() function
function openForm(category) {
  var formDiv = document.createElement('div');
  formDiv.style.position = 'fixed';
  formDiv.style.top = '50%';
  formDiv.style.left = '50%';
  formDiv.style.transform = 'translate(-50%, -50%)';
  formDiv.style.backgroundColor = '#fff';
  formDiv.style.padding = '10px';
  formDiv.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  formDiv.style.zIndex = '9999';
  formDiv.style.width = '90%';
  formDiv.style.maxWidth = '800px';
  formDiv.style.height = '90%';
  formDiv.style.maxHeight = '800px';

  //iframe element to load the form URL
  var formFrame = document.createElement('iframe');
  formFrame.style.width = '100%';
  formFrame.style.height = '100%';

  //set the URL of the form based on the category
  switch(category){
    case 'ransomware':
      formFrame.src = 'ransomwareform.html';
      break;
    case 'phishing':
      formFrame.src = 'phishingform.html';
      break;
    case 'credit':
      formFrame.src = 'credit.html';
      break;
    case 'cyberbullying':
      formFrame.src = 'cyberbullyingform.html';
      break;
    case 'identity':
      formFrame.src = 'identityform.html';
      break;
    case 'computerhacked':
      formFrame.src = 'computerhackform.html';
      break;
    case 'social media':
      formFrame.src = 'socialmediaform.html';
      break;
    default:
      formFrame.src = 'form.html';
  }

  formDiv.appendChild(formFrame);

  // "Close" button for the form
  var closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.backgroundColor = '#ccc';
  closeButton.style.border = 'none';
  closeButton.style.padding = '10px';
  closeButton.style.cursor = 'pointer';
  closeButton.addEventListener('click', closeForm);

  //dark overlay to block the background
  var overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
  overlay.style.zIndex = '9998';

  // Add the form div, close button, and overlay to the document
  formDiv.appendChild(closeButton);
  document.body.appendChild(overlay);
  document.body.appendChild(formDiv);

  // When the form is submitted or the popup is closed, remove the form and overlay
  function closeForm() {
    document.body.removeChild(overlay);
    document.body.removeChild(formDiv);
  }
  formFrame.addEventListener('load', function() {
    formFrame.contentWindow.addEventListener('submit', closeForm);
  });
  window.addEventListener('beforeunload', closeForm);
}
