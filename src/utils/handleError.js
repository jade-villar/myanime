function handleError(err, showToast) {
  switch (err.status) {
    case 404:
      showToast("Content not found.");
      break;
    case 500:
    case 502:
    case 503:
      showToast("Server error. Please try again later.");
      break;
    case 504:
      showToast("Unable to reach the data service. Please try again later.");
      break;
  }
}

export default handleError;
