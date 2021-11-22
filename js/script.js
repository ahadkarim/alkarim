//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const canvas = document.querySelector("#my-canvas");



var audio = new Audio('applause.mp3');

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
    showQueans(0);//calling show question ans function
}


//getting all questions and answers from array
function showQueans(index){
    const que_text1 = document.querySelector(".que_text1");
    let que1_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[0].numb + ". " + questions[0].question + " <br><em>Ans: " + questions[0].answer +'</em></span>';
   
    que_text1.innerHTML = que1_tag; //adding new span tag inside que1_tag
    
    const que_text2 = document.querySelector(".que_text2");
    let que2_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[1].numb + ". " + questions[1].question + " <br><em>Ans: " + questions[1].answer +'</em></span>';
    
    que_text2.innerHTML = que2_tag; //adding new span tag inside que2_tag

    const que_text3 = document.querySelector(".que_text3");
    let que3_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[2].numb + ". " + questions[2].question + " <br><em>Ans: " + questions[2].answer +'</em></span>';
   
    que_text3.innerHTML = que3_tag; //adding new span tag inside que3_tag
    
    const que_text4 = document.querySelector(".que_text4");
    let que4_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[3].numb + ". " + questions[3].question + " <br><em>Ans: " + questions[3].answer +'</em></span>';

    que_text4.innerHTML = que4_tag; //adding new span tag inside que4_tag

    const que_text5 = document.querySelector(".que_text5");
    let que5_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[4].numb + ". " + questions[4].question + " <br><em>Ans: " + questions[4].answer +'</em></span>';
   
    que_text5.innerHTML = que5_tag; //adding new span tag inside que5_tag
    
    const que_text6 = document.querySelector(".que_text6");
    let que6_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[5].numb + ". " + questions[5].question + " <br><em>Ans: " + questions[5].answer +'</em></span>';
   
    que_text6.innerHTML = que6_tag; //adding new span tag inside que6_tag

    const que_text7 = document.querySelector(".que_text7");
    let que7_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[6].numb + ". " + questions[6].question + " <br><em>Ans: " + questions[6].answer +'</em></span>';
   
    que_text7.innerHTML = que7_tag; //adding new span tag inside que_tag
    
    const que_text8 = document.querySelector(".que_text8");
    let que8_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[7].numb + ". " + questions[7].question + " <br><em>Ans: " + questions[7].answer +'</em></span>';
   
    que_text8.innerHTML = que8_tag; //adding new span tag inside que8_tag

    const que_text9 = document.querySelector(".que_text9");
    let que9_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[8].numb + ". " + questions[8].question + " <br><em>Ans: " + questions[8].answer +'</em></span>';
   
    que_text9.innerHTML = que9_tag; //adding new span tag inside que9_tag
    
    const que_text10 = document.querySelector(".que_text10");
    let que10_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[9].numb + ". " + questions[9].question + " <br><em>Ans: " + questions[9].answer +'</em></span>';
   
    que_text10.innerHTML = que10_tag; //adding new span tag inside que10_tag

    const que_text11 = document.querySelector(".que_text11");
    let que11_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[10].numb + ". " + questions[10].question + " <br><em>Ans: " + questions[10].answer +'</em></span>';
   
    que_text11.innerHTML = que11_tag; //adding new span tag inside que11_tag
    
    const que_text12 = document.querySelector(".que_text12");
    let que12_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[11].numb + ". " + questions[11].question + " <br><em>Ans: " + questions[11].answer +'</em></span>';
   
    que_text12.innerHTML = que12_tag; //adding new span tag inside que12_tag

    const que_text13 = document.querySelector(".que_text13");
    let que13_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[12].numb + ". " + questions[12].question + " <br><em>Ans: " + questions[12].answer +'</em></span>';
   
    que_text13.innerHTML = que13_tag; //adding new span tag inside que13_tag
    
    const que_text14 = document.querySelector(".que_text14");
    let que14_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[13].numb + ". " + questions[13].question + " <br><em>Ans: " + questions[13].answer +'</em></span>';
   
    que_text14.innerHTML = que14_tag; //adding new span tag inside que14_tag
    const que_text15 = document.querySelector(".que_text15");
    let que15_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[14].numb + ". " + questions[14].question + " <br><em>Ans: " + questions[14].answer +'</em></span>';
   
    que_text15.innerHTML = que15_tag; //adding new span tag inside que15_tag
    
    const que_text16 = document.querySelector(".que_text16");
    let que16_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[15].numb + ". " + questions[15].question + " <br><em>Ans: " + questions[15].answer +'</em></span>';
   
    que_text16.innerHTML = que16_tag; //adding new span tag inside que14_tag

    const que_text17 = document.querySelector(".que_text17");
    let que17_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[16].numb + ". " + questions[16].question + " <br><em>Ans: " + questions[16].answer +'</em></span>';
   
    que_text17.innerHTML = que17_tag; //adding new span tag inside que17_tag
    
    const que_text18 = document.querySelector(".que_text18");
    let que18_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[17].numb + ". " + questions[17].question + " <br><em>Ans: " + questions[17].answer +'</em></span>';
   
    que_text18.innerHTML = que18_tag; //adding new span tag inside que18_tag

    const que_text19 = document.querySelector(".que_text19");
    let que19_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[18].numb + ". " + questions[18].question + " <br><em>Ans: " + questions[18].answer +'</em></span>';
   
    que_text19.innerHTML = que19_tag; //adding new span tag inside que19_tag
    
    const que_text20 = document.querySelector(".que_text20");
    let que20_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[19].numb + ". " + questions[19].question + " <br><em>Ans: " + questions[19].answer +'</em></span>';
   
    que_text20.innerHTML = que20_tag; //adding new span tag inside que20_tag

    const que_text21 = document.querySelector(".que_text21");
    let que21_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[20].numb + ". " + questions[20].question + " <br><em>Ans: " + questions[20].answer +'</em></span>';
   
    que_text21.innerHTML = que21_tag; //adding new span tag inside que21_tag
    
    const que_text22 = document.querySelector(".que_text22");
    let que22_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[21].numb + ". " + questions[21].question + " <br><em>Ans: " + questions[21].answer +'</em></span>';
   
    que_text22.innerHTML = que22_tag; //adding new span tag inside que22_tag

    const que_text23 = document.querySelector(".que_text23");
    let que23_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[22].numb + ". " + questions[22].question + " <br><em>Ans: " + questions[22].answer +'</em></span>';
   
    que_text23.innerHTML = que23_tag; //adding new span tag inside que23_tag
    
    const que_text24 = document.querySelector(".que_text24");
    let que24_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[23].numb + ". " + questions[23].question + " <br><em>Ans: " + questions[23].answer +'</em></span>';
   
    que_text22.innerHTML = que24_tag; //adding new span tag inside que24_tag
    const que_text25 = document.querySelector(".que_text25");
    let que25_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[24].numb + ". " + questions[24].question + " <br><em>Ans: " + questions[24].answer +'</em></span>';
   
    que_text25.innerHTML = que25_tag; //adding new span tag inside que25_tag
    
    const que_text26 = document.querySelector(".que_text26");
    let que26_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[25].numb + ". " + questions[25].question + " <br><em>Ans: " + questions[25].answer +'</em></span>';
   
    que_text26.innerHTML = que26_tag; //adding new span tag inside que26_tag

    const que_text27 = document.querySelector(".que_text27");
    let que27_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[26].numb + ". " + questions[26].question + " <br><em>Ans: " + questions[26].answer +'</em></span>';
   
    que_text27.innerHTML = que27_tag; //adding new span tag inside que27_tag
    
    const que_text28 = document.querySelector(".que_text28");
    let que28_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[27].numb + ". " + questions[27].question + " <br><em>Ans: " + questions[27].answer +'</em></span>';
   
    que_text28.innerHTML = que28_tag; //adding new span tag inside que28_tag

    const que_text29 = document.querySelector(".que_text29");
    let que29_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[28].numb + ". " + questions[28].question + " <br><em>Ans: " + questions[28].answer +'</em></span>';
   
    que_text29.innerHTML = que29_tag; //adding new span tag inside que29_tag
    
    const que_text30 = document.querySelector(".que_text30");
    let que30_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[29].numb + ". " + questions[29].question + " <br><em>Ans: " + questions[29].answer +'</em></span>';
   
    que_text30.innerHTML = que30_tag; //adding new span tag inside que30_tag

    const que_text31 = document.querySelector(".que_text31");
    let que31_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[30].numb + ". " + questions[30].question + " <br><em>Ans: " + questions[30].answer +'</em></span>';
   
    que_text31.innerHTML = que31_tag; //adding new span tag inside que31_tag
    
    const que_text32 = document.querySelector(".que_text32");
    let que32_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[31].numb + ". " + questions[31].question + " <br><em>Ans: " + questions[31].answer +'</em></span>';
   
    que_text32.innerHTML = que32_tag; //adding new span tag inside que32_tag

    const que_text33 = document.querySelector(".que_text33");
    let que33_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[32].numb + ". " + questions[32].question + " <br><em>Ans: " + questions[32].answer +'</em></span>';
   
    que_text33.innerHTML = que33_tag; //adding new span tag inside que33_tag
    
    const que_text34 = document.querySelector(".que_text34");
    let que34_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[33].numb + ". " + questions[33].question + " <br><em>Ans: " + questions[33].answer +'</em></span>';
   
    que_text34.innerHTML = que34_tag; //adding new span tag inside que34_tag
    
    const que_text35 = document.querySelector(".que_text35");
    let que35_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[34].numb + ". " + questions[34].question + " <br><em>Ans: " + questions[34].answer +'</em></span>';
   
    que_text35.innerHTML = que35_tag; //adding new span tag inside que35_tag

    const que_text36 = document.querySelector(".que_text36");
    let que36_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[35].numb + ". " + questions[35].question + " <br><em>Ans: " + questions[35].answer +'</em></span>';
   
    que_text36.innerHTML = que36_tag; //adding new span tag inside que36_tag
    
    const que_text37 = document.querySelector(".que_text37");
    let que37_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[36].numb + ". " + questions[36].question + " <br><em>Ans: " + questions[36].answer +'</em></span>';
   
    que_text37.innerHTML = que37_tag; //adding new span tag inside que37_tag

    const que_text38 = document.querySelector(".que_text38");
    let que38_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[37].numb + ". " + questions[37].question + " <br><em>Ans: " + questions[37].answer +'</em></span>';
   
    que_text38.innerHTML = que38_tag; //adding new span tag inside que38_tag
    
    const que_text39 = document.querySelector(".que_text39");
    let que39_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[38].numb + ". " + questions[38].question + " <br><em>Ans: " + questions[38].answer +'</em></span>';
   
    que_text39.innerHTML = que39_tag; //adding new span tag inside que39_tag
    
    const que_text40 = document.querySelector(".que_text40");
    let que40_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[39].numb + ". " + questions[39].question + " <br><em>Ans: " + questions[39].answer +'</em></span>';
   
    que_text40.innerHTML = que40_tag; //adding new span tag inside que40_tag

    const que_text41 = document.querySelector(".que_text41");
    let que41_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[40].numb + ". " + questions[40].question + " <br><em>Ans: " + questions[40].answer +'</em></span>';
   
    que_text41.innerHTML = que41_tag; //adding new span tag inside quedick_tag
    
    const que_text42 = document.querySelector(".que_text42");
    let que42_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[41].numb + ". " + questions[41].question + " <br><em>Ans: " + questions[41].answer +'</em></span>';
   
    que_text42.innerHTML = que42_tag; //adding new span tag inside que41_tag
    const que_text43 = document.querySelector(".que_text43");
    let que43_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[42].numb + ". " + questions[42].question + " <br><em>Ans: " + questions[42].answer +'</em></span>';
   
    que_text43.innerHTML = que43_tag; //adding new span tag inside que42_tag
    
    const que_text44 = document.querySelector(".que_text44");
    let que44_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[43].numb + ". " + questions[43].question + " <br><em>Ans: " + questions[43].answer +'</em></span>';
   
    que_text44.innerHTML = que44_tag; //adding new span tag inside que42_tag

    const que_text45 = document.querySelector(".que_text45");
    let que45_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[44].numb + ". " + questions[44].question + " <br><em>Ans: " + questions[44].answer +'</em></span>';
   
    que_text45.innerHTML = que45_tag; //adding new span tag inside que44_tag
    
    const que_text46 = document.querySelector(".que_text46");
    let que46_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[45].numb + ". " + questions[45].question + " <br><em>Ans: " + questions[45].answer +'</em></span>';
   
    que_text46.innerHTML = que46_tag; //adding new span tag inside que45_tag

    const que_text47 = document.querySelector(".que_text47");
    let que47_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[46].numb + ". " + questions[46].question + " <br><em>Ans: " + questions[46].answer +'</em></span>';
   
    que_text47.innerHTML = que47_tag; //adding new span tag inside que46_tag
    
    const que_text48 = document.querySelector(".que_text48");
    let que48_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[47].numb + ". " + questions[47].question + " <br><em>Ans: " + questions[47].answer +'</em></span>';
   
    que_text48.innerHTML = que48_tag; //adding new span tag inside que47_tag

    const que_text49 = document.querySelector(".que_text49");
    let que49_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[48].numb + ". " + questions[48].question + " <br><em>Ans: " + questions[48].answer +'</em></span>';
   
    que_text49.innerHTML = que49_tag; //adding new span tag inside que48_tag
    
    const que_text50 = document.querySelector(".que_text50");
    let que50_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[49].numb + ". " + questions[49].question + " <br><em>Ans: " + questions[49].answer +'</em></span>';
   
    que_text50.innerHTML = que50_tag; //adding new span tag inside que49_tag

    const que_text51 = document.querySelector(".que_text51");
    let que51_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[50].numb + ". " + questions[50].question + " <br><em>Ans: " + questions[50].answer +'</em></span>';
   
    que_text51.innerHTML = que51_tag; //adding new span tag inside que50_tag
    
    const que_text52 = document.querySelector(".que_text52");
    let que52_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[51].numb + ". " + questions[51].question + " <br><em>Ans: " + questions[51].answer +'</em></span>';
   
    que_text52.innerHTML = que52_tag; //adding new span tag inside que51_tag
    
    const que_text53 = document.querySelector(".que_text53");
    let que53_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[52].numb + ". " + questions[52].question + " <br><em>Ans: " + questions[52].answer +'</em></span>';
   
    que_text53.innerHTML = que53_tag; //adding new span tag inside que52_tag

    const que_text54 = document.querySelector(".que_text54");
    let que54_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[53].numb + ". " + questions[53].question + " <br><em>Ans: " + questions[53].answer +'</em></span>';
   
    que_text54.innerHTML = que54_tag; //adding new span tag inside que53_tag
    
    const que_text55 = document.querySelector(".que_text55");
    let que55_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[54].numb + ". " + questions[54].question + " <br><em>Ans: " + questions[54].answer +'</em></span>';
   
    que_text55.innerHTML = que55_tag; //adding new span tag inside que54_tag

    const que_text56 = document.querySelector(".que_text56");
    let que56_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[55].numb + ". " + questions[55].question + " <br><em>Ans: " + questions[55].answer +'</em></span>';
   
    que_text56.innerHTML = que56_tag; //adding new span tag inside que55_tag
    
    const que_text57 = document.querySelector(".que_text57");
    let que57_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[56].numb + ". " + questions[56].question + " <br><em>Ans: " + questions[56].answer +'</em></span>';
   
    que_text57.innerHTML = que57_tag; //adding new span tag inside que56_tag

    const que_text58 = document.querySelector(".que_text58");
    let que58_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[57].numb + ". " + questions[57].question + " <br><em>Ans: " + questions[57].answer +'</em></span>';
   
    que_text58.innerHTML = que58_tag; //adding new span tag inside que58_tag

    const que_text59 = document.querySelector(".que_text59");
    let que59_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[58].numb + ". " + questions[58].question + " <br><em>Ans: " + questions[58].answer +'</em></span>';
   
    que_text59.innerHTML = que59_tag; //adding new span tag inside que59_tag
    
    const que_text60 = document.querySelector(".que_text60");
    let que60_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[59].numb + ". " + questions[59].question + " <br><em>Ans: " + questions[59].answer +'</em></span>';
   
    que_text60.innerHTML = que60_tag; //adding new span tag inside que60_tag
    const que_text61 = document.querySelector(".que_text61");
    let que61_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[60].numb + ". " + questions[60].question + " <br><em>Ans: " + questions[60].answer +'</em></span>';
   
    que_text61.innerHTML = que61_tag; //adding new span tag inside que61_tag
    
    const que_text62 = document.querySelector(".que_text62");
    let que62_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[61].numb + ". " + questions[61].question + " <br><em>Ans: " + questions[61].answer +'</em></span>';
   
    que_text62.innerHTML = que62_tag; //adding new span tag inside que62_tag

    const que_text63 = document.querySelector(".que_text63");
    let que63_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[62].numb + ". " + questions[62].question + " <br><em>Ans: " + questions[62].answer +'</em></span>';
   
    que_text63.innerHTML = que63_tag; //adding new span tag inside que63_tag
    
    const que_text64 = document.querySelector(".que_text64");
    let que64_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[63].numb + ". " + questions[63].question + " <br><em>Ans: " + questions[63].answer +'</em></span>';
   
    que_text64.innerHTML = que64_tag; //adding new span tag inside que64_tag

    const que_text65 = document.querySelector(".que_text65");
    let que65_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[64].numb + ". " + questions[64].question + " <br><em>Ans: " + questions[64].answer +'</em></span>';
   
    que_text65.innerHTML = que65_tag; //adding new span tag inside que65_tag
    
    const que_text66 = document.querySelector(".que_text66");
    let que66_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[65].numb + ". " + questions[65].question + " <br><em>Ans: " + questions[65].answer +'</em></span>';
   
    que_text66.innerHTML = que66_tag; //adding new span tag inside que66_tag

    const que_text67 = document.querySelector(".que_text67");
    let que67_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[66].numb + ". " + questions[66].question + " <br><em>Ans: " + questions[66].answer +'</em></span>';
   
    que_text67.innerHTML = que67_tag; //adding new span tag inside que67_tag
    
    const que_text68 = document.querySelector(".que_text68");
    let que68_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[67].numb + ". " + questions[67].question + " <br><em>Ans: " + questions[67].answer +'</em></span>';
   
    que_text68.innerHTML = que68_tag; //adding new span tag inside que68_tag

    const que_text69 = document.querySelector(".que_text69");
    let que69_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[68].numb + ". " + questions[68].question + " <br><em>Ans: " + questions[68].answer +'</em></span>';
   
    que_text69.innerHTML = que69_tag; //adding new span tag inside que69_tag
    
    const que_text70 = document.querySelector(".que_text70");
    let que70_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[69].numb + ". " + questions[69].question + " <br><em>Ans: " + questions[69].answer +'</em></span>';
   
    que_text70.innerHTML = que70_tag; //adding new span tag inside que70_tag
    const que_text71 = document.querySelector(".que_text71");
    let que71_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[70].numb + ". " + questions[70].question + " <br><em>Ans: " + questions[70].answer +'</em></span>';
   
    que_text71.innerHTML = que71_tag; //adding new span tag inside que71_tag
    
    const que_text72 = document.querySelector(".que_text72");
    let que72_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[71].numb + ". " + questions[71].question + " <br><em>Ans: " + questions[71].answer +'</em></span>';
   
    que_text72.innerHTML = que72_tag; //adding new span tag inside que72_tag

    const que_text73 = document.querySelector(".que_text73");
    let que73_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[72].numb + ". " + questions[72].question + " <br><em>Ans: " + questions[72].answer +'</em></span>';
   
    que_text73.innerHTML = que73_tag; //adding new span tag inside que73_tag
    
    const que_text74 = document.querySelector(".que_text74");
    let que74_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[73].numb + ". " + questions[73].question + " <br><em>Ans: " + questions[73].answer +'</em></span>';
   
    que_text74.innerHTML = que74_tag; //adding new span tag inside que74_tag

    const que_text75 = document.querySelector(".que_text75");
    let que75_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[74].numb + ". " + questions[74].question + " <br><em>Ans: " + questions[74].answer +'</em></span>';
   
    que_text75.innerHTML = que75_tag; //adding new span tag inside que75_tag
    
    const que_text76 = document.querySelector(".que_text76");
    let que76_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[75].numb + ". " + questions[75].question + " <br><em>Ans: " + questions[75].answer +'</em></span>';
   
    que_text76.innerHTML = que76_tag; //adding new span tag inside que76_tag

    const que_text77 = document.querySelector(".que_text77");
    let que77_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[76].numb + ". " + questions[76].question + " <br><em>Ans: " + questions[76].answer +'</em></span>';
   
    que_text77.innerHTML = que77_tag; //adding new span tag inside que77_tag
    
    const que_text78 = document.querySelector(".que_text78");
    let que78_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[77].numb + ". " + questions[77].question + " <br><em>Ans: " + questions[77].answer +'</em></span>';
   
    que_text78.innerHTML = que78_tag; //adding new span tag inside que78_tag

    const que_text79 = document.querySelector(".que_text79");
    let que79_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[78].numb + ". " + questions[78].question + " <br><em>Ans: " + questions[78].answer +'</em></span>';
   
    que_text79.innerHTML = que79_tag; //adding new span tag inside que79_tag
    
    const que_text80 = document.querySelector(".que_text80");
    let que80_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[79].numb + ". " + questions[79].question + " <br><em>Ans: " + questions[79].answer +'</em></span>';
   
    que_text80.innerHTML = que80_tag; //adding new span tag inside que80_tag
    const que_text81 = document.querySelector(".que_text81");
    let que81_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[80].numb + ". " + questions[80].question + " <br><em>Ans: " + questions[80].answer +'</em></span>';
   
    que_text81.innerHTML = que81_tag; //adding new span tag inside que81_tag
    
    const que_text82 = document.querySelector(".que_text82");
    let que82_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[81].numb + ". " + questions[81].question + " <br><em>Ans: " + questions[81].answer +'</em></span>';
   
    que_text82.innerHTML = que82_tag; //adding new span tag inside que82_tag

    const que_text83 = document.querySelector(".que_text83");
    let que83_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[82].numb + ". " + questions[82].question + " <br><em>Ans: " + questions[82].answer +'</em></span>';
   
    que_text83.innerHTML = que83_tag; //adding new span tag inside que83_tag
    
    const que_text84 = document.querySelector(".que_text84");
    let que84_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[83].numb + ". " + questions[83].question + " <br><em>Ans: " + questions[83].answer +'</em></span>';
   
    que_text84.innerHTML = que84_tag; //adding new span tag inside que84_tag

    const que_text85 = document.querySelector(".que_text85");
    let que85_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[84].numb + ". " + questions[84].question + " <br><em>Ans: " + questions[84].answer +'</em></span>';
   
    que_text85.innerHTML = que85_tag; //adding new span tag inside que85_tag
    
    const que_text86 = document.querySelector(".que_text86");
    let que86_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[85].numb + ". " + questions[85].question + " <br><em>Ans: " + questions[85].answer +'</em></span>';
   
    que_text86.innerHTML = que86_tag; //adding new span tag inside que86_tag

    const que_text87 = document.querySelector(".que_text87");
    let que87_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[86].numb + ". " + questions[86].question + " <br><em>Ans: " + questions[86].answer +'</em></span>';
   
    que_text87.innerHTML = que87_tag; //adding new span tag inside que87_tag
    
    const que_text88 = document.querySelector(".que_text88");
    let que88_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[87].numb + ". " + questions[87].question + " <br><em>Ans: " + questions[87].answer +'</em></span>';
   
    que_text88.innerHTML = que88_tag; //adding new span tag inside que88_tag

    const que_text89 = document.querySelector(".que_text89");
    let que89_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[88].numb + ". " + questions[88].question + " <br><em>Ans: " + questions[88].answer +'</em></span>';
   
    que_text89.innerHTML = que89_tag; //adding new span tag inside que89_tag
    
    const que_text90 = document.querySelector(".que_text90");
    let que90_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[89].numb + ". " + questions[89].question + " <br><em>Ans: " + questions[89].answer +'</em></span>';
   
    que_text90.innerHTML = que90_tag; //adding new span tag inside que90_tag
    const que_text91 = document.querySelector(".que_text91");
    let que91_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[90].numb + ". " + questions[90].question + " <br><em>Ans: " + questions[90].answer +'</em></span>';
   
    que_text91.innerHTML = que91_tag; //adding new span tag inside que91_tag
    
    const que_text92 = document.querySelector(".que_text92");
    let que92_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[91].numb + ". " + questions[91].question + " <br><em>Ans: " + questions[91].answer +'</em></span>';
   
    que_text92.innerHTML = que92_tag; //adding new span tag inside que92_tag

    const que_text93 = document.querySelector(".que_text93");
    let que93_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[92].numb + ". " + questions[92].question + " <br><em>Ans: " + questions[92].answer +'</em></span><br>';
   
    que_text93.innerHTML = que93_tag; //adding new span tag inside que93_tag
    
    const que_text94 = document.querySelector(".que_text94");
    let que94_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[93].numb + ". " + questions[93].question + " <br><em>Ans: " + questions[93].answer +'</em></span><br>';
   
    que_text94.innerHTML = que94_tag; //adding new span tag inside que94_tag

    const que_text95 = document.querySelector(".que_text95");
    let que95_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[94].numb + ". " + questions[94].question + " <br><em>Ans: " + questions[94].answer +'</em></span><br>';
   
    que_text95.innerHTML = que95_tag; //adding new span tag inside que95_tag
    
    const que_text96 = document.querySelector(".que_text96");
    let que96_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[95].numb + ". " + questions[95].question + " <br><em>Ans: " + questions[95].answer +'</em></span><br>';
   
    que_text96.innerHTML = que96_tag; //adding new span tag inside que96_tag

    const que_text97 = document.querySelector(".que_text97");
    let que97_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[96].numb + ". " + questions[96].question + " <br><em>Ans: " + questions[96].answer +'</em></span><br>';
   
    que_text97.innerHTML = que97_tag; //adding new span tag inside que97_tag
    
    const que_text98 = document.querySelector(".que_text98");
    let que98_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[97].numb + ". " + questions[97].question + " <br><em>Ans: " + questions[97].answer +'</em></span><br>';
   
    que_text98.innerHTML = que98_tag; //adding new span tag inside que98_tag

    const que_text99 = document.querySelector(".que_text99");
    let que99_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[98].numb + ". " + questions[98].question + " <br><em>Ans: " + questions[98].answer +'</em></span><br>';
   
    que_text99.innerHTML = que99_tag; //adding new span tag inside que99_tag
    
    const que_text100 = document.querySelector(".que_text100");
    let que100_tag = '<span style="color: white; font:0.6rem sans-serif;">'+ questions[99].numb + ". " + questions[99].question + " <br><em>Ans: " + questions[99].answer +'</em></span><br>';
   
    que_text100.innerHTML = que100_tag; //adding new span tag inside que100_tag
    
    
}


// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    window.location.href = "index.html";
    // info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(60); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  60;
let que_count = 0;

// let que_numb = Math.floor(Math.random() * 100) +1;
let que_numb = 1;

let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;


// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span ><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}


function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 119);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}



const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore >= 75){ // if user scored more than 75
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
        canvas.classList.add("show-canvas");   
        audio.play();
        audio.loop = true;
    }
    else if(userScore > 25){ // if user scored more than 25
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 25
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}


const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    canvas.classList.remove("show-canvas");
    audio.pause();
    timeValue = 60; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.href = "index.html";
    // window.location.reload(); //reload the current window
}

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
