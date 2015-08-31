#!/bin/bash
clear
echo "What's the extension of your files? e.g. png, mp3, mkv"
read extt
echo "Put a name for your files e.g. 'Picture'"
read nombre
echo "Put a initial value e.g. 0"
read valor

for i in *.$extt
do 
	mv "$i" `echo "$i" | tr ' ' '_'`;
done

for fichero in `ls *.$extt`
do
	mv $fichero $nombre$valor.$extt
	let valor++
done
 
echo "Ficheros renombrados:"
 
for fichero in `ls *.$extt`
do
	echo $fichero
done
