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
		let v++
		mv $i $v.png
	done
	cd ..
else
	echo "Hail Hydra."
fi
