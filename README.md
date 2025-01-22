# Amigo Secreto

Este proyecto es una sencilla aplicación web para sortear un "Amigo Secreto". Permite a los usuarios ingresar nombres, validarlos y luego sortear aleatoriamente uno de ellos.

## Funcionalidades

*   **Agregar amigos:** Permite ingresar nombres en un campo de texto y agregarlos a una lista.
*   **Validación de nombres:** Valida que los nombres ingresados no sean duplicados, no estén vacíos y que solo contengan letras (incluyendo acentos y la letra ñ), espacios.
*   **Mensajes de usuario:** Muestra mensajes informativos sobre el estado de la aplicación (ej: "Amigo agregado", "Debes agregar al menos 2 amigos").
*   **Sorteo aleatorio:** Realiza un sorteo aleatorio entre los amigos agregados y muestra el resultado.
*   **Limpieza de la lista:** Después del sorteo, la lista de amigos se limpia para un nuevo sorteo.

## Tecnologías utilizadas

*   **HTML:** Estructura la página web.
*   **CSS:** Da estilo a la página.
*   **JavaScript:** Lógica principal de la aplicación, incluyendo la validación, el manejo de la lista y el sorteo.

## Cómo usar

1.  Abre el archivo `index.html` en tu navegador web.
2.  Ingresa el nombre de un amigo en el campo de texto "Escribe un nombre".
3.  Haz clic en el botón "Añadir".
4.  Repite los pasos 2 y 3 para agregar más amigos (al menos dos para poder realizar el sorteo).
5.  Haz clic en el botón "Sortear amigo" para realizar el sorteo.
6.  Se mostrará un mensaje con el nombre del amigo secreto sorteado.

## Código JavaScript

### Variables globales:

*   `amigos`: Un array vacío que almacena los nombres de los amigos ingresados.
*   `patternNombre`: Una expresión regular que valida que los nombres solo contengan letras (incluyendo acentos y la letra ñ) y espacios.
*   `listaAmigos`: Elemento HTML que contiene la lista de amigos.
*   `messageSorteo`: Elemento HTML donde se muestra el resultado del sorteo.

### Funciones:

*   `message(msn)`: Muestra un mensaje en la interfaz de usuario.
*   `agregarAmigo(nombreAmigo)`:
    *   Valida que el campo de entrada no esté vacío.
    *   Valida que no puedan repetir nombres.
    *   Valida que el nombre ingresado coincida con el patrón `patternNombre` (solo letras y espacios).
    *   Agrega el nombre (en mayúsculas) al array `amigos`.
    *   Actualiza la interfaz de usuario mostrando un mensaje de confirmación.
    *   Limpia el campo de entrada y le da el foco.
    *   Crea un elemento `<li>` y lo agrega a la lista en el DOM.
*   `sortearAmigo()`:
    *   Valida que haya al menos dos amigos en la lista.
    *   Genera un índice aleatorio dentro del rango del array `amigos`.
    *   Muestra el nombre del amigo sorteado en la interfaz de usuario.
    *   Limpia el array `amigos` y la lista en el DOM para un nuevo sorteo.



## Autor

Paul Bryan Durand Sarango

