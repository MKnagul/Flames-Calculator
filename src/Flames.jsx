
import React,{useState} from "react"

function Flames()
{

    const [flame,setFlame] = useState("Lets see your match");

    function flames_conclu(last_letter){

        switch (last_letter){
            case "f":
                setFlame("Friends");
                break;

            case "l":
                setFlame("Love");
                break;
            case "a":
                setFlame("Affection");
                break;
            case "m":
                setFlame("Marriage");
                break;
            case "e":
                setFlame("Ex-Girlfriend");
                break;
            case "s":
                setFlame("Sister");
                break;
        }

    }


    function totsame(name1,name2){

        let set1 = name1.split('');
        let set2 = name2.split('');
        
        let count = 0;

        for(let i = 0;i<name1.length;i++)
            {
                for(let  j = 0;j<name2.length;j++)
                    {
                        if(set1[i] === set2[j] && set1[i] !== '0'&& set2[j]!== '0')
                            {
                                set1[i] = '0';
                                set2[j] = '0';
                                count = count+2;
                            }
                    }
            }
        console.log(count);
        return count; 
    }


    function DoFlames(name1,name2){

        let tot = name1.length+name2.length;

        let rem = tot - (totsame(name1,name2));

        console.log(rem)

        let a = ['f','l','a','m','e','s'];
        var l = 0;

        let tempcount = 0;
        while(l<5)
            {
                for(let i = 0;i<6;i++)
                    {
                        if(a[i] !=='0'){
                            tempcount=tempcount + 1;
                             }

                        if(tempcount === rem)
                            {
                                a[i] = '0';
                                tempcount = 0;
                                l=l+1;
                                console.log(l)
                            }

                        

                    }
            }

            var le = "";
        for(let i = 0;i<6;i++)
            {
                if(a[i] !=='0')
                    {
                        le = a[i];
                    }
            }

            flames_conclu(le);

    }

  
    
    function setName()
    {
        const first = document.getElementById("firstname").value;
        const second = document.getElementById("secondname").value;

        

        DoFlames(first,second);
    }
    return (
        <>
            <input id="firstname" type="text"  />
            <br />
            <input id="secondname" type="text" ></input>
            <br />
            <button onClick={setName}>check for FLAMES</button>
            <p>{flame}</p>
        </>
    );
    
}


export default Flames