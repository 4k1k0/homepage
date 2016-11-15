# Homepage
Just a bunch of urls on a list, 3 weeaboo words and cute anime girls.

![Screenshot](https://i.imgur.com/zdoUONU.png)

I made it "responsive" because I use i3wm and I open a lot of terminals when I'm browsing.

![Screenshot-responsive-desing](https://i.imgur.com/IhmZGSR.png)

You can open a search bar with S and close it with Esc. If you want to change the default search engine you have to change the this line at the bottom of the javascript file:
```
window.location = duckduckgo;
```
You can choose between:

- Arch Linux Wiki
- Bing
- Duckduckgo
- Encrypted Google
- Google
- Nyaa
- Reddit
- Youtube

![Screenshot-search-bar](https://i.imgur.com/ZLtt31y.jpg)

## Themes
The current themes are:

- arc-dark.css
- breeze-dark.css
- breeze-light.css
- cyberpunk.css
- fauux.css
- fluttershy.css
- numix.css
- zelda.css

If you want to change the default one you have to change the following line inside the html file:
```
<link rel="stylesheet" href="css/arc-dark.css" />
```

You are free to contribute with themes, suggestions and functions.

## Matrix effect
![Matrix-Effect](http://i.imgur.com/j2ogcvr.gif)
To use the Matrix effect you have to edit the ***js/script.js*** file and uncomment this line:
```
//Matrix();
```
Edit the variables inside ***js/script_matrix.js*** if you want to change the effect.

## Configuration
You can get the font [here](http://font.ubuntu.com/). Or you can install it using the terminal and your distro's package manager.

You have to change the value of the 'files' variable in the script.js with the number of images in the img/ directory (this repository has only 5). The images has to be ***png*** and their names has to be like this: 1.png 2.png, 3.png and please don't use 4K images... it's just a browser.

You can use the ***rename.sh*** script in order to rename your images in the img/ directory. Don't worry Windows users, you'll have Bash on your OS one of these days.
```
$ bash rename.sh
```
## TODO
- [x] Add themes.
- [ ] Change the themes using javascript (without delay).

I downloaded the images from [here](https://drive.google.com/folderview?id=0B_VmbVyD4eT3N1VUbGN4Wjd5OVE) I just resized them. Thanks 4chan!
If you want more images [/w/](https://boards.4chan.org/w/) is a good place to search.
