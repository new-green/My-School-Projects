$(document).ready(function(){
    const grid = $('#grid');
    const renkPaleti = $('#renkPaleti')
    let seciliRenk = 'black'

    for (let i=0; i<256; i++){
        grid.append('<div class="pixel"></div>')
    }
    renkPaleti.on('click','.renk', function(){
        seciliRenk = $(this).css('background-color')
    })
    grid.on('mouseover', '.pixel', function(e){
        if(e.buttons === 1){
            $(this).css('background-color', seciliRenk);
        }
    })

    $('#temizle').click(function(){
        $('.pixel').css('background-color', '')
    })
    $('#kaydet').click(function(){
        html2canvas(grid[0]).then(canvas => {
            const link = document.createElement('a')
            link.href = canvas.toDataURL('image/png')
            link.download = 'pixel.png'
            link.click()
        })
    })
});