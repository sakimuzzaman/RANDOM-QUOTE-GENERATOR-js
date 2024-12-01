
  const quoteElement = document.querySelector('#quote');
  const authorElement = document.querySelector('#author');
  const button = document.querySelector('#button');

  const urlAPI = 'https://api.api-ninjas.com/v1/quotes?category=beauty';
  const keyAPI = 'pEC5dCgFn0j5s4/0pYnLSA==oecRXmDuZiiFACmT';


  const getQuote = () => {
    fetch(urlAPI, {
        headers: {
            'X-Api-Key': keyAPI,
        },
    }).then(data => data.json()).then(item => {
        console.log(item[0]);
        quoteElement.textContent = item[0].quote;
        authorElement.textContent = item[0].author;

    })
    .catch(error => {
        console.log('Error Fetching Ouotes', error);
    });
  }; 

  getQuote();
  button.addEventListener('click', getQuote);