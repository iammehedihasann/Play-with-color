// Using event lister method for change color 

const baton = document.querySelectorAll('.box');
const body = document.querySelector('body');
//  baton.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click',function(e){
//         // console.log(e);
//         // console.log(e.target);
//         if(e.target.id === 'gray'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'green'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'blue'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'yellow'){
//             body.style.backgroundColor = e.target.id;
//         }
         
//         if(e.target.id === 'purple'){
//             body.style.backgroundColor = e.target.id;
//         }
         
//     })

//   Using onclic method....................................
// function changeBackgroundColor(color) {
//      if(color === 'gray'){
//         document.body.style.backgroundColor = color;
//      }
//      if(color === 'green'){
//         document.body.style.backgroundColor = color;
//      }
//      if(color === 'yellow'){
//         document.body.style.backgroundColor = color;
//      }
//      if(color === 'blue'){
//         document.body.style.backgroundColor = color;
//      }
//      if(color === 'purple'){
//         document.body.style.backgroundColor = color;
//      }
   
// }


// Using switch case method for change color..................
 function changeBackgroundColor(color){
         switch(color) {
            case 'gray':
                document.body.style.backgroundColor = 'gray';
                break;
            case 'green':
            document.body.style.backgroundColor = 'green';
            break;
            case 'blue':
            document.body.style.backgroundColor = 'blue';
            break;
            case 'yellow':
            document.body.style.backgroundColor = 'yellow';
            break;
            
         }
 }
