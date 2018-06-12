$( document ).ready(function(){

    const images = {
        one:'https://image.flaticon.com/icons/svg/843/843306.svg',
        two:'https://image.flaticon.com/icons/png/512/843/843255.png',
        three:'https://image.flaticon.com/icons/svg/843/843357.svg'
    }

    $('.butt').click(function(){
        const button = $(this).attr('id');
        const img = $('#center-image');
        console.log(button)
        switch (button){
            case 'button1':
                img.attr('src',images.one);
                break;
            case 'button2':
                img.attr('src',images.two);
                break;
            case 'button3':
                img.attr('src',images.three)
                
        }
    })
    

}) 




