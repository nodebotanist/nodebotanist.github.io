cp ./node_modules/xterm/build/xterm.css ./css &&
cp ./node_modules/xterm/build/xterm.js ./js &&
cp ./node_modules/xterm/build/xterm.js.map ./js &&
cp ./node_modules/xterm/build/addons/fit/fit.js ./js &&
cp ./node_modules/xterm/build/addons/fit/fit.js.map ./js &&
cp ./node_modules/xterm-webfont/index.js ./js/xterm-webfont.js &&
git add --all && 
git commit -m \"Build\"