import React, { useState } from "react";


// renders the infopagee
function JMeterScriptpage(){
    // the states
    const[input, setinput] = useState({
        title:"",
        threathG:"",
        url:"",
        search:"",
        savefile:'',
        aantalUsers:"",
        rampup:'',
    });
    const[ChooseScript,setChooseScript] = useState();
    const [threathG, setThreathG] = useState();
    const[Threaths, setThreaths] = useState();
    const [isToggled, setIsToggled] = useState(false);
    const [isToggledHttp, setIsToggledHttp] = useState(false);
    const [isToogledAll, setisToogledAll] = useState(false);
    const[HTTPqest, setHTTPqest] = useState();
    const[Allqest,setAllqest] = useState();

    function handleChange(event){
        const{name,value} = event.target;
    
        setinput(prevInput =>{
            return {
                ...prevInput,
                [name]: value
            };
        });
        console.log(input);
    }
    
    // local storage to get to next page
    localStorage.setItem('ThreathsBasic', Threaths);
    localStorage.setItem('Httpqest', HTTPqest);
    localStorage.setItem('allquest', Allqest)

    // Function to get the script
    function handleThreathGroup(event){
        setThreathG(event.target.value)
        if(event.target.value === "1"){
            setThreaths(
                '<?xml version="1.0" encoding="UTF-8"?>' + "\n"+
                    '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">'+ "\n"+
                    '<hashTree>'+ "\n"+
                    '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="'+input.title+'" enabled="true">'+ "\n"+
                    '<stringProp name="TestPlan.comments"></stringProp>'+ "\n"+
                    '<boolProp name="TestPlan.functional_mode">'+ 'false'+ '</boolProp>'+ "\n"+
                    '<boolProp name="TestPlan.tearDown_on_shutdown">'+'true'+'</boolProp>'+ "\n"+
                    '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>'+ "\n"+
                    '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">'+ "\n"+
                    '<collectionProp name="Arguments.arguments"/>'+ "\n"+
                        '</elementProp>'+ "\n"+
                        '<stringProp name="TestPlan.user_define_classpath"></stringProp>'+ "\n"+
                        '</TestPlan>'+ "\n"+
                        '<hashTree/>'+ "\n"+
                        '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">'+ "\n"+
                    '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>'+ "\n"+
                    '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">'+ "\n"+
                    '<boolProp name="LoopController.continue_forever">false</boolProp>'+ "\n"+
                    '<stringProp name="LoopController.loops">1</stringProp>'+ "\n"+
                    '</elementProp>'+ "\n"+
                    '<stringProp name="ThreadGroup.num_threads">'+input.aantalUsers+'</stringProp>'+ "\n"+
                    '<stringProp name="ThreadGroup.ramp_time">1</stringProp>'+ "\n"+
                    '<boolProp name="ThreadGroup.scheduler">false</boolProp>'+ "\n"+
                    '<stringProp name="ThreadGroup.duration"></stringProp>'+ "\n"+
                    '<stringProp name="ThreadGroup.delay"></stringProp>'+ "\n"+
                    '</ThreadGroup>'+ "\n"+
                    '<hashTree/>'+ "\n"+
                    '</hashTree>');
            console.log('1')
        }
        if(event.target.value ==='2'){
            setThreaths(
                '<?xml version="1.0" encoding="UTF-8"?>'+ "\n"+
                '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">'+ "\n"+
                  '<hashTree>'+ "\n"+
                    '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="'+input.title+'" enabled="true">'+ "\n"+
                      '<stringProp name="TestPlan.comments"></stringProp>'+ "\n"+
                      '<boolProp name="TestPlan.functional_mode">false</boolProp>'+ "\n"+
                      '<boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>'+ "\n"+
                      '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>'+ "\n"+
                      '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">'+ "\n"+
                        '<collectionProp name="Arguments.arguments"/>'+ "\n"+
                      '</elementProp>'+ "\n"+
                      '<stringProp name="TestPlan.user_define_classpath"></stringProp>'+ "\n"+
                    '</TestPlan>'+ "\n"+
                    '<hashTree>'+ "\n"+
            '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">'+ "\n"+
            '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>'+ "\n"+
            '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">'+ "\n"+
              '<boolProp name="LoopController.continue_forever">false</boolProp>'+ "\n"+
              '<stringProp name="LoopController.loops">1</stringProp>'+ "\n"+
            '</elementProp>'+ "\n"+
            '<stringProp name="ThreadGroup.num_threads">'+input.aantalUsers+'</stringProp>'+ "\n"+
            '<stringProp name="ThreadGroup.ramp_time">1</stringProp>'+ "\n"+
            '<boolProp name="ThreadGroup.scheduler">false</boolProp>'+ "\n"+
            '<stringProp name="ThreadGroup.duration"></stringProp>'+ "\n"+
            '<stringProp name="ThreadGroup.delay"></stringProp>'+ "\n"+
          '</ThreadGroup>'+ "\n"+
          '<hashTree/>'+ "\n"+
       '</hashTree>'+"\n"+
       '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">'+ "\n"+
       '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>'+ "\n"+
       '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">'+ "\n"+
         '<boolProp name="LoopController.continue_forever">false</boolProp>'+ "\n"+
         '<stringProp name="LoopController.loops">1</stringProp>'+ "\n"+
       '</elementProp>'+ "\n"+
       '<stringProp name="ThreadGroup.num_threads">'+input.aantalUsers+'</stringProp>'+ "\n"+
       '<stringProp name="ThreadGroup.ramp_time">1</stringProp>'+ "\n"+
       '<boolProp name="ThreadGroup.scheduler">false</boolProp>'+ "\n"+
       '<stringProp name="ThreadGroup.duration"></stringProp>'+ "\n"+
       '<stringProp name="ThreadGroup.delay"></stringProp>'+ "\n"+
     '</ThreadGroup>'+ "\n"+
     '<hashTree/>'+ "\n"+
  '</hashTree>'+"\n"+
  '</hashTree>'+ "\n"+
    '</jmeterTestPlan>');
            console.log('2')
        }
}
const [clickRender,setClickRender] = useState();
const [renderHttp, setRenderHttp] = useState();
const [renderAll, setRenderAll] = useState();
localStorage.setItem('clickren', clickRender);
localStorage.setItem('renderHttp', renderHttp);
localStorage.setItem('renderAll', renderAll);
    function save(){ 
        // Text for the basic script with nothing in it exect the test plan
        setClickRender(true)
        setChooseScript(
        '<?xml version="1.0" encoding="UTF-8"?>' + "\n"+
        '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">'+ "\n"+
          '<hashTree>'+ "\n"+
            '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Test Plan" enabled="true">'+ "\n"+
              '<stringProp name="TestPlan.comments"></stringProp>'+ "\n"+
              '<boolProp name="TestPlan.functional_mode">'+ 'false'+ '</boolProp>'+ "\n"+
              '<boolProp name="TestPlan.tearDown_on_shutdown">'+'true'+'</boolProp>'+ "\n"+
              '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>'+ "\n"+
              '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">'+ "\n"+
                '<collectionProp name="Arguments.arguments"/>'+ "\n"+
              '</elementProp>'+ "\n"+
              '<stringProp name="TestPlan.user_define_classpath"></stringProp>'+ "\n"+
            '</TestPlan>'+ "\n"+
            '<hashTree/>'+ "\n"+
            Threaths+"\n"+
          '</hashTree>'+ "\n"+
        '</jmeterTestPlan>');

        console.log('works');
    }

    
    // script with a regular Thread Group in Test Plan. Use -  testclass="ThreadGroup”.
// const regTestPlan =
//     '<?xml version="1.0" encoding="UTF-8"?>'+ "\n"+
// '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">'+ "\n"+
//   '<hashTree>'+ "\n"+
//     '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Test Plan" enabled="true">'+ "\n"+
//       '<stringProp name="TestPlan.comments"></stringProp>'+ "\n"+
//       '<boolProp name="TestPlan.functional_mode">false</boolProp>'+ "\n"+
//       '<boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>'+ "\n"+
//       '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>'+ "\n"+
//       '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">'+ "\n"+
//         '<collectionProp name="Arguments.arguments"/>'+ "\n"+
//       '</elementProp>'+ "\n"+
//       '<stringProp name="TestPlan.user_define_classpath"></stringProp>'+ "\n"+
//     '</TestPlan>'+ "\n"+
//     '<hashTree>'+ "\n"+
//       '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">'+ "\n"+
//        '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>'+ "\n"+
//         '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">'+ "\n"+
//           '<boolProp name="LoopController.continue_forever">false</boolProp>'+ "\n"+
//           '<stringProp name="LoopController.loops">1</stringProp>'+ "\n"+
//         '</elementProp>'+ "\n"+
//         '<stringProp name="ThreadGroup.num_threads">1</stringProp>'+ "\n"+
//         '<stringProp name="ThreadGroup.ramp_time">1</stringProp>'+ "\n"+
//         '<boolProp name="ThreadGroup.scheduler">false</boolProp>'+ "\n"+
//         '<stringProp name="ThreadGroup.duration"></stringProp>'+ "\n"+
//         '<stringProp name="ThreadGroup.delay"></stringProp>'+ "\n"+
//       '</ThreadGroup>'+ "\n"+
//       '<hashTree/>'+ "\n"+
//     '</hashTree>'+ "\n"+
//   '</hashTree>'+ "\n"+
// '</jmeterTestPlan>'



function handleHTTPGroup(){
    setRenderHttp(true);
        setHTTPqest(
            '<?xml version="1.0" encoding="UTF-8"?>'+ "\n"+
            '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">'+ "\n"+
            '<hashTree>'+ "\n"+
                '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="'+input.title+'" enabled="true">'+ "\n"+
                '<stringProp name="TestPlan.comments"></stringProp>'+ "\n"+
                '<boolProp name="TestPlan.functional_mode">false</boolProp>'+ "\n"+
                '<boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>'+ "\n"+
                '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>'+ "\n"+
                '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">'+ "\n"+
                    '<collectionProp name="Arguments.arguments"/>'+ "\n"+
                '</elementProp>'+ "\n"+
                '<stringProp name="TestPlan.user_define_classpath"></stringProp>'+ "\n"+
                '</TestPlan>'+ "\n"+
                '<hashTree>'+ "\n"+
                '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">'+ "\n"+
                    '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>'+ "\n"+
                    '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">'+ "\n"+
                    '<boolProp name="LoopController.continue_forever">false</boolProp>'+ "\n"+
                    '<stringProp name="LoopController.loops">1</stringProp>'+ "\n"+
                    '</elementProp>'+ "\n"+
                    '<stringProp name="ThreadGroup.num_threads">'+input.aantalUsers+'</stringProp>'+ "\n"+
                    '<stringProp name="ThreadGroup.ramp_time">1</stringProp>'+ "\n"+
                    '<boolProp name="ThreadGroup.scheduler">false</boolProp>'+ "\n"+
                    '<stringProp name="ThreadGroup.duration"></stringProp>'+ "\n"+
                    '<stringProp name="ThreadGroup.delay"></stringProp>'+ "\n"+
                '</ThreadGroup>'+ "\n"+
                '<hashTree>'+ "\n"+
                    '<HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="HTTP Request" enabled="true">'+ "\n"+
                    '<elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">'+ "\n"+
                        '<collectionProp name="Arguments.arguments"/>'+ "\n"+
                    '</elementProp>'+ "\n"+
                    '<stringProp name="HTTPSampler.domain"></stringProp>'+ "\n"+
                    '<stringProp name="HTTPSampler.port"></stringProp>'+ "\n"+
                    '<stringProp name="HTTPSampler.protocol"></stringProp>'+ "\n"+
                    '<stringProp name="HTTPSampler.contentEncoding"></stringProp>'+ "\n"+
                    '<stringProp name="HTTPSampler.path">'+input.url+" "+'</stringProp>'+ "\n"+
                    '<stringProp name="HTTPSampler.method">'+method+'</stringProp>'+ "\n"+
                    '<boolProp name="HTTPSampler.follow_redirects">true</boolProp>'+ "\n"+
                    '<boolProp name="HTTPSampler.auto_redirects">false</boolProp>'+ "\n"+
                    '<boolProp name="HTTPSampler.use_keepalive">true</boolProp>'+ "\n"+
                    '<boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>'+ "\n"+
                    '<stringProp name="HTTPSampler.embedded_url_re"></stringProp>'+ "\n"+
                    '<stringProp name="HTTPSampler.connect_timeout"></stringProp>'+ "\n"+
                    '<stringProp name="HTTPSampler.response_timeout"></stringProp>'+ "\n"+
                    '</HTTPSamplerProxy>'+ "\n"+
                    '<hashTree/>'+ "\n"+
                '</hashTree>'+ "\n"+
            '</hashTree>'+ "\n"+
            '</hashTree>'+ "\n"+
            '</jmeterTestPlan>');
            // console.log(sel) 
}
        
// not gooood!!!!!!!!
        // if(event.target.value === "2"){
        //     setaantal(
        //         '<?xml version="1.0" encoding="UTF-8"?>'+ "\n"+
        //         '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">'+ "\n"+
        //           '<hashTree>'+ "\n"+
        //             '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="'+input.title+'" enabled="true">'+ "\n"+
        //               '<stringProp name="TestPlan.comments"></stringProp>'+ "\n"+
        //               '<boolProp name="TestPlan.functional_mode">false</boolProp>'+ "\n"+
        //               '<boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>'+ "\n"+
        //               '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>'+ "\n"+
        //               '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">'+ "\n"+
        //                 '<collectionProp name="Arguments.arguments"/>'+ "\n"+
        //               '</elementProp>'+ "\n"+
        //               '<stringProp name="TestPlan.user_define_classpath"></stringProp>'+ "\n"+
        //             '</TestPlan>'+ "\n"+
        //             '<hashTree>'+ "\n"+
        //               '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">'+ "\n"+
        //                 '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>'+ "\n"+
        //                 '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">'+ "\n"+
        //                   '<boolProp name="LoopController.continue_forever">false</boolProp>'+ "\n"+
        //                   '<stringProp name="LoopController.loops">1</stringProp>'+ "\n"+
        //                 '</elementProp>'+ "\n"+
        //                 '<stringProp name="ThreadGroup.num_threads">'+input.aantalUsers+'</stringProp>'+ "\n"+
        //                 '<stringProp name="ThreadGroup.ramp_time">1</stringProp>'+ "\n"+
        //                 '<boolProp name="ThreadGroup.scheduler">false</boolProp>'+ "\n"+
        //                 '<stringProp name="ThreadGroup.duration"></stringProp>'+ "\n"+
        //                 '<stringProp name="ThreadGroup.delay"></stringProp>'+ "\n"+
        //               '</ThreadGroup>'+ "\n"+
        //               '<hashTree>'+ "\n"+
        //                 '<HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="HTTP Request" enabled="true">'+ "\n"+
        //                   '<elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">'+ "\n"+
        //                     '<collectionProp name="Arguments.arguments"/>'+ "\n"+
        //                   '</elementProp>'+ "\n"+
        //                   '<stringProp name="HTTPSampler.domain"></stringProp>'+ "\n"+
        //                   '<stringProp name="HTTPSampler.port"></stringProp>'+ "\n"+
        //                   '<stringProp name="HTTPSampler.protocol"></stringProp>'+ "\n"+
        //                   '<stringProp name="HTTPSampler.contentEncoding"></stringProp>'+ "\n"+
        //                   '<stringProp name="HTTPSampler.path">'+input.url+'</stringProp>'+ "\n"+
        //                   '<stringProp name="HTTPSampler.method">'+input.method+'</stringProp>'+ "\n"+
        //                   '<boolProp name="HTTPSampler.follow_redirects">true</boolProp>'+ "\n"+
        //                   '<boolProp name="HTTPSampler.auto_redirects">false</boolProp>'+ "\n"+
        //                   '<boolProp name="HTTPSampler.use_keepalive">true</boolProp>'+ "\n"+
        //                   '<boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>'+ "\n"+
        //                   '<stringProp name="HTTPSampler.embedded_url_re"></stringProp>'+ "\n"+
        //                   '<stringProp name="HTTPSampler.connect_timeout"></stringProp>'+ "\n"+
        //                   '<stringProp name="HTTPSampler.response_timeout"></stringProp>'+ "\n"+
        //                 '</HTTPSamplerProxy>'+ "\n"+
        //                 '<hashTree/>'+ "\n"+
        //               '</hashTree>'+ "\n"+
        //            '</hashTree>'+ "\n"+
        //           '</hashTree>'+ "\n"+
        //         '</jmeterTestPlan>'
        //     );
        // console.log(sel)
        // }


// console.log(HTTpRequest)


// }

// const allText= 
// '<?xml version="1.0" encoding="UTF-8"?>'+ "\n"+
// '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">'+ "\n"+
//   '<hashTree>'+ "\n"+
//     '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Test Plan" enabled="true">'+ "\n"+
//       '<stringProp name="TestPlan.comments"></stringProp>'+ "\n"+
//       '<boolProp name="TestPlan.functional_mode">false</boolProp>'+ "\n"+
//       '<boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>'+ "\n"+
//       '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>'+ "\n"+
//       '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">'+ "\n"+
//         '<collectionProp name="Arguments.arguments"/>'+ "\n"+
//       '</elementProp>'+ "\n"+
//       '<stringProp name="TestPlan.user_define_classpath"></stringProp>'+ "\n"+
//     '</TestPlan>'+ "\n"+
//     '<hashTree>'+ "\n"+
//       '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">'+ "\n"+
//         '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>'+ "\n"+
//         '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">'+ "\n"+
//           '<boolProp name="LoopController.continue_forever">false</boolProp>'+ "\n"+
//           '<stringProp name="LoopController.loops">1</stringProp>'+ "\n"+
//         '</elementProp>'+ "\n"+
//         '<stringProp name="ThreadGroup.num_threads">10</stringProp>'+ "\n"+
//         '<stringProp name="ThreadGroup.ramp_time">5</stringProp>'+ "\n"+
//         '<boolProp name="ThreadGroup.scheduler">true</boolProp>'+ "\n"+
//         '<stringProp name="ThreadGroup.duration">30</stringProp>'+ "\n"+
//         '<stringProp name="ThreadGroup.delay"></stringProp>'+ "\n"+
//       '</ThreadGroup>'+ "\n"+
//       '<hashTree>'+ "\n"+
//         '<LoopController guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">'+ "\n"+
//           '<boolProp name="LoopController.continue_forever">true</boolProp>'+ "\n"+
//           '<intProp name="LoopController.loops">-1</intProp>'+ "\n"+
//         '</LoopController>'+ "\n"+
//         '<hashTree>'+ "\n"+
//           '<HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="HTTP Request" enabled="true">'+ "\n"+
//             '<elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">'+ "\n"+
//               '<collectionProp name="Arguments.arguments"/>'+ "\n"+
//             '</elementProp>'+ "\n"+
//             '<stringProp name="HTTPSampler.domain"></stringProp>'+ "\n"+
//             '<stringProp name="HTTPSampler.port"></stringProp>'+ "\n"+
//             '<stringProp name="HTTPSampler.protocol"></stringProp>'+ "\n"+
//             '<stringProp name="HTTPSampler.contentEncoding"></stringProp>'+ "\n"+
//             '<stringProp name="HTTPSampler.path">https://www.blazedemo.com/</stringProp>'+ "\n"+
//             '<stringProp name="HTTPSampler.method">GET</stringProp>'+ "\n"+
//             '<boolProp name="HTTPSampler.follow_redirects">true</boolProp>'+ "\n"+
//             '<boolProp name="HTTPSampler.auto_redirects">false</boolProp>'+ "\n"+
//             '<boolProp name="HTTPSampler.use_keepalive">true</boolProp>'+ "\n"+
//             '<boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>'+ "\n"+
//             '<stringProp name="HTTPSampler.embedded_url_re"></stringProp>'+ "\n"+
//             '<stringProp name="HTTPSampler.connect_timeout"></stringProp>'+ "\n"+
//             '<stringProp name="HTTPSampler.response_timeout"></stringProp>'+ "\n"+
//           '</HTTPSamplerProxy>'+ "\n"+
//           '<hashTree/>'+ "\n"+
//        '</hashTree>'+ "\n"+
//       '</hashTree>'+ "\n"+
//     '</hashTree>'+ "\n"+
//   '</hashTree>'+ "\n"+
// '</jmeterTestPlan>'
 

 




        // 'const {Builder, By, Key, util} = require("selenium-webdriver");'+"\n"+
        // 'require("'+input.title+'");' +"\n"+
        // 'async function example(){' +"\n"+
        // 'let driver = await new Builder().forBrowser("'+input.chrome+'").build();' +'\n'+
        // 'await driver.get("'+input.url+'");' +"\n"+
        // 'await driver.findElement(By.name("q")).sendKeys("'+input.search+'", Key.RETURN);}' +'\n'+
        // 'example(); ';
    
        // // stores the item in an object to get it on the next page
        // localStorage.setItem("textvalue", safeText);
        // localStorage.setItem('Url', input.url)
        // console.log('works'+safeText);
    

    // Handle changes from the user input
    
    function handleInput (event){
        const{name,value} = event.target;
        setinput(prevInput =>{
            return{
                ...prevInput,
                [name]: value
            };
        });
        console.log(input);
    }
    

    function saveEverthing(){
        setRenderAll(true);
        setAllqest(
            '<?xml version="1.0" encoding="UTF-8"?>'+"\n"+
'<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">'+"\n"+
  '<hashTree>'+"\n"+
    '<TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="'+input.title+'" enabled="true">'+"\n"+
      '<stringProp name="TestPlan.comments"></stringProp>'+"\n"+
      '<boolProp name="TestPlan.functional_mode">false</boolProp>'+"\n"+
      '<boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>'+"\n"+
      '<boolProp name="TestPlan.serialize_threadgroups">false</boolProp>'+"\n"+
      '<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">'+"\n"+
        '<collectionProp name="Arguments.arguments"/>'+"\n"+
      '</elementProp>'+"\n"+
      '<stringProp name="TestPlan.user_define_classpath"></stringProp>'+"\n"+
    '</TestPlan>'+"\n"+
    '<hashTree>'+"\n"+
      '<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">'+"\n"+
        '<stringProp name="ThreadGroup.on_sample_error">continue</stringProp>'+"\n"+
        '<elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">'+"\n"+
          '<boolProp name="LoopController.continue_forever">false</boolProp>' +"\n"+
          '<stringProp name="LoopController.loops">1</stringProp>'+"\n"+
        '</elementProp>'+"\n"+
        '<stringProp name="ThreadGroup.num_threads">'+input.aantalUsers+'</stringProp>'+"\n"+
        '<stringProp name="ThreadGroup.ramp_time">'+input.rampup+'</stringProp>'+"\n"+
        '<boolProp name="ThreadGroup.scheduler">'+schedule+'</boolProp>'+"\n"+
        '<stringProp name="ThreadGroup.duration">30</stringProp>'+"\n"+
        '<stringProp name="ThreadGroup.delay"></stringProp>'+"\n"+
      '</ThreadGroup>'+"\n"+
      '<hashTree>'+"\n"+
        '<LoopController guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">'+"\n"+
          '<boolProp name="LoopController.continue_forever">true</boolProp>'+"\n"+
          '<intProp name="LoopController.loops">-1</intProp>'+"\n"+
        '</LoopController>'+"\n"+
        '<hashTree>'+"\n"+
          '<HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="HTTP Request" enabled="true">'+"\n"+
            '<elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" enabled="true">'+"\n"+
              '<collectionProp name="Arguments.arguments"/>'+"\n"+
            '</elementProp>'+"\n"+
            '<stringProp name="HTTPSampler.domain"></stringProp>'+"\n"+
            '<stringProp name="HTTPSampler.port"></stringProp>'+"\n"+
            '<stringProp name="HTTPSampler.protocol"></stringProp>'+"\n"+
            '<stringProp name="HTTPSampler.contentEncoding"></stringProp>'+"\n"+
            '<stringProp name="HTTPSampler.path">'+input.url+'</stringProp>'+"\n"+
            '<stringProp name="HTTPSampler.method">'+method+'</stringProp>'+"\n"+
            '<boolProp name="HTTPSampler.follow_redirects">true</boolProp>'+"\n"+
            '<boolProp name="HTTPSampler.auto_redirects">false</boolProp>'+"\n"+
            '<boolProp name="HTTPSampler.use_keepalive">true</boolProp>'+"\n"+
            '<boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>'+"\n"+
            '<stringProp name="HTTPSampler.embedded_url_re"></stringProp>'+"\n"+
            '<stringProp name="HTTPSampler.connect_timeout"></stringProp>'+"\n"+
            '<stringProp name="HTTPSampler.response_timeout"></stringProp>'+"\n"+
          '</HTTPSamplerProxy>'+"\n"+
          '<hashTree/>'+"\n"+
        '</hashTree>'+"\n"+
      '</hashTree>'+"\n"+
    '</hashTree>'+"\n"+
  '</hashTree>'+"\n"+
'</jmeterTestPlan>'
        );
    }
const [schedule, setSchedulde] = useState();
    function handleSchedularGroup(event){
        setSchedulde(event.target.value);
        if(event.target.value === 'True'){
            setSchedulde('true');
        }
        else{
            setSchedulde('false');
        }
        console.log(event.target.value);
    }
    const [method,setMethod] = useState();
    function handleMethodGroup(event){
        setMethod(event.target.value);
        if(event.target.value ==="GET"){
            setMethod("GET");
        }
        if(event.target.value === "POST"){
            setMethod("POST")
        }
        if(event.target.value === "HEAD"){
            setMethod("HEAD")
        }
        if(event.target.value === "PUT"){
            setMethod("PUT")
        }
        if(event.target.value === "OPTION"){
            setMethod("OPTION")
        }
        if(event.target.value === "TRACE"){
            setMethod("TRACE")
        }
        if(event.target.value === "DELETE"){
            setMethod("DELETE")
        }
        if(event.target.value === "PATCH"){
            setMethod("PATCH")
        }
        if(event.target.value === "PROPFIND"){
            setMethod("PROPFIND")
        }
        if(event.target.value === "PROPPATCH"){
            setMethod("PROPPATCH")
        }
        if(event.target.value === "MKCOL"){
            setMethod("MKCOL")
        }
        if(event.target.value === "COPY"){
            setMethod("COPY")
        }
        if(event.target.value === "LOCKE"){
            setMethod("LOCKE")
        }
        if(event.target.value === "MOVE"){
            setMethod("MOVE")
        }
        if(event.target.value === "UNLOCKE"){
            setMethod("UNLOCKE")
        }
        if(event.target.value === "REPORT"){
            setMethod("REPORT")
        }
        if(event.target.value === "SEARCH"){
            setMethod("SEARCH")
        }
        if(event.target.value === "MKCALENDAR"){
            setMethod("MKCALENDAR")
        }
        console.log(event.target.value)
    }
const [showe, setshow] = useState(false);
const [how, sethow] = useState(false);
const [haha,sethaha] = useState(false)
    // the header
    return <div className='contain'>
         <div className='greenArray'>
        <div>
            
            <h1 className="TitleI">JMeter</h1>
    </div>
        </div>

        
            <button onClick={() => setshow(!showe)}>hoihoi</button>
         {showe && <div><h1>hallo</h1>
         <button onClick={() => sethow(!how)}>hoihoi2</button>
         {how && <div><h1>hoihoi2</h1>
         <button onClick={() => sethaha(!haha)}>hahahaha</button>
         {haha && <h1>works fine</h1>}
     </div>    }

         </div>
         }
        
         {/* {showe===true && */}
        {/* three buttons to choose from */}
        <button className='CreateJMScript' onClick={() => setIsToggled(!isToggled)}>Basic</button>
        <button className='CreateScriptHTTP' onClick={() => setIsToggledHttp(!isToggledHttp)}>HTTP</button>
        <button className='CreateScriptAll' onClick={() => setisToogledAll(!isToogledAll)}>All</button>


        
{/* hier moet een if statement komen die ervoor zorgt dat de goede script wordt laten zien! */}



        {/* Render the basic script with questions */}
        {isToggled  && 
        <form action="RunnerScriptpage">
        <h1>Basis</h1>
        {/* Q1 */}
        <p>Hoe moet je testplan heten?</p>
        {/* Input fields for the changes on a script */}
        <input onChange={handleInput} id='txt' name='title' value={input.title} type="text" ></input>
        {/* Q2 */}
        <p>Hoeveel user per threath zou je willen?(vul een getal in, 1)</p>
        <input onChange={handleChange} id='txt' name='aantalUsers' value={input.aantalUsers} type="text" ></input>
        {/* Q3 */}
        <p className='QuestScript'>Hoeveel threath groups zou je willen hebben?</p>
        <select className='optionThreathGroup' onChange={handleThreathGroup}>
                <option  value="Hoeveel">Hoeveel</option>
                <option className="subtitleQest" value="1">1</option>
                <option className="subtitleQest" value="2">2</option>
        </select>
        <br/>
        <br/>
        {/* save button and go to next page */}
        <button className='CreateJMScript' onClick={save}>Maak script aan</button>
        </form>
}
{isToggledHttp && !isToggled &&
    <form action="RunnerScriptpage">
        <h1>HTTP</h1>
                    {/* Input fields for the changes on a script */}
                    {/* wat wil je testen? leeg script, HTTP,  */}
                    <p>Hoe moet je testplan heten?</p>
                    <input onChange={handleInput} id='txt' name='title' value={input.title} type="text" ></input>
                    <p>Hoeveel user per threath zou je willen?(vul een getal in, 1)</p>
                <input onChange={handleChange} id='txt' name='aantalUsers' value={input.aantalUsers} type="text" ></input>
                <p className='QuestScript'>Welke Url zou je willen gebruiken om een test op uit te voeren? (http://example.nl)</p>
                    <input onChange={handleInput} name='url' value={input.url} type="text" ></input>
                    <p className='QuestScript'>Welke methode zou je willen gebruiken? (GET,POST,DELETE)</p>
                    <select className='optionSchedularGroup' onChange={handleMethodGroup}>
                <option  value="method">Methode</option>
                <option className="subtitleQest" value="GET">GET</option>
                <option className="subtitleQest" value="POST">POST</option>
                <option className="subtitleQest" value="HEAD">HEAD</option>
                <option className="subtitleQest" value="PUT">PUT</option>
                <option className="subtitleQest" value="OPTION">OPTION</option>
                <option className="subtitleQest" value="TRACE">TRACE</option>
                <option className="subtitleQest" value="DELETE">DELETE</option>
                <option className="subtitleQest" value="PATCH">PATCH</option>
                <option className="subtitleQest" value="PROPFIND">PROPFIND</option>
                <option className="subtitleQest" value="PROPPATCH">PROPPATCH</option>
                <option className="subtitleQest" value="MKCOL">MKCOL</option>
                <option className="subtitleQest" value="COPY">COPY</option>
                <option className="subtitleQest" value="LOCKE">LOCKE</option>
                <option className="subtitleQest" value="MOVE">MOVE</option>
                <option className="subtitleQest" value="UNLOCKE">UNLOCKE</option>
                <option className="subtitleQest" value="REPORT">REPORT</option>
                <option className="subtitleQest" value="SEARCH">SEARCH</option>
                <option className="subtitleQest" value="MKCALENDAR">MKCALENDAR</option>

                

                </select> 
                    {/* <p className='QuestScript'>Hoeveel Threath groups zou je willen hebben</p> */}
                    {/* <select className='optionThreathGroup' onChange={handleHTTPGroup}>
                <option  value="Hoeveel">Hoeveel</option>
                <option className="subtitleQest" value="1">1</option>
                <option className="subtitleQest" value="2">2</option>
                </select> */}
                    
                    <br/>
                    <br/>
                     {/* save button and go to next page */}
                    <button className='CreateScriptHTTP' onClick={handleHTTPGroup}>Maak script aan</button>
                     </form>
}
{isToogledAll && !isToggledHttp && !isToggled&&
    <form action="RunnerScriptpage">
                    {/* Input fields for the changes on a script */}
                    {/* wat wil je testen? leeg script, HTTP,  */}
                    <h1>Alles</h1>
                    <p className='QuestScript'>Hoe moet je script heten?</p>
                    <input onChange={handleInput} id='txt' name='title' value={input.title} type="text" ></input>
                    <p className='QuestScript'>Hoeveel user per threath zou je willen?(vul een getal in, 1)</p>
                    <input onChange={handleChange} id='txt' name='aantalUsers' value={input.aantalUsers} type="integer" ></input>
                    <p className='QuestScript'>Welke Url zou je willen gebruiken om een test op uit te voeren? (http://example.nl)</p>
                    <input onChange={handleInput} name='url' value={input.url} type="text" ></input>
                    <p className='QuestScript'>Wilt u een schedular aanzetten?</p>
                    <select className='optionSchedularGroup' onChange={handleSchedularGroup}>
                <option  value="schedular">schema</option>
                <option className="subtitleQest" value="True">Ja</option>
                <option className="subtitleQest" value="False">Nee</option>
                </select> 
                <p className='QuestScript'>Welke methode zou je willen gebruiken? (GET,POST,DELETE)</p>
                <select className='optionSchedularGroup' onChange={handleMethodGroup}>
                <option  value="method">Methode</option>
                <option className="subtitleQest" value="GET">GET</option>
                <option className="subtitleQest" value="POST">POST</option>
                <option className="subtitleQest" value="HEAD">HEAD</option>
                <option className="subtitleQest" value="PUT">PUT</option>
                <option className="subtitleQest" value="OPTION">OPTION</option>
                <option className="subtitleQest" value="TRACE">TRACE</option>
                <option className="subtitleQest" value="DELETE">DELETE</option>
                <option className="subtitleQest" value="PATCH">PATCH</option>
                <option className="subtitleQest" value="PROPFIND">PROPFIND</option>
                <option className="subtitleQest" value="PROPPATCH">PROPPATCH</option>
                <option className="subtitleQest" value="MKCOL">MKCOL</option>
                <option className="subtitleQest" value="COPY">COPY</option>
                <option className="subtitleQest" value="LOCKE">LOCKE</option>
                <option className="subtitleQest" value="MOVE">MOVE</option>
                <option className="subtitleQest" value="UNLOCKE">UNLOCKE</option>
                <option className="subtitleQest" value="REPORT">REPORT</option>
                <option className="subtitleQest" value="SEARCH">SEARCH</option>
                <option className="subtitleQest" value="MKCALENDAR">MKCALENDAR</option>

                </select> 
                <p className='QuestScript'>Wat is de Ramp-up periode?</p>
                    <input onChange={handleChange} id='rampup' name='rampup' value={input.rampup} type="text" ></input>
                   
                    <br/>
                    <br/>
                    {/* save button and go to next page */}
                    <button className='CreateScriptAll' onClick={saveEverthing}>Maak script aan</button>
                    </form>
}
    </div>
}


export default JMeterScriptpage;