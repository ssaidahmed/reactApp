import React from 'react';

const Comments = function(props){
    let displayBlock={

    }
    let displayNone={

    }
    let submitComments = ()=>{
        let comments = document.getElementById('comments');
        let textarea = document.getElementById('textarea');
        let ph_content = document.getElementById('ph_content');
        if(textarea.innerText === ''){
            
            ph_content.innerText = 'Текстовое поле не должно быть пустым!';
            ph_content.style.color='red';
            // alert('пустой комментарий не бывает)');
            return;
        }
        let elementDiv = document.createElement('div');
        elementDiv.className='transform';
        let elementDiv1 = document.createElement('div');
        elementDiv1.className='transform1';

        let elementP = document.createElement('p');
        let placeholder = document.getElementById('placeholder');
        let date = new Date();
        let dateString = date.getHours()+":"+date.getMinutes();

        let elem = document.createElement('div');
        let text = document.createTextNode(textarea.innerText);
        elementP.appendChild(document.createTextNode(dateString));
        elementP.className='time';
        
        elem.appendChild(text);
        elem.appendChild(elementDiv);
        elem.appendChild(elementDiv1);
        elem.appendChild(elementP);
        comments.appendChild(elem);
        elem.className="speech";
        textarea.innerHTML='';
        placeholder.style.display="block";
        ph_content.innerText = 'Комментировать...';
        ph_content.style.color = '#828282';
    }
    let resizeTextarea = function(){
        let textarea = document.getElementById('textarea');
        let placeholder = document.getElementById('placeholder');
        
        //alert(textarea.innerHTML.trim());    
        if(textarea.innerHTML.trim()===''){
            // alert("dsdsds"); 
            placeholder.style.display="block";
            
        }else if(textarea.innerHTML.trim()!==''){
            // alert("2dsdsds");
            placeholder.style.display="none";
            
        }
        
    }
    return(
        <div className="page">
            <p>Задача
            Выровнять блочный элемент заданной ширины по центру горизонтали веб-страницы.

            Решение
            По умолчанию ширина блочного элемента принимает значение auto, и он, как правило, занимает всю доступную ширину.
            Поэтому описанным методом по центру можно выровнять только такой элемент, у которого явно задана ширина в процентах или пикселах.
            После чего к стилю слоя следует добавить отступ слева (стилевое свойство margin-left) и справа (margin-right) со значением auto.
            Впрочем, также можно воспользоваться универсальным свойством margin со значением auto (пример 1).
            Описание
            Трансформирует элемент, в частности, позволяет его масштабировать, вращать, сдвигать, наклонять, а также комбинировать виды трансформаций.

            Задача Выровнять блочный элемент заданной ширины по центру горизонтали веб-страницы. Решение По умолчанию ширина блочного элемента принимает значение auto,
             и он, как правило, занимает всю доступную ширину. Поэтому описанным методом по центру можно выровнять только такой элемент, у которого явно
              задана ширина в процентах или пикселах. После чего к стилю слоя следует добавить отступ слева (стилевое свойство margin-left) и справа (margin-right)
               со значением auto. Впрочем, также можно воспользоваться универсальным свойством margin со значением auto (пример 1). Описание Трансформирует элемент, в частности, позволяет
                его масштабировать, вращать, сдвигать, наклонять, а также комбинировать виды трансформаций. Синтаксис transform: | none Значения функция Функция трансформации.
                 none Отменяет действие трансформации. Функции трансформации matrix Задаёт матрицу преобразований. rotate Поворот элемента на заданный угол относительно точки трансформации,
                  задаваемой свойством transform-origin. transform: rotate(угол) scale Масштаб элемента по горизонтали и вертикали. transform: scale(sx[, sy]);
                   Значение больше 1 увеличивает масштаб элемента, меньше 1 — уменьшает масштаб. scaleX Масштабирует элемент по горизонтали. transform: scaleX(sx); scaleY Масштабирует
                    элемент по вертикали. transform: scaleY(sy); skewX Наклоняет элемент на заданный угол по вертикали. transform: skewX(угол) skewY Наклоняет элемент
                     на заданный угол по горизонтали. transform: skewY(угол) translate Сдвигает элемент на заданное значение по горизонтали и вертикали. transform: translate(tx[, ty])
                      translateX Сдвигает элемент по горизонтали на указанное значение. Положительное значение сдвигает вправо, отрицательное влево. transform: translateX(tx) translateY Сдвигает
                       элемент по вертикали на указанное значение. Положительное значение сдвигает вниз, отрицательное вверх. transform: translateY(ty) Пример 1. Выравнивание слоя по центру Посмотреть пример Посмотреть
                        пример Результат примера показан на рис. 1.
            </p>
            <div className="im-page--chat-input">
                    
                    <div className="input--txt-wrap" >
                        <button id="buttonnn" type="button" onClick={submitComments}  >
                            
                        </button>    
                        
                        <div id="textarea" className="textarea" tabIndex="0" contentEditable="true" onKeyPress={resizeTextarea} onKeyUp={resizeTextarea}>
                            
                        </div>
                        
                        <div id="placeholder" className="placeholder ph_content" >
                                <div className="ph_input">
                                    <div id="ph_content" className="ph_content">Комментировать…</div>
                                </div>
                        </div>
                    
                    </div>
                    
                
                
            </div>
            <div id="comments" className="comments">
                        
            </div>
        </div>
        );
}

export default Comments;