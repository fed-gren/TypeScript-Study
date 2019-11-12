interface FetchParam {
  url: string;
  option: {
    headers: { Accept: string },
    method: string,
  };
}

const fetchData = (param: FetchParam): void => {
  fetch(param.url, param.option)
    .then((res: { status: number }) => (res.status >= 200 && res.status < 300) ?
      res.json() :
      Promise.reject(new Error(`Got status ${res.status}`)))
    .then((user: { avatar_url: string, html_url: string }) => {
      console.log(user.avatar_url);
      console.log(user.html_url);
    })
    .catch(err => console.log(err));
}

fetchData({
  url: 'https://api.github.com/users/fed-gren',
  option: {
    headers: { Accept: 'application/json' },
    method: 'GET'
  }
});