import os
os.system("cls" if os.name == "nt" else "clear")
print("Cuestionario".upper())
nombre = input("¿Cómo te llamas? ")
print(f"¡Encantado de conocerte, {nombre}!")
estado = input("¿Cómo estás hoy? ")
mensaje = "¡Me alegro de escuchar eso!" if estado.lower() == "bien" else "Espero que tu día mejore."
print(mensaje)
lengua = ["Python", "JavaScript", "Java", "C++", "Css"]

for i in range(1, len(lengua) + 1):
    respuesta = input(f"Pregunta {i}: ¿Te gusta programar en {lengua[i - 1]}? (sí/no) ")
    respuesta_normalizada = respuesta.strip().lower()
    es_positivo = respuesta_normalizada in ("sí", "si", "s", "yes", "y")

    if es_positivo:
        if i == 1:
            print("¡Genial! Python es un lenguaje muy versátil.")
        elif i == 2:
            print("¡JavaScript es esencial para el desarrollo web!")
        elif i == 3:
            print("¡Java es muy popular en aplicaciones empresariales!")
        elif i == 4:
            print("¡C++ es poderoso para el desarrollo de sistemas!")
        elif i == 5:
            print("¡CSS es fundamental para el diseño web!")
    else:
        print("¡No hay problema! Hay muchos otros lenguajes de programación.")