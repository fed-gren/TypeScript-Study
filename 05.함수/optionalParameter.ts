function fetchVideo(url: string, subtitleLanguage?: string) {
  const option = { url };
  if (subtitleLanguage) {
    // option.subtitleLanguage2 = true;  //왜 에러???
    option['subtitleLanguage'] = true;
  }
  return option;
}

let option;
option = fetchVideo('https://example.com', 'ko'); // okay
console.log(option);
option = fetchVideo('https://example.com'); // also okay
console.log(option);


function invalidFetchVideo(subtitleUrl?: string, url: string) {
  /* ... */
}