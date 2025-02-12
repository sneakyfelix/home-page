function onhover(id) {


    let description = document.querySelector('.onhover');  

    let textToAdd = {
        'oh': "reach for me uses ml5.js library and a machine learning model called HandPose, which tracks users finger positions. in this work, users can reach towards the text with their thumb and index finger. sometimes we don't always know/can reach what were looking for. ",
        'can': " i've always struggled with the idea of there never been a right answer. it's defeating, in many ways. no is an in person and online experience that allows users the opporutity to engage with an empty text box with little to no direction. users may attempt to guess a value or prompt but are left with unease and disatisfaction. ",
        'brat': " Brat but It's Totally Not Brat Just You, fragments lyrics as an attempt to reconstruct a memory, really pieceing together moments while desperately resisting integration or harmony. the act of remixing becomes a vehicle for the deconstruction and reconstruction of memory. just as memory itself is a fragmented and reconstructive process, so too is the manipulation of lyrics within the work, as they can parallel the difficulties and tension of re-experiencing the past.",
        'anon': " we spend so much of our lives “shouting into the void” of screens to no one in particular. it’s completely anonymous asks us instead to approach this digital connection with tenderness and curiosity. in line with internet forums and social media platforms of today, the work begins an online conversation that moves behind the linearity and immediacy of “in-person” conversations and prompts us to examine the value of asking a question and receiving an answer.",
        'payton': " this project documents and examines the beginnings and endings of a relationship. part of me wanted to honor it while the other part wanted to dissect it in and out and figure out what exactly went \"wrong.\" i found making such a large scale archival project to be incredibly cathartic. it gave me ownership, authority, and validity to the relationship. it made it real. i keep coming to question if this site born because of the constant erasure of queer narratives within the irl world?"
    };

    description.appendChild(document.createTextNode(textToAdd[id]));
    
    // let image1 = './assets/yesyouweb.jpeg';
    // let image2 = './assets/yesyouweb.jpeg';
    // let image3 = './assets/yesyouweb.jpeg';
    // let image4 = './assets/yesyouweb.jpeg';
    // let image5 = './assets/yesyouweb.jpeg';
    // let image6 = './assets/paytonweb.jpeg';

   //  let image = document.querySelector('.onhover2');

     //let imagesToAdd = {
      //  'oh': image1,
       // 'ugh': image2,
        //'can': image3,
        //'brat': image4,
        //'anon': image5, 
      //  'payton': image6, 
   // }; 

    // let imgElement = document.createElement('img'); 
    // imgElement.src = imagesToAdd[id];  
    //image.appendChild(imgElement); 
    
}
    


    function removeText() {
        let paragraph = document.querySelector('.onhover');
        paragraph.innerHTML = ''; 

        //let imageholder = document.querySelector('.onhover2');
       // imageholder.innerHTML = '';

    }



    function mephoto() {

        

    }


    function alertstupidpeople () {

        alert("move your mose around...");

    }

    alertstupidpeople()