export function linha(){
    document.write(" <hr>");

}
export function pular(){
    document.write("<br><br>");

}
export function mostraTitulo(msg){
    
    document.write("<h1>"+"&gt;&gt;"+msg+"&lt;&lt;"+"</h1>");
    linha();
    pular();

}
export function mostraconteúdo(msg){

    document.write("<h2>"+msg+"</h2>");
    pular();


}
export function mostracodigo(msg){

document.write("<h3> - "+msg+"</h3>");


}
export function mostrarodapé(msg){
    linha();
    document.write("<h5>"+msg+"</h5>");
    pular();

}
export function exibir(){
    window.alert("MODIFICADO")
         mostraTitulo(titulo);
         mostraconteúdo(primeiro);
         document.write("<button>Cria</button>");
         linha();     
    
       
         document.write("<li>"+"NOME: "+input.value+"</li>");
 
 mostrarodapé("ALURA LEVEL UP");
     }
     import{mostraTitulo} from"./fun.js";
     mostraTitulo("zxvczd");