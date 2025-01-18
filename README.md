Piedra, Papel o Tijeras - Juego en JavaScript

Este proyecto implementa el clásico juego de Piedra, Papel o Tijeras, donde puedes competir contra la computadora. El juego está desarrollado en JavaScript y es ejecutado directamente en el navegador.

Características

Modo de juego: Jugador vs Computadora.

Elecciones al azar para la computadora.

Determinación del ganador según las reglas estándar del juego.

Posibilidad de jugar múltiples rondas consecutivas.

Reglas del juego

Piedra (1) vence a Tijeras (3).

Papel (2) vence a Piedra (1).

Tijeras (3) vence a Papel (2).

Si ambos jugadores eligen la misma opción, el resultado es un empate.

Estructura del proyecto

Archivos principales

index.html: Archivo HTML para cargar y ejecutar el juego.

script.js: Contiene toda la lógica del juego.

Funciones principales

obtenerEleccion(opcion)

Convierte una opción numérica (1, 2, 3) a texto legible: "Piedra", "Papel" o "Tijeras".

determinarGanador(opcionJugador, opcionComputadora)

Evalúa las opciones del jugador y la computadora para determinar el ganador.

juegoContraComputadora()

Controla el flujo del juego: solicita la elección del jugador, genera la elección aleatoria de la computadora, y muestra el resultado al usuario.

Requisitos

Navegador web moderno (Chrome, Firefox, Edge, etc.).

Cómo usar

Descarga los archivos del proyecto.

Abre el archivo index.html en tu navegador.

Sigue las instrucciones en pantalla para jugar contra la computadora.

Al finalizar cada ronda, decide si quieres jugar de nuevo.

Ejemplo de flujo de juego

Elige tu opción:

Introduce 1 para Piedra, 2 para Papel o 3 para Tijeras.

Resultado de la ronda:

Se muestra lo que elegiste, lo que eligió la computadora, y quién ganó.

Repetir o salir:

Puedes jugar otra vez escribiendo S, o finalizar escribiendo cualquier otra cosa.

Personalización

Puedes modificar el código para:

Agregar más opciones al juego (por ejemplo, "Lagarto" o "Spock").

Cambiar los mensajes o el diseño del flujo de interacción.

Contribuciones

Si tienes ideas para mejorar este proyecto, ¡eres bienvenido a colaborar! Sube tus sugerencias o mejoras al repositorio.

Licencia

Este proyecto es de uso libre. Puedes modificarlo y utilizarlo para aprender o enseñar programación en JavaScript.

