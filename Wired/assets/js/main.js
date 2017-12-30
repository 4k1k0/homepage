let setMessageAndBackground = () => {
  let date = new Date();
  let hour = date.getHours();
  let text = document.getElementById('message-text');
  let body = document.getElementsByTagName('body')[0];

  if ( hour <= 6 || hour >= 21 ) {
    body.style.backgroundImage = 'url(https://i.4cdn.org/wg/1514288766586.jpg)';
    text.innerHTML='Good night';
  } else if ( hour <= 11 ) {
    body.style.backgroundImage = 'url(https://i.4cdn.org/wg/1514312850224.jpg)';
    text.innerHTML='Good afternoon';
  } else {
    body.style.backgroundImage = 'url(https://i.4cdn.org/wg/1514314336381.jpg)';
    text.innerHTML='Good mornig';
  }

}

let addLinks = () => {
  let links = [
    {
      url: 'https://twitter.com',
      text: 'Twitter'
    },
    {
      url: 'https://github.com',
      text: 'Github'
    },
    {
      url: 'https://lainchan.org',
      text: 'Lainchan'
    },
    {
      url: 'https://gs.smuglo.li/main/public',
      text: 'GNU/Social'
    },
    {
      url: 'https://www.reddit.com',
      text: 'Reddit'
    },
    {
      url: 'https://www.youtube.com/feed/subscriptions',
      text: 'Youtube'
    },
    {
      url: 'https://web.whatsapp.com',
      text: 'Whatsapp'
    },
    {
      url: 'https://boards.4chan.org/wg/catalog',
      text: '/w/'
    },
    {
      url: 'https://boards.4chan.org/mu/catalog',
      text: '/mu/'
    },
    {
      url: 'https://lainchan.org/tech/catalog.html',
      text: '/tech/'
    }
    
  ];

  links.sort( (a, b) => {
    return a.text.toLowerCase() < b.text.toLowerCase();
  });

  links.sort();

  let ul = document.getElementById('links-ul');

  for ( let i = 0; i != links.length; i++) {
    ul.insertAdjacentHTML(
      'afterbegin',
      '<li><a href="' + links[i].url +'">' + links[i].text + '</a></li>'
    );
  }

}

window.onload=function() {
  setMessageAndBackground();
  addLinks();
}
