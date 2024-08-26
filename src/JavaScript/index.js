function encryptor() {
    let textArea = document.querySelector('#inputText').value;
    let areaEncrytor = document.querySelector('#containerEncryptor') || document.querySelector('#containerWithEncryptor');
    
    let conversiones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let result = textArea.split('').map(char => conversiones[char] || char).join('');
    while (areaEncrytor.firstChild) {
        areaEncrytor.removeChild(areaEncrytor.firstChild)
    }

    areaEncrytor.id = 'containerWithEncryptor';
    areaEncrytor.innerHTML = 
        `<p class="textEncryptor">${result}</p>
        <button class="button" id="buttonCopy">Copiar</button>`
}