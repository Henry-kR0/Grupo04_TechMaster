document.addEventListener('DOMContentLoaded', () => {
    // --- MENÚ DESPLEGABLE RESPONSIVE ---
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // --- FILTRO DINÁMICO DE SERVICIOS ---
    const botonesFiltro = document.querySelectorAll('.btn-filter');
    const tarjetasProductos = document.querySelectorAll('.item-tarjeta');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            // Remover estado activo de botones previos
            botonesFiltro.forEach(btn => btn.classList.remove('active'));
            boton.classList.add('active');

            const categoriaSeleccionada = boton.getAttribute('data-filter');

            tarjetasProductos.forEach(tarjeta => {
                const categoriaTarjeta = tarjeta.getAttribute('data-category');

                if (categoriaSeleccionada === 'todos' || categoriaTarjeta === categoriaSeleccionada) {
                    tarjeta.style.display = 'block';
                } else {
                    tarjeta.style.display = 'none';
                }
            });
        });
    });

    // --- VALIDACIÓN E INTERACCIÓN DEL FORMULARIO DE CONTACTO ---
    const formContacto = document.getElementById('formContacto');
    const contenedorAlerta = document.getElementById('alerta-formulario');

    if (formContacto) {
        formContacto.addEventListener('submit', (e) => {
            e.preventDefault(); // Previene que la página se recargue

            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            // Limpiar alertas previas
            contenedorAlerta.innerHTML = '';

            // Validación de campos vacíos
            // Validación de campos vacíos
if (!nombre || !correo || !mensaje) {
    mostrarNotificacion('Por favor, rellena todos los campos obligatorios del formulario.', 'danger');
    return;
}

// Validar correo electrónico
if (!correo.includes('@') || !correo.includes('.com')) {
    mostrarNotificacion('Por favor, ingresa un correo electrónico válido.', 'warning');
    return;
}

// Simulación de envío exitoso sin backend
mostrarNotificacion('¡Consulta enviada con éxito! Nos comunicaremos contigo pronto.', 'success');
formContacto.reset();

            // Simulación de envío exitoso sin backend
            formContacto.reset(); // Limpia los inputs del formulario
        });
    }

    // Función auxiliar para renderizar alertas dinámicas
    function mostrarNotificacion(mensaje, tipo) {
        const divAlerta = document.createElement('div');
        divAlerta.className = `alert alert-${tipo}`;
        divAlerta.textContent = mensaje;
        contenedorAlerta.appendChild(divAlerta);
    }
});
