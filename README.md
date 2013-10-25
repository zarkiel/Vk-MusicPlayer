Vk-MusicPlayer
==============

Crea un reproductor de música utilizando VK Audio API

### Configuration ###
Primero debe configurar la aplicación con el ID de la aplicación registrada en VK.

File: **app/application.js**
```javascript
VK.init({
    apiId: 3953598 // id de la aplicación
});
```
Asegúrese de que el dominio actual se encuentre entre los dominios permitidos por la aplicación registrada.

### Demo ###
Puede ver la funcionalidad del reproductor en la siguiente dirección: [http://zarkielnetworks.com/MusicPlayer/](http://zarkielnetworks.com/MusicPlayer/)

- Necesita iniciar sesión con una cuenta de Vk.
- Si es necesario, permita las ventanas emergentes para mostrar la ventana de inicio de sesión.