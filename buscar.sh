#!/bin/bash
clear
echo "----------------------------------------------------"
read -p "Ubicación del Archivo: " direc
if ! [[ -e "$direc" ]]; then
    echo "La ubicación ingresada (directorio) no existe."
    exit 1
fi
echo "----------------------------------------------------"
read -p "Nombre del Archivo: " archivo
echo "----------------------------------------------------"
dir=$(pwd)
echo "Ubicación: "$dir"/"$direc"  "
echo "----------------------------------------------------"
find ${direc} -name ${archivo}
veri=$(find ${direc} -name ${archivo} | wc -l)
if [ "$veri" -eq 0 ]; then
    echo "No se encontró coincidencia."
fi
echo "Total: " $(find ${direc} -name ${archivo} | wc -l)

