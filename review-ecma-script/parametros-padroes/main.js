let historia = function historiaFeliz(dog = 'Thor', gosta = 'brincar', dono = 'Marcos'){
    return `O cachorro ${dog}, gosta de ${gosta}, seu dono é o ${dono}.`;
} 

document.getElementById('teste').innerHTML = historia('Repolho', 'correr', 'João');