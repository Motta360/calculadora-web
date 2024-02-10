"use strict"

// Parte de Potencia
function Expoente(a,b) {
    let c = Math.pow(a,b);
    return c;
}

let btnP = document.querySelector("#pot");

btnP.addEventListener("click",
    function () {
        let a = Number(document.querySelector("#txt").value);
        let b = Number(document.querySelector("#pot1").value);
        let c = Expoente(a,b);
        document.querySelector("#txt").value = c;
        document.querySelector("#pot1").value = "";
        
    }
)

// Fim potencia


//parte de raiz

function raiz(a,b) {
    let c = a**(1/b);
    return c;
    
}

let btnS = document.querySelector("#Raiz");

btnS.addEventListener("click",
    function () {
        let a = Number(document.querySelector("#txt").value);
        let b = Number(document.getElementById("indice").value);
        let c = raiz(a,b);
        document.querySelector("#txt").value = c;
        document.querySelector("#indice").value = "";
    }
)
// fim da raiz

//parte expressoes

let btn = document.querySelector("#resolver");
btn.addEventListener("click",
    function () {
        let quantv = 0;
        let quantd = 0;
        let quanta = 0;
        let quantm = 0;
        let primeiroindice=0;
        let ultimoindice = 0;
        let listaValores = [];
        let listaOperacoes = [];
        let listaValoresnovos = [];
        let exp = document.querySelector("#txt").value;
        console.log(exp);
        for(let i = 0; i < exp.length;i+=1 ){
            if(exp[i]=='+' || exp[i]=='-' || exp[i]=='*' || exp[i]=='/'){
                listaOperacoes.push(exp[i]);
                ultimoindice = i;
                let x = ""
                for (let z = primeiroindice; z < ultimoindice; z++) {
                    x +=exp[z];
                
                }
                listaValores.push(x);
                primeiroindice = i+1;
            }
            }
        let y = "";
        for (let i = primeiroindice; i < exp.length; i++) {
            y+=exp[i];
            
        }
        listaValores.push(y);
        for (let i = 0; i < listaValores.length; i++) {
            listaValoresnovos.push(listaValores[i]);
            if(i<listaOperacoes.length){
                listaValoresnovos.push(listaOperacoes[i]);}
        }
        for (let i = 0; i < listaValoresnovos.length; i++) {
            if(listaValoresnovos[i] == '*'){
                quantv +=1;
            }
        }
        for (let i = 0; i < listaValoresnovos.length; i++) {
            if(listaValoresnovos[i] == '/'){
                quantd +=1;
            }
            
        }
        for (let i = 0; i < listaValoresnovos.length; i++) {
            if(listaValoresnovos[i] == '+'){
                quanta +=1;
            }
            
        }
        for (let i = 0; i < listaValoresnovos.length; i++) {
            if(listaValoresnovos[i] == '-'){
                quantm +=1;
            }
            
        }
        
        while (quantd !=0) {
            
        
            let i = 0;
            while (i < listaValoresnovos.length) {
                if(listaValoresnovos[i] == '/'){
                    let valor = Number(listaValoresnovos[i-1])/Number(listaValoresnovos[i+1]);
                    listaValoresnovos.splice(i-1,3,valor);
                }
                i+=1;
            }
            quantd-=1;
        }
        while (quantv !=0) {
            
        
            let i = 0;
            while (i < listaValoresnovos.length) {
                if(listaValoresnovos[i] == '*'){
                    let valor = Number(listaValoresnovos[i-1])*Number(listaValoresnovos[i+1]);
                    listaValoresnovos.splice(i-1,3,valor);
                }
                i+=1;
            }
            quantv-=1;
        }
        while (quanta !=0) {
            
        
            let i = 0;
            while (i < listaValoresnovos.length) {
                if(listaValoresnovos[i] == '+'){
                    let valor = Number(listaValoresnovos[i-1])+Number(listaValoresnovos[i+1]);
                    listaValoresnovos.splice(i-1,3,valor);
                }
                i+=1;
            }
            quanta-=1;
        }
        while (quantm !=0) {
            
        
            let i = 0;
            while (i < listaValoresnovos.length) {
                if(listaValoresnovos[i] == '-'){
                    let valor = Number(listaValoresnovos[i-1])-Number(listaValoresnovos[i+1]);
                    listaValoresnovos.splice(i-1,3,valor);
                }
                i+=1;
            }
            quantm-=1;
        }
        document.querySelector("#txt").value = listaValoresnovos[0];
            
        }
        
    
)