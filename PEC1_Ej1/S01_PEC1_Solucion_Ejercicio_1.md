# Ejercicio 1 – Preguntas teóricas

### La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)

* ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al
menos 3 de estas ventajas.

* Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.


 * Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos
CSS sobre el mismo elemento en su visualización en diferentes dispositivos
(diferentes tamaños de pantalla).

* Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos
CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).

### El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)

---

### El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)

- **Cita al menos 2 de estos preprocesadores:**
    1.  **Less :** Se trata del preprocesador más común y más fácil de utilizar. Se caracteriza por contar con una sintaxis muy parecida al CSS regular
    2. Sass: Otro preprocesador muy común hoy en día.  Sass tiene  dos versiones de sintaxis diferente: .SCSS y .SASS.

- **Cita al menos 4 ventajas que ofrecen estos preprocesadores:**
    - Less:  tiene una **curva de aprendizaje muy rápida.**
    - En general el uso de estos preprocesadores pueden **facilitar el desarrollo de un proyecto** web.
    - Permiten el **uso de variables** en donde se pueden  almacenar valores para luego reutilizarlos en cualquier parte del código. Gracias a esta reutilización se ahorrará mucho trabajo cuando se tenga que modificar un valor que se repite a lo largo del código.
    - Otra ventaja  es la **modularización del código,** es decir la posibilidad de importar archivos. Lo que significa que en lugar utilizar un único CSS o tener varias hojas de estilos en el proyecto, lo que se tendrá son varios archivos preprocesables que darán como resultado uno solo. Esto a la larga permite tener organizado de una forma lógica y sencilla el proyecto en nuestro alojamiento web, permitiendo un mejor mantenimiento.

- **Explica brevemente en qué consisten los sourcemaps:**
    
    Un **Sourcemaps** en CSS es un *mapa* que permite al navegador reconstruir sobre los archivos de *origen* (.less, .scss, etc.).
    
    Son útiles cuando usa preprocesadores CSS como Sass o Less (o un minificador de CSS), un mapa de origen de CSS le dirá al navegador toda la información que necesita para identificar el archivo de origen exacto y el número de línea, proporcionando instrucciones detalladas al navegador sobre cómo el archivo .css se relaciona con todos los archivos de origen desde los que se originó, que luego puede transmitirnos a través de las herramientas de desarrollo del navegador.
    

- **Explica qué es un transpilador:**
    
    Un transpilador es un programa capaz de traducir el código de un lenguaje fuente a otro fuente, o de una versión a otra. Un ejemplo  de esto sería el código escrito en ES6, traducido a ES5, es decir que un código con posibles problemas de compatibilidad se lo pueda hacer compatible con otra plataforma.
    
    Los transpiladores son usados durante la fase de desarrollo, mientras el programador escribe el código, el transpilador  ejecuta el proceso de traducción/compilación antes de que el código sea llevado a etapa de producción.

### El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).

- **Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos:**
    1. **[Git](https://git-scm.com/):** es una herramientas de control de versiones disponible en el mercado actual. Es un modelo de repositorio distribuido compatible con sistemas y protocolos existentes como HTTP, FTP, SSH y es capaz de manejar eficientemente proyectos pequeños a grandes.
    2. **[Apache Subversion](https://subversion.apache.org/) (SVN):** abreviado como SVN. Es un modelo de repositorio cliente-servidor donde los directorios están versionados junto con las operaciones de copia, eliminación, movimiento y cambio de nombre.
    
    ---
    
    **herramientas de gestión de módulos:**
    
    ### **NPM**
    
    Desarrollado sobre Node.js, este sistema potencia un enorme repositorio de 100.000 paquetes y módulos.
    
    Cada proyecto puede utilizar el archivo de instalación package.json a través de NPM e incluso gestionarlo con **Gulp** (en Node). Las dependencias pueden ser actualizadas y optimizadas desde el terminal. 
    
    ### **Jam**
    
    **JamJS** es un gestor de paquetes que funciona en el navegador. Se trata de un gestor de paquetes de JavaScript de gestión automática.
    
    Todas sus dependencias son introducidas en un único archivo JS que te permite agregar y quitar elementos de manera sencilla. Además estos pueden ser actualizados en el navegador sin tener en cuenta otras herramientas que estés utilizando (como RequireJS).
    
    Las librerías se actualizan en función de las versiones más recientes a través del terminal. Cada proyecto puede ser creada de forma automática con componentes optimizados.
    
- **Cita y explica al menos 3 comandos de Git:**
    1. “status”: Con este comando se pueden revisar los archivos que se han modificado, de manera que aparecerá una lista de cambios.
        
        ```bash
        git status
        ```
        
    2. Para registrar todos los cambios (añadirlos al Index) se usa el siguiente comando:
        
        ```bash
        git add .
        ```
        
    3. Cuando no se ha clonado un repositorio ya existente y se quiere conectar un repositorio local a un repositorio remoto específico, se puede ejecutar el siguiente comando:
        
        ```bash
        git remote add origin <server>
        ```
        
        De esta manera se podrán  subir los cambios al repositorio remoto seleccionado.
        
- **Cita y explica brevemente las características más definitorias de WebPack:**
    
    **WebPack** es un empaquetador de módulos (un bundler) cuya función es separar el código en módulos que luego se utilizan como dependencias en otros módulos. Webpack se encarga de la gestión de esos módulos y de sus dependencias, también puede usarse para concatenación de código, minimización, verificación de buenas prácticas (linting), carga bajo demanda de módulos, etc.
    
    Características:
    
    - Eliminación de recursos no utilizados
    - Permite utilizar cualquier tipo de **sistema de modularización** para JavaScript, sea AMD, CommonJS, ES2015 o Angular, sin preocuparte de que el navegador tenga que soportarlo.
    - Webpack puede **generar mapas fuente  al empaquetar**, lo que  proporciona un método de archivos compilados y archivos fuente correspondientes, haciendo que el código compilado sea más legible y más fácil de depurar.
    - **Loaders** es una de las características más interesantes que ofrece webpack. Al usar diferentes cargadores, webpack tiene la capacidad de llamar a scripts o herramientas externas para procesar archivos en diferentes formatos, como analizar y convertir scss a css, o convertir la próxima generación de archivos JS (ES6, ES7) en navegadores modernos archivos JS compatibles.
    - La configuración de Webpack tiene un cierto grado de complejidad