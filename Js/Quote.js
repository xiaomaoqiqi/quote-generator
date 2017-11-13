// Store quotes in an array!
var Quotes = [
    
    {
        quote:'Even though some of you are pretty thin, you all have fat hearts, and that’s what matters.',
        author: '-- fat Amy'
    }, 
    
    {
        quote: 'I set fires to feel joy.',
        author: '-- Lilly'
    }, 
    
    {
        quote: 'You’re one of the a cappella girls. I’m one of those a cappella boys, and we’re gonna have aca-children. It’s inevitable.',
        author: '-- Jesse'
    },
    
    {
        quote: 'Well, sometimes I have the feeling I can do crystal meth, but then I think, ‘Mmm, better not.’',
        author: '-- fat Amy'
    },
    
    {
        quote: 'I’m not drunk; you’re just blurry',
        author: '-- Jesse'
    },
    
    {
        quote: 'I am living with nodes, but I am a survivor.  I am living with limitations…  I have nodes.', 
        author: '-- Chloe'
    },
    
    {
        quote: 'This is Dixie Chick serious.', 
        author: '-- Aubrey'
    },
    
    {
        quote: 'I am just gonna pump and dump.',
        author: '-- fat Amy'
    },
    
    {
        quote: 'Nothing makes a girl feel more like a woman than a man who sings like a boy',
        author: '-- Gail'
    },
    
    {
        quote: 'No English? ...Yes English? Just tell me where you are at…with English',
        author: '-- Beca'
    },
    
    {
        quote: 'I set fire to feel joy!',
        author: '-- Lilly'
    }
    
    ];
    
// New JS function to display random quotes
var randomNum;
var displayQuotes;
var curr_ind;
function getQuotes(){
    do {
        
        randomNum = Math.floor(Math.random()*Quotes.length);
    }while (curr_ind===randomNum)
    
     curr_ind = randomNum;
     document.getElementById('Quotes').innerHTML = Quotes[randomNum].quote;
     document.getElementById('Author').innerHTML = Quotes[randomNum].author;
      
}