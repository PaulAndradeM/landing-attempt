# 📋 Preguntas y Respuestas - Cirosoft Landing Page

## 1. ¿Consideraciones o recomendaciones antes de empezar? 🛠️

- Asegúrate de entender bien la tarea asignada.
- Revisa la documentación del proyecto.
- Verifica que tienes acceso al repositorio y a las ramas necesarias.
- Asegúrate de tener el entorno de desarrollo configurado correctamente.

### Instalaciones necesarias

- [Node.js](https://nodejs.org/es/): versión LTS.
- [Git](https://git-scm.com/): para clonar el repositorio.
- [Visual Studio Code](https://code.visualstudio.com/): editor de código.
- [GitHub Desktop](https://desktop.github.com/): cliente de GitHub.
- Puedes usar el navegador web de tu preferencia.

### Configurar entorno de desarrollo

- Clona el repositorio en tu máquina local. Puedes usar el comando
  `git clone [url-del-repositorio]`.
- Cambia a la rama de desarrollo con el comando `git checkout develop`.
- Instala las dependencias del proyecto con el comando `npm install`.

## 2. ¿Cuál es el repositorio de la landing page? 🌐

- El repositorio de la landing page es `landing-page` en GitHub. Este es el
  enlace al repositorio:
  [landing-page](https://github.com/Cirosoft-team/landing-page).

## 3. ¿Sobre qué rama debo tener actualizado el repositorio? 🌳

- Debes tener tu repositorio actualizado con la rama `develop` pues es la rama
  de desarrollo de la cual se desprenden las tareas a realizar.

## 4. ¿Cuáles son los comandos de git que debo usar para empezar a trabajar en mi tarea? 💻

```bash
git add .  # Agrega todos los cambios al área de preparación
git clone [url-del-repositorio]  # Clona el repositorio en tu máquina local
git commit -m "Descripción clara y concisa de los cambios realizados"  # Haz el commit con un mensaje descriptivo
git checkout [nombre-de-la-rama]   # Cambia a la rama donde trabajarás
git pull origin [nombre-de-la-rama]  # Actualiza la rama con los últimos cambios
git checkout -b [nombre-de-tu-nueva-rama]  # Crea y cambia a una nueva rama para tu tarea mensaje descriptivo
```

## 5. ¿Cuando termine mi tarea, cómo debo de hacer mi commit? ✅

```bash
git add .  # Agrega todos los cambios al área de preparación
git commit -m "Descripción clara y concisa de los cambios realizados"  # Haz el commit con un mensaje descriptivo
git push origin [nombre-de-tu-rama]  # Sube los cambios a tu rama en el repositorio remoto
```

**Nota:** Siempre es recomendable hacer un `git pull origin develop` antes de hacer un `git push origin [nombre-de-tu-rama]` para evitar conflictos.

## 6. ¿Cómo debo de escribir la descripción de mi commit? 📝

- Utilizamos el formato del paquete 'commitlint' para escribir los mensajes de
  los commits. El formato es el siguiente:

```bash
<tipo>(<alcance>): <mensaje> # Ejemplo: feat(landing-page): Agregar sección de contacto
```

- Para más información, puedes consultar la documentación de `commitlint` en los siguiente enlace:
  [commitlint](https://commitlint.js.org/#/guides-local-setup).
  [conventional commits](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional).

## 7. ¿Cómo debo hacer mi PR? 🔄

- Asegúrate de que tu rama esté limpia y actualizada.
- Crea un Pull Request (PR) desde tu rama hacia la rama de destino (`main` o
  `develop`).

## 8. ¿Cómo y por dónde mando mi PR para que lo revisen? 📬

- Envía el enlace del PR en el canal `desarrollo-general` de Discord, y usa la
  etiqueta `@LPR` para mencionar a los revisores correspondientes.

- Puedes usar el siguiente formato para enviar el enlace del PR:
  `Nuevo PR-[Número de PR] para SCRUM-[Número de incidencia en Jira]`.

## 9. ¿Qué se debe revisar del PR? 🕵️‍♂️

- Revisión de código: calidad, estilo, cumplimiento de estándares.
- Verificación de que no se rompen funcionalidades existentes.
- Revisión de tests y documentación actualizada, si aplica.

## 10. ¿Cuántas aprobaciones debe tener el PR para que se haga el merge? 👍

- El PR debe tener al menos `2` aprobaciones.

## 11. ¿Contra qué rama se va a fusionar el PR? 🌿

- El PR se fusionará contra la rama `develop`.

## 12. ¿Quiénes son los responsables de hacer el merge? 👥

- Los responsables de hacer el merge son los desarrolladores con la etiqueta
  `@LPR` en Discord.

## 13. ¿Qué se debe tener en cuenta antes de fusionar el PR? 📝

- Asegurarse de que el PR haya sido revisado y aprobado.
- Verificar que no hay conflictos con la rama de destino.

## 14. ¿Cómo hago rollback de los cambios si se necesita? ⏪

```bash
git revert [commit-id]  # Revertir un commit específico
git reset --hard [commit-id]  # Resetear a un commit específico, pero perderás los cambios
```

## Más información sobre el Ciclo de Desarrollo y Plantilla de PR

[Development Lifecycle](development-lifecycle.md).

[Plantilla de PR](pull-request-template.md).
