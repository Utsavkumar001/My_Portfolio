// Typing Animation

const text = ["AI Engineer", "ML Developer", "Future Tech Founder"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){
    current = text[i];

    if(!isDeleting){
        document.getElementById("typing").textContent =
        current.substring(0,j++);
        
        if(j > current.length){
            isDeleting = true;
            setTimeout(type,1000);
            return;
        }
    }else{
        document.getElementById("typing").textContent =
        current.substring(0,j--);

        if(j==0){
            isDeleting=false;
            i=(i+1)%text.length;
        }
    }

    setTimeout(type,80);
}

type();


// Dark / Light Theme

function toggleTheme(){
    document.body.classList.toggle("light");
}
