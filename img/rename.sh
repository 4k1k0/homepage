#!/bin/bash
clear
echo "Do you want to rename your files? y/n"
read answer
if [ "$answer" == 'y' ]; then
	for i in `ls *.png`
	do
		let v++
		mv $i $v.png
	done
else
	echo "Hail Hydra."
fi
