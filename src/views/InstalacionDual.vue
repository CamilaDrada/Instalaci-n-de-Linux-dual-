<template>
  <div>
    <header id="main-header">
      <img src="@/assets/Images/logo.jpeg" alt="Logo del Sitio" id="logo">
      <h1>Cómo instalar Linux en Dual con Windows (10-11)</h1>
    </header>

    <div id="contenedor-principal">
      <div class="rectangulo px">
        Instalar Linux en tu computadora puede transformar tu experiencia de usuario, ofreciendo mayor seguridad, flexibilidad y control sobre tu sistema. Linux es ideal para desarrolladores, entusiastas de la tecnología y aquellos que buscan un sistema operativo gratuito y de código abierto. Con nuestra guía paso a paso, la instalación es sencilla y accesible para todos. ¡Atrévete a descubrir el mundo de Linux y sus beneficios!
      </div>
    </div>

    <div class="container">
      <section id="main-content">
        <h2>Requisitos Previos</h2>
        <ul>
          <li>Generar una copia de Seguridad (Opcional)</li>
          <li>Sistema operativo Windows 10/11</li>
          <li>Unidad USB de +8GB</li>
          <li>Espacio en Disco libre</li>
        </ul>

        <h2>Paso 1: Descargar Ubuntu producto de Linux</h2>
        <p>Ve al sitio web oficial de Ubuntu y descarga la versión a instalar. <a href="https://ubuntu.com/download" target="_blank">Click AQUÍ</a></p>
        <a href="https://ubuntu.com/download" target="_blank">
          <img src="@/assets/Images/CapUbuntu.png" alt="Descargar Ubuntu">
        </a>

        <h2>Paso 2: Crear un USB de Arranque</h2>
        <p><a href="https://rufus.ie/es/" target="_blank" rel="noopener noreferrer">Descarga e instala Rufus,</a> una herramienta para crear unidades USB de arranque. Conecta la memoria USB y procede a formatear, con el fin de evitar un error.</p>
        <a href="https://rufus.ie/" target="_blank">
          <img src="@/assets/Images/CapRufus.png" alt="Crear USB de Arranque con Rufus">
          <p>(Descarga la versión rufus-4.5.exe)</p>
        </a>

        <h2>Paso 3: Crear imagen ISO en USB</h2>
        <p>Una vez instalado Rufus, ábrelo y selecciona la versión de Ubuntu descargada y selecciona el dispositivo sobre el cual se instalará la imagen (nuestra USB).</p>
        <img src="@/assets/Images/ISO.jpeg" alt="Reducir Volumen en Windows">
        <p>(Así se debe ver)</p>

        <p>Al dar click en 'empezar' te saldrá esta ventana, selecciona la opción que dice: "Escribir en modo imagen ISO (Recomendado)".</p>
        <img src="@/assets/Images/ISOHybrid.jpeg">
        <p>Cuando te salga esta ventana de advertencia dale en 'ACEPTAR'.</p>
        <img src="@/assets/Images/Advr.jpeg">
        <p>Desde este momento comenzamos la instalación, puede tardar un par de minutos. Una vez finalice, dale click en 'cerrar'.</p>

        <h2>Paso 4: Cómo iniciar desde la USB e instalación de Linux</h2>
        <p>Reinicia tu computadora y conecta tu USB. Al iniciar el encendido, procede a entrar a la BIOS con la tecla de acceso (en la mayoría de dispositivos 'F2'). Esto puede tomarte varios intentos. Una vez en la BIOS, vamos hasta el apartado de 'BOOT' y seleccionamos la opción 'UEFI NVME'.</p>
        <img src="@/assets/Images/BIOS.jpeg" alt="BIOS">
        <p>Cambia la opción de encendido a la memoria USB.</p>
        <img src="@/assets/Images/BIOS1.jpeg" alt="BIOS">
        <p>Guarda los cambios y reinicia. Ahora debería empezar desde la memoria USB.</p>

        <h2>Paso 5: Instalar Ubuntu</h2>
        <p>Cuando el sistema inicie, deberá empezar en el GRUB y seleccionamos la opción 'Probar o instalar Ubuntu', presionamos 'Enter'.</p>
        <img src="@/assets/Images/GRUV1.jpeg" alt="Seleccionar Tipo de Instalación">
        <p>Una vez inicie el sistema, aparecerá la ventana de instalación de Ubuntu y le darás click en 'Instalar Ubuntu'.</p>
        <img src="@/assets/Images/Inicio.jpeg" alt="Inicio">
        <p>Dentro del instalador deberás seleccionar tu idioma y distribución de teclado a elección, conectarte a una red de internet mediante un cable ethernet o una red inalámbrica.</p>
        <p>A continuación, seleccionarás la opción 'instalación normal'.</p>
        <img src="@/assets/Images/Instal.jpeg" alt="Instalar">
        <p>En el siguiente paso, seleccionaremos la opción 'Instalar software de terceros' y damos click en 'continuar'.</p>
        <p>Ahora seleccionaremos la opción instalar Ubuntu junto a Windows boot manager y damos click en 'instalar ahora'.</p>
        <img src="@/assets/Images/final.jpeg">
        <p>En el siguiente paso le daremos el espacio deseado a cada sistema operativo. Una vez decidas cuánto espacio deseas para cada uno, le daremos click en 'siguiente'.</p>
        <img src="@/assets/Images/espacio.jpeg">
        <p>Ahora seleccionaremos la zona horaria del lugar en donde nos encontremos, si es Colombia nos ubicaremos en Bogotá.</p>
        <img src="@/assets/Images/mapa.jpeg">
        <p>Crearemos una cuenta con su respectiva contraseña, recuerda guardarla.</p>
        <img src="@/assets/Images/usuario.jpeg">
        <p>Darás click en 'siguiente', seleccionaremos un tema a nuestro gusto y aceptamos para continuar la instalación del sistema. Esto puede tardar un par de minutos.</p>
        <img src="@/assets/Images/Instalando.jpeg">
        <p>Cuando finalice, seleccionamos 'reiniciar ahora', retiraremos la memoria USB.</p>

        <h2>Paso 6: Primer arranque de Linux</h2>
        <p>El sistema arrancará con GRUB, selecciona el sistema operativo Linux y presiona 'Enter'.</p>
        <img src="@/assets/Images/GRUV.jpeg" alt="Finalizar Instalación">
        <p>Revisa que todo funcione correctamente y desde ahora cuentas con ambos sistemas operativos para trabajar libremente a tu gusto y desarrollo. Puedes cambiar entre uno y otro al iniciar tu computador en el GRUB.</p>
      </section>
    </div>

    <div id="contenedor-principal">
      <div class="rectangulo px">Esperamos este paso a paso de instalación de dual boot entre Linux y Windows haya sido de gran ayuda.</div>
    </div>

    <footer id="main-footer">
      <p>&copy; 2024 Tutoriales de Instalación</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'InstalacionDual'
}
</script>

<style scoped>
#main-header {
  text-align: center;
  margin-bottom: 20px;
}
#logo {
  width: 100px;
}
.rectangulo {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
.container {
  max-width: 800px;
  margin: auto;
}
#main-footer {
  text-align: center;
  margin-top: 20px;
}
</style>
