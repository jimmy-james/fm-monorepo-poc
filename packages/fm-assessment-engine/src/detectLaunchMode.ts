export default (() => {
  const _appConfig = {
    launchMode: '',
  };

  if (!window) {
    console.log('window has not mounted.');
  } else {
    const pathname = window.location.pathname;

    switch (pathname) {
      case '/assessment':
        _appConfig.launchMode = 'online';
        break;
      case '/previewer':
        _appConfig.launchMode = 'previewer';
        break;
      case '/breset':
        _appConfig.launchMode = 'breset';
        break;
      default:
        break;
    }
    // disable modification of this object
    Object.freeze(_appConfig);
  }
  return _appConfig;
})();
