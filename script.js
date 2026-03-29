// GRÁFICA
const ctx = document.getElementById('grafica').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
        datasets: [{
            label: 'Kg recogidos',
            data: [120,150,180,220,300,400,500,450,380,320,250,200],
        }]
    }
});

// ANIMACIÓN SCROLL
const elements = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});