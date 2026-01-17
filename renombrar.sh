clear
read -p "Ubicación del Archivo: " direc
ubi=$(pwd)
if ! [[ -e "$direc" ]]; then
    echo "El directorio "$direc" no existe."
    exit 1
fi
read -p "Nombre del Archvo a renombrar: " archivo
encontrado=$(find ${direc} -name ${archivo} | wc -l)
if [ "$encontrado" -eq 0 ]; then
    echo "No se encontró el archivo "$archivo" en la ubicación "$direc"."
    exit 1
fi
read -p "Nuevo nombre del archivo: " nuevo_nombre
mv ${direc}/${archivo} ${direc}/${nuevo_nombre}
echo "Contendido del directorio "$direc": " $(ls ${direc})