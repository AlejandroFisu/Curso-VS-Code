import os
os.system("cls" if os.name == "nt" else "clear")
print("Cuestionario".upper())
nombre = input("¿Cómo te llamas? ")
print(f"¡Encantado de conocerte, {nombre}!")
estado = input("¿Cómo estás hoy? ")
mensaje = "¡Me alegro de escuchar eso!" if estado.lower() == "bien" else "Espero que tu día mejore."
print(mensaje)