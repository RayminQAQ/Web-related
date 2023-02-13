/* Basic Datatype and write-in */
    let name = "小白";
    let num = 0;
    let bool = true;
    document.write("你的名子是: \"" + name + "\"<br/><hr/>");

/* String syntax(manipulation) */
    let str = "Hello world";
    document.write(str.length + "<br/>");
    document.write(str.toUpperCase() + "<br/>");
    document.write(str.toLowerCase() + "<br/>");
    document.write(str.charAt(1) + "<br/>"); // output: str[1]
    document.write(str.indexOf("e") + "<br/>"); // output: "e" index, if not found than output -1
    document.write(str.substring(0, 5) + "<br/><hr/>");

/* Number syntax(manipulation), using js library */
    let number = -6;
    document.write(6+8*number + "<br/>");
    document.write(Math.abs(number) + "<br/>"); 
    document.write(Math.pow(2, 8) + "<br/>");
    document.write(Math.max(1, 2, 3, 4, 5, 6, 7, 8) + "<br/>");
    document.write(Math.round(Math.random() * 10) + "<br/><hr/>");

/* Array */
    let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
    let array2 = [true, "It's str here", 100];
    document.write(array1.length + "<br/>"); // the sum of element
    document.write(array2 + "<br/><hr/>");

/* 2-dimension Array, and nested Array*/
    var array2D = [
        [1,2,3], 
        [4,5,6],
        [7,8,9],
        [0]
    ]; 
    // array2D[0][0] -> 1, [0][1] -> 2, [0][3] -> 3, ...

/* Object: 萬物在js皆是物件，延伸json */
    var person = {
        name: "Raymin",
        age: 18,
        is_male: true,
        print_name: function(){
            document.write(this.name);
        }
    };

    person.print_name();

    // create movie obj with 【KEY(鍵)】 and 【value(值)】
    var movie = {
    //   KEY1:      VALUE1
        title: "刻在你心底的名字",
        maker: "氧氣電影",
        duration: 114,
        actor: 114,
        actors:[
            // obj1 in this array
            {
                name: "陳昊森",
                age: 26,
                is_male: true
            },
            // obj2 in this array
            {
                name: "曾敬驊",
                age: 25,
                is_male: true
            }
        ]
    };

    document.write("<hr/>");
/* Class, building a phone class for example */
    class Phone{
        constructor(number, year, is_waterproof){
            this.number = number;
            this.year = year;
            this.is_waterproof = is_waterproof;
        }
        phone_age(){
            var current_year = 2023;
            return current_year - this.year;
        }
    }

    var phone1 = new Phone("123", 2020, false); // 創建class物件
    document.write(phone1.phone_age());



/* Simple calculator, using function and type-casting */
    // let my_num1 = prompt("Input number1");
    // let my_num2 = prompt("Input number2"); 
    // function add(num1, num2){
    //     // TYPE CASTING in js, by default the datatype is string
    //     num1 = parseFloat(num1);
    //     mum2 = parseFloat(num2);
    //     return num1 + num2;
    // }
    // document.write("The simple calaulator result: " + add(my_num1, my_num2));

/* Simple login */
    // var info = {
    //     name: "Raymin",
    //     gender: "male",
    //     password: 00000000,
    //     vip: false
    // };

    // var entry_count = 0;
    // var entry_limit = 3;
    // while(entry_count < entry_limit){
    //     let user_prompt = parseInt(prompt("Enter login password: "));
    //     if(user_prompt === info.zpassword){
    //         alert("登入成功: Hello " + info.name);
    //         break;
    //     }
    //     entry_count++;
    // }

/* Ask and Question */
    // var questionCollection = [
    //     {
    //         prompt:"1+1=?",
    //         answer:"2"
    //     },{
    //         prompt:"3*3=?",
    //         answer:"9"
    //     },{
    //         prompt:"3/3=?",
    //         answer:"1"
    //     }
    // ]
    // for(var i=0;i<questionCollection.length;i++){
    //     var user_answer = prompt(questionCollection[i].prompt);
    //     if(user_answer == questionCollection[i].answer){
    //         alert("You got the right answer");
    //         continue;
    //     }
    //     alert("You got the wrong answer");
    // }