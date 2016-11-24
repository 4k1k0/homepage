#!/bin/bash
clear

mensajes(){
	ok=true
	
	echo "What do you want to set: (w)idth or (h)eight ?"
	read set
	if ( [ $set == 'w' ] || [ $set == 'W' ] ); then
		set='W'
	elif ( [ $set == 'h' ] || [ $set == 'H' ] ); then
		set='H'
	else
		ok=false
	fi
	
	if [ "$ok" == true ]; then
		echo "Please enter a value "
		read pixel
		resize "!@"
	else
		error "!@"
	fi
}

resize(){
    cd img
	if [ "$set" == 'W' ]; then
		for i in *.png
		do
			echo "Resizing $i"
			convert "$i" -resize "$pixel"x "{$i%.*}_.png"
		done
	elif [ "$set" == 'H' ]; then
		for i in *.png
		do
			echo "Resizing $i"
			convert "$i" -resize x$pixel "{$i%.*}_.png"
		done
	fi
	cd ..
}

error(){
	echo "Something went wrong"
}

mensajes "$@"
