# Guía para Revisores de Pull Requests

Esta guía detalla los pasos que debe seguir un revisor para probar, ejecutar y aprobar los cambios realizados por un desarrollador antes de realizar el merge de una Pull Request (PR).

## Índice

1. [Notificación de Revisión](#notificaci%C3%B3n-de-revisi%C3%B3n)
2. [Revisión de Cambios](#revisi%C3%B3n-de-cambios)
    - [Opción 1: Traer Cambios a la Rama Local](#opci%C3%B3n-1-traer-cambios-a-la-rama-local)
    - [Opción 2: Revisar en la Rama del Desarrollador](#opci%C3%B3n-2-revisar-en-la-rama-del-desarrollador)
3. [Aprobación y Feedback](#aprobaci%C3%B3n-y-feedback)

## Notificación de Revisión

1. **Esperar Notificación del Desarrollador:**
    - El desarrollador que ha creado la PR debe notificar en el canal de `#Desarrollo-general` cuando la PR está lista para ser revisada.
    - La notificación debería incluir el enlace a la PR y un resumen de los cambios realizados.
2. **Ejemplo de Notificación:**
    ![[Pasted image 20240829152426.png]]
    

## Revisión de Cambios

Una vez que hayas recibido la notificación, sigue uno de los siguientes métodos para revisar los cambios:

### Opción 1: Traer Cambios a la Rama Local

1. **Actualizar la Rama Local:**
    
    - Asegúrate de que tu rama local esté actualizada con la rama principal (por ejemplo, `main` o `develop`).
    - Ejecuta los siguientes comandos:
        
        bash
        
        Copiar código
        
        `git checkout main git pull origin main`
        
2. **Traer los Cambios de la PR:**
    
    - Crea una nueva rama local basada en la rama de la PR.
        
        bash
        
        Copiar código
        
        ```
        git checkout -b review/pr-<número> origin/<rama-del-desarrollador>
		```

    - Revisa los cambios localmente y prueba la aplicación para asegurar que los cambios funcionan correctamente.
3. **Probar los Cambios:**
    
    - Ejecuta la aplicación en tu entorno local y realiza las pruebas necesarias para verificar la funcionalidad introducida o modificada.

### Opción 2: Revisar en la Rama del Desarrollador

1. **Acceder a la Rama del Desarrollador:**
    
    - Alternativamente, puedes revisar los cambios directamente en la rama del desarrollador sin hacer checkout local.
    - Esto se puede hacer levantando el entorno de desarrollo a partir de la rama del desarrollador.
        
        bash
        
        Copiar código
        
        ```
			git fetch origin git checkout <rama-del-desarrollador>
		```
        
        
2. **Levantar el Entorno:**
    
    - Levanta el entorno de desarrollo local o de pruebas para revisar los cambios en un entorno similar al de producción.

## Aprobación y Feedback

1. **Dejar Feedback en Discord:**
    
    - Una vez que hayas revisado y aprobado los cambios, vuelve al canal de Discord (`#Desarrollo-general`) y responde a la notificación del desarrollador con un comentario de aprobación.
    - Utiliza un emoji como 👍 o ✅ para indicar que los cambios han sido revisados y aprobados.
2. **Agregar Comentarios en GitHub:**
    
    - Si encuentras problemas o tienes sugerencias, deja comentarios directamente en la PR en GitHub para que el desarrollador pueda hacer los ajustes necesarios.
3. **Marcar la PR como Aprobada:**
    
    - Si todo está correcto, utiliza la opción de **Approve** en la PR de GitHub para marcarla como lista para merge.
