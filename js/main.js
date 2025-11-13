

document.addEventListener('DOMContentLoaded', function() {
    $('.asas').slick({
        /*infinite: true,*/
        slidesToShow: 3,
        slidesToScroll: 1, 
        dots: false,
		arrov: true,

        responsive: [ 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });
});

  

    
function positionSlickArrows() {
    $('.sdsdds').each(function() {
        const $slider = $(this);
        const $activeSlide = $slider.find('.slick-active').first();
        const $image = $activeSlide.find('.BA_elm');
        
        if ($image.length) {
            const imageHeight = $image.outerHeight();
            // Процент от высоты картинки (примерно 50% от высоты картинки)
            const arrowTop = (imageHeight * 0.5) + 'px';
            
            $slider.find('.slick-prev, .slick-next').css('top', arrowTop);
        }
    });
}

// Вызываем при загрузке и изменении размера
$(document).ready(function() {
    positionSlickArrows();
    $(window).on('resize', positionSlickArrows);
    
    // Также при смене слайда
    $('.sdsdds').on('afterChange', positionSlickArrows);
});

// Инициализация слайдера
$('.sdsdds').slick({
    slidesToShow: 2,
    slidesToScroll: 1, 
    dots: false,
    arrows: true,
    responsive: [ 
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
});

document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.BA_elm');
    
    sliders.forEach(slider => {
        const handler = slider.querySelector('.BA_behavor');
        let isDragging = false;

        function startDrag(e) {
            e.preventDefault();
            e.stopPropagation();
            isDragging = true;
            document.addEventListener('mousemove', drag);
            document.addEventListener('touchmove', drag);
            document.addEventListener('mouseup', stopDrag);
            document.addEventListener('touchend', stopDrag);
            slider.classList.add('dragging');
        }

        function drag(e) {
            if (!isDragging) return;
            
            e.preventDefault();
            e.stopPropagation();
            
            const rect = slider.getBoundingClientRect();
            let x;
            
            if (e.type.includes('touch')) {
                x = e.touches[0].clientX - rect.left;
            } else {
                x = e.clientX - rect.left;
            }
            
            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
            
            // Обновляем позицию - percentage определяет, до какой точки видна левая картинка
            slider.style.setProperty('--vvim', `${percentage}%`);
            handler.style.left = `${percentage}%`;
        }

        function stopDrag(e) {
            if (!isDragging) return;
            isDragging = false;
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('mouseup', stopDrag);
            document.removeEventListener('touchend', stopDrag);
            slider.classList.remove('dragging');
        }

        handler.addEventListener('mousedown', startDrag);
        handler.addEventListener('touchstart', startDrag, { passive: false });
        
        handler.addEventListener('mousedown', (e) => {
            e.stopImmediatePropagation();
        });
        handler.addEventListener('touchstart', (e) => {
            e.stopImmediatePropagation();
        }, { passive: false });
    });
});























