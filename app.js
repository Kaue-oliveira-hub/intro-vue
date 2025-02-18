

console.log(Vue);

//vamos hacer una desestructuración de Vue

const { createApp, ref } = Vue;

const app = createApp({
 template: `
 <h1>{{ mensaje }}</h1>
 <h2>{{ auctor }}</h2>
 <p> Desde app.js</p>
 `,
// QUE ES UNA UNA VARIABLE REACTIVA
 setup(){
 const mensaje =  ref("I'm Batman");
const auctor = ref('Batman');

 setTimeout(() => {
    mensaje.value = 'Soy Goku';
    auctor.value = 'Goku';
    console.log(mensaje);
 }, 1000);

    return {
        mensaje,
        auctor,
    }}

});

app.mount('#myApp');