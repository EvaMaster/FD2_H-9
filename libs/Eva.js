const body = document.body;
function Connect(){
    Connect.prototype.addFile = (file, name)=>{
        function createScript(){
            let script = document.createElement('script');
            script.setAttribute('src', file);
            if(name !==undefined){
                script.setAttribute('id', name);
            }
            body.insertBefore(script, body.lastChild);
        };
        let typeFile = file.split('.');
        if(typeFile[typeFile.length-1] =='js'){
            createScript(file);
        }
        else{
            console.log('invalid file extension');
        };
    };
    Connect.prototype.removeFile = (name, path)=>{
        if(name !==undefined){
            let x = document.getElementById(name);
            if(x==null){
                const xx = document.getElementsByTagName('script');
                for(let i=0, j = xx.length; i<j;i++){
                    if(xx[i].getAttribute('src') == name){
                        console.log(xx[i]);
                        body.removeChild(xx[i]);
                        break;
                    };
                };
            }
            else {body.removeChild(x)};
        }
    };
}
let fileJs = new Connect();

function CreateElem(){
    CreateElem.prototype.addElem = (tagName, className, parName)=>{
        let x = document.createElement(tagName);
        x.classList.add(className);
        parName.insertBefore(x, parName.firstElementChild);
    }
    CreateElem.prototype.removeElem = (className, classNameParent)=>{
        let x = document.querySelector('.'+`${className}`),
            y = document.querySelector('.'+`${classNameParent}`);
        y.removeChild(x);
    }
}
let elemDom = new CreateElem();
