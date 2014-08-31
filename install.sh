#! /bin/bash
set -e

rm -rf binaries  

npm install
grunt download-atom-shell
mv  binaries/Atom.app binaries/Gorilla.app
cp -r app binaries/Gorilla.app/Contents/Resources/app

rm -rf /Applications/Gorilla.app
mv binaries/Gorilla.app /Applications
