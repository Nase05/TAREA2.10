El alumno deberá utilizar una aplicación javascript ya realizada y funcionando de forma correcta. Todo se ha de realizar en local, es decir, al final se deberá realizar un push al repositorio remoto. La razón de esto se explicó en clase.

Crear una rama main y hacer un commit llamado "commit principal".
Modificar el código anterior para implementar una nueva funcionalidad. Ya sea: 
modificar el index.html
 modificar el style.css para cambiar el estilo a flexbox, bootstrap o grid layout.
modificar el script.js para hacer una búsqueda de algún elemento del DOM.
Crear una nueva rama a partir del código modificado llamada por ejemplo "fix-funcionalidad-......"
Hacer un commit una vez creada la rama
Cambiarse a la rama main
Realizar otro cambio del código con otra funcionalidad distinta descrita en el apartado 2.
Crear una rama a partir del código modificado llamada "fix-funcionalidad-......"
hacer un commit desde la rama creada.
Ahora nos cambiamos a la rama main y desde ésta hacemos un merge desde la primera rama creada
Despues del merge hacemos commit
Despues del commit hacemos un merge de la segunda rama a main. Cuando hacemos el merge nos posicionamos en la rama destino(main) e indicamos en el comando la rama origen(fix-funcionalidad-.....).
En este punto se produce un CONFLICTO que resolveremos con Visual Studio Code como vimos en clase.
Por último elegís el código que más os convenga de las dos ramas fix-funcionalidad-.... y hacéis el último commit.
El alumno deberá entregar un archivo writer con las capturas de pantalla de cada commit indicando con un par de frases el procedimiento realizado.

Realizar el procedimiento antes descrito con 3 ramas.

Si la liais parda no os preocupéis porque se puede volver a un commit en concreto con el comando "git reset --hard "nombe_del_commit". Investigadlo.

Comandos de interés....

git log --oneline --graph -all (para ver gráficamente los commits)

git merge rama_origen (fusión de la rama remota con la actual. Puede dar conflicto no no.... )

git branch (para ver las ramas que tenemos)

git chaeckout -b nueva_rama (creamos una rama del código actual y nos cambiamos a ella)

git checkout nombre_rama (nos cambiamos de rama)