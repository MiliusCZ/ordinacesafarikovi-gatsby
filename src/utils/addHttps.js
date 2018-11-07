const addHttps = (url) => {
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }

  return url;
};

export default addHttps;
