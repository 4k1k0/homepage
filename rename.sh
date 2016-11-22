#!/bin/bash
clear
echo "Do you want to rename your files? y/n"
read answer
if [ "$answer" == 'y' ]; then
	cd img
	for i in `ls *.png`
	do
		let w++
		mv $i ___$w.png
	done 
	for i in `ls *.png`
	do
		let image++
		mv $i $image.png
	done
	cd ..
	
	cd video
	for i in `ls *.webm`
	do
		let w++
		mv $i ___$w.webm
	done 
	for i in `ls *.webm`
	do
		let video++
		mv $i $video.webm
	done
	cd ..
else
	echo "Hail Hydra."
fi
