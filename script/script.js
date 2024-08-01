function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('gifmegumin');
    var res = document.getElementById('res');
    var fotoContainer = document.getElementById('foto-container');

    function atualizarHora() {
        var data = new Date();
        var horas = String(data.getHours()).padStart(2, '0');
        var minutos = String(data.getMinutes()).padStart(2, '0');
        var horaAtual = `${horas}:${minutos}`;
        
        msg.innerHTML = `Agora são ${horaAtual} horas.`;

        var hora = data.getHours();
        if (hora >= 0 && hora < 12) {
            img.src = "https://gifdb.com/images/high/megumin-speaking-while-touching-her-face-ib8shszf53u3sdiq.gif";
            res.innerHTML = "BOM DIA";
        } else if (hora >= 12 && hora < 18) {
            img.src = "https://i.pinimg.com/originals/59/29/11/59291146fc51ddaadf559a8ad69e1970.gif";
            res.innerHTML = "BOA TARDE";
        } else {
            res.innerHTML = "BOA NOITE";
            img.src = "https://giffiles.alphacoders.com/352/35284.gif";
        }
    }

    atualizarHora();
    setInterval(atualizarHora, 1000);

    fotoContainer.onclick = function() {
        // Para teste, exiba um alerta para confirmar o clique
        //alert('Área clicada');

        // Tocar o áudio
        var audio = new Audio('imagens/click-sound.mp3');
        audio.play().catch(function(error) {
            console.error('Erro ao tocar o áudio:', error);
        });
    };
}
function informar() {
    window.alert("jorge e maravilhoso")
}