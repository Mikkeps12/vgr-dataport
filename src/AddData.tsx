
import { render } from "@testing-library/react";
import React, { Component, useEffect } from "react";
import { useState } from "react";
import { blob } from "stream/consumers";
import { Api, GetRegister, Post, GetGoverment } from "./Api.ts";
import { isVisible } from "@testing-library/user-event/dist/utils/index.js";


type AddDataData = {
  ID: number,
  Huvudans_Namn: string,
  Huvudans_Epostadress: string,
  Huvudans_Mobiltelefon: string,
  Huvudans_Organisation: string,
  Variabellista: File[],
  Arra: [{}],
  Goverment: string,
  Register: string,
  FromDate: string,
  ToDate: string,
  DateInterval: string,
  Gender: string,
  AgeFrom: string,
  AgeTo: string,
  AgeInterval: string,
  Additional: string,
  DescriptionOfVariables: string,
  V: File,
  FileFormat: string,
  DataDelivered: string,
  Name: string,
  Organization: string,
  Mail: string,
  Phone: string,
  SyncRegistersWithFile: string,
  SyncRegisterFromOtherSources: string,
  NameDatasources: string,
  ProcessOfSync: string,
  WhichVariables: string

}


type AddDataProps = AddDataData & {
  updateFields: (fields: Partial<AddDataData>) => void
  updateArray: (field: Partial<AddC>) => void
  reset();
}

let age = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28
  , 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
  57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
  86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, '100+'];
type AddC = {

  ID: number,
  Goverment: string,
  Register: string,
  FromDate: string,
  ToDate: string,
  DateInterval: string

  Gender: string,
  AgeFrom: string,
  AgeTo: string,
  AgeInterval: string,
  Additional: string,
  DescriptionOfVariables: string,
  V: File,
  FileFormat: string,
  DataDelivered: string,
  Name: string,
  Organization: string,
  Mail: string,
  Phone: string,
  SyncRegistersWithFile: string,
  SyncRegisterFromOtherSources: string,
  NameDatasources: string,
  ProcessOfSync: string,
  WhichVariables: string

}


let INITIAL_DATA: AddC = {
  ID: 0,
  Goverment: "",
  Register: "",
  FromDate: "",
  ToDate: "",
  DateInterval: "",
  Gender: "",
  AgeFrom: "",
  AgeTo: "",
  AgeInterval: "",
  Additional: "",
  DescriptionOfVariables: "",
  V: {},
  FileFormat: "",
  DataDelivered: "",
  Name: "",
  Organization: "",
  Mail: "",
  Phone: "",
  SyncRegistersWithFile: "",
  SyncRegisterFromOtherSources: "",
  NameDatasources: "",
  ProcessOfSync: "",
  WhichVariables: ""

}

let nextid = 0;

export function AddData({ Huvudans_Namn,
  Huvudans_Epostadress,
  Huvudans_Mobiltelefon,
  Huvudans_Organisation, Arra, Variabellista, ID, Goverment, Register, FromDate, ToDate, DateInterval, Gender, AgeFrom, AgeTo, AgeInterval, Additional,
  DescriptionOfVariables, V, FileFormat, DataDelivered, Name, Organization, Mail, Phone, SyncRegistersWithFile,
  SyncRegisterFromOtherSources, NameDatasources, ProcessOfSync, WhichVariables,
  updateFields, updateArray, reset }: AddDataProps) {

  const [ageIndex, setAgeIndex] = useState(0);
  const [validDate, setValidDate] = useState(true);
  const [variableIndex, setVariableIndex] = useState(0);
  //Name = Huvudans_Namn;
  //Organization= Huvudans_Organisation;
  //Mail=Huvudans_Epostadress;
  //Phone=Huvudans_Mobiltelefon;
  const [fileName, setFileName] = useState(false)
  const [isvisble, setVisible] = useState(true)
  const [isvisble2, setVisible2] = useState(false)
  const [isvisble3, setVisible3] = useState(false)
  const [isShowing, setIsShowing] = useState([
    {
      show: false,
      index: 0
    }
  ])
  const [visibleSections, setVisibleSections] = useState([
    {
      index: 0,
      Visible: false,
      file: false
    }
  ]);

const checkIndex = (index, newValue) => {

    //   Arra.map((maps, ind)=>{
    // if(ind===index)
    // setIsShowing(isShowing);
    //   })
    const update = [...isShowing];
    update[index].show = newValue;
    setIsShowing(update);


  }

  const change = (index) => {
    return (
      <AddData />
    )
  }



  const [cc, setCC] = useState({
    Fd: ""
  })
  let [count, setCount] = useState(Number)
  const [register, setRegister] = useState([{
    Datauttagsnamn: ""
  }])
  const onChangeHandle = (e: any) => {
    //e.preventDefault();
    //setA({ ...aa, Name: Huvudans_Namn });
    // setA((prevA) => ({
    //   ...prevA,
    //   Name: "GGGG"
    INITIAL_DATA.Name = Huvudans_Namn;
    INITIAL_DATA.Organization = Huvudans_Organisation;
    INITIAL_DATA.Mail = Huvudans_Epostadress;
    INITIAL_DATA.Phone = Huvudans_Mobiltelefon;
    // }));
    setCC({ ...cc, Fd: "HHHH" })
    //setCC((prevCC)=> ({...prevCC, Fd:"GGGG"}));


  }



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Arra.length]);

  useEffect(() => {

  })
  const onChangeHandle1 = (e) => {

    //setA({...aa, [e.target.name]: e.target.files[0]});
    var reader = new FileReader();

    reader.onload = function (ev) {
      console.log(reader.result);
      const ff = JSON.stringify(reader.result);
      setA({ ...aa, [e.target.name]: "DD" });
    }
    reader.readAsText(e.target.files[0]);

  }

  const onChangeHandle2 = (e: any) => {
    e.preventDefault();

    Variabellista.pop();
    //setName('');
    setFileName(false);
    //updateFields({Variabellista: undefined});
    
  }

  const onSetFilename = () =>{
    const index = Variabellista.length;
    //const name_of_file = Variabellista[index].name;
    setVariableIndex(index);
  }

  const onRadioButtonChange = (e) => {
    if (e.target.value === "A") {
      setVisible(!isvible);
    }
    else {
      setVisible(true);
    }
  }

  const onCheckboxChange = (e) => {
    if (e.target.value === "Annat") {
      setVisible2(!isvisble2);
    }
  }

  const handleToDateChange = (e) => {
    const selectedToDate = e.target.value;
    if (selectedToDate >= fromDate) {
      updateArray({ ToDate: e.target.value });
      setValidDate(true);
    }
    else {
      setValidDate(false);
    }
  };

  const [aa, setA] = useState(INITIAL_DATA)

  const [bb, setB] = useState(Arra)
  const [fromDate, setFromDate] = useState();
  return (
    <div>


      <div className='heading1'>Datauttag</div>
      <div className='Form'>
        <div className='headdiv'>

          <div className='headingb2'>Ange datakälla</div>


          <div className='headingb3'>Välj datakälla</div>
          <SelectGov />
          <br />
          <SelectReg />

          <br />
          <br /><br />
          <Reg />


          <div className="borderline" style={{ marginTop: "64px" }}></div>
          <div className="headingb2">Urval</div>
          
          <div className="headinga16" /* style={{ width: "592px", height: "120px" }} */>Vilket urval ska gälla för data?
            Det kan handla om datumintervall, diagnoser, kön, region,
            ålder, och så vidare. Var så specifik som möjligt.
            Utsökningen underlättas om registrets variabelnamn och
            tillhörande variabelvärden används vid beskrivning av
            urvalet, tex Surg_Age &ge; 65 och Surg_County=Stockholm.
            Urvalet ska vara angivet i godkänd etikprövningsansökan.</div>

          <br />
          <div className="groupPost">
            <div>
              <label className='headingb3' >Från datum</label>
              <br />
              <input type="date" id="date" name={"FromDate"} onChange={(e) => {
                updateArray({ FromDate: e.target.value });
                setFromDate(e.target.value)
              }} onChangeCapture={onChangeHandle} value={FromDate} />
            </div>
            <div>
              <label className='headingb3' style={{ marginLeft: "38px" }}>Till datum</label>
              <br />

              <input type="date" id="date" style={{ marginLeft: "41px" }} name={"ToDate"}
                onChange={handleToDateChange} onChangeCapture={onChangeHandle} value={ToDate} />
            </div>
            {!validDate && <p className="paragraphRed">Datumet kan inte vara tidigare än det första valda datumet</p>}
          </div>
          <br />
          <div className='headingb3' >Ange vad datumintervallet avser</div>

          <input className="textBox" type={"text"} name={"DateInterval"} onChange={(e) => updateArray({ DateInterval: e.target.value })} onChangeCapture={onChangeHandle} value={DateInterval} />
          <div className="headingc16" /* style={{
            marginTop: "-10px", marginLeft: "0px",
            backgroundColor: "white", color: "black"
          }} */>Diagnosår, besök, m.m.</div>
          <br /><br />
          <div style={{ width: "245px", height: "100px" }}>
            <label className="headingb3" >Kön</label>
            <br />
            <label className="headingb16" htmlFor="all" ></label>
            <input onChange={(e) => updateArray({ Gender: e.target.value })} onChangeCapture={onChangeHandle} id="all"
              value={"Alla"} type={"radio"} name={"Gender"} style={{ marginTop: "16px", marginLeft: "0px" }} />Alla

            <br />
            <input value={"Kvinna"} onChange={(e) => updateArray({ Gender: e.target.value })} onChangeCapture={onChangeHandle} type={"radio"} name={"Gender"} style={{ marginLeft: "0px", marginTop: "20px" }} />Kvinna
            <br />
            <input value={"Man"} onChange={(e) => updateArray({ Gender: e.target.value })} onChangeCapture={onChangeHandle} type={"radio"} name={"Gender"} style={{ marginLeft: "0px", marginTop: "20px" }} />Man
          </div>
          <br /><br /><br />
          <label className='headingb3' style={{ marginLeft: "0px", marginTop: "40px" }}>Ålder från</label>
          <label className='headingb3' style={{ marginLeft: "189px" }}>Ålder till</label>
          <br />
          <SelectAgeFrom />
          <SelectAgeTo />
          <br /><br /><br />
          <div className='headingb3' style={{ marginTop: "37px" }}>Ange vad åldersintervallet avser</div>
          <input className="textBox" name={"AgeInterval"} onChange={(e) => updateArray({ AgeInterval: e.target.value })} type={"text"} value={AgeInterval}
            onChangeCapture={onChangeHandle} />
          <div className="headingc16" /* style={{ marginTop: "-10px" }} */>Beskrivning</div>

          <div className='headingb3'>Kompletterande beskrivning av urval</div>

          <textarea className="textArea" name={"Additional"} value={Additional}
            onChange={(e) => updateArray({ Additional: e.target.value })} onChangeCapture={onChangeHandle}></textarea>
          <div className="info" /* style={{ marginTop: "0px", height: "38px" }} */>Urvalet ska omfattas av
            etikprövningsansökan. Hänvisa till sida i EPM. Referera till stycke i EPM.</div>
          {/* <p className="info" style={{backgroundColor:"white", color:"black", marginTop:"10px", padding:"0px"}}>Om data ska samköras med data från annan myndighet, vilka
            variabler ska samkörningen göras på? (tex personnummer, 
            operationsdatum)
          </p> */}
          <div className="borderline" style={{ marginTop: "64px" }}></div>

          <div className='headingb2' >Variabler</div>
          <br />
          <div className="headinga16" /* style={{ width: "592px", height: "48px" }} */>Önskade variabler ska vara angivna i godkänd etikprövningsansökan.
            De kan även bifogas som separat dokument. Om möjligt bifoga gärna maskininläsbar fil i excel.</div>

          <div className='headingb3' >Beskriv variabler (frivilligt)</div>
          <label></label>

          <textarea className="textArea" name={"DescriptionOfVariables"} value={DescriptionOfVariables}
            onChange={(e) => updateArray({ DescriptionOfVariables: e.target.value })} onChangeCapture={onChangeHandle}></textarea>
          <br />
          <div className="info" /* style={{ marginTop: "0px" }} */>Hänvisa till sida i EPM. Referera till stycke i EPM.</div>
          <br /><br />
          <label className='headingb3' >Bifoga variabellista</label>
          <div className={fileName ? "backgroundFile" : 'backgroundFileNoFile'}>
            <label className="labelUploadFileLeft">{fileName ? Variabellista[variableIndex].name : "Ingen fil uppladdad"}</label>
            {!fileName && <label htmlFor={"inputTag"} className="labelUploadFileRight">Ladda upp fil</label>}
            {!fileName && <label id={"labelTag"} htmlFor={"inputTag"} ><input id="inputTag" multiple
              type="file" name="V" onChange={(e) => {updateFields({ Variabellista: [...Variabellista, e.target.files[0]] });
            onSetFilename()}}
              
              onChangeCapture={e => setFileName(true)} />

              {!fileName && <div className="vector" style={{ marginLeft: "460px", marginTop: "10px" }}>
                <div className="paperclip-1" >
                  <div className="paperclip-2">
                    <div className="paperclip-3" >
                      <div className="paperclip-4">
                      </div>
                    </div>
                  </div>
                </div>
              </div>}

            </label>}
            {fileName && <label htmlFor="LabelTag" onClick={(e) => { onChangeHandle2(e); setFileName(!fileName); }}
              className="labelUploadFileRight">Ta bort fil
              <div className="gg-trash labelUploadFileRight" id="LabelTag" style={{ marginLeft: "-15px", marginTop: "-13px" }}></div>
            </label>}
          </div>
          <div className="borderline" style={{ marginTop: "64px" }}></div>

          <div className='headingb2'>Vilket filformat önskas vid leverans av data?</div>
          <br />
          <div className="headingb16" >
            <input type="radio" className="checkb" /* style={{ marginTop: "42px" }} */ value={"Textfil"} name={"FileFormat"}
              onChange={(e) => { updateArray({ FileFormat: e.target.value }); setVisible2(false) }} onChangeCapture={onChangeHandle} />Textfil
            <br /><br />
            <input type="radio" className="checkb" value={"Excel"} name={"FileFormat"}
              onChange={(e) => { updateArray({ FileFormat: e.target.value }); setVisible2(false) }} onChangeCapture={onChangeHandle} />Excel
            <br /><br />
            <input type="radio" className="checkb" value={"Annat"} name={"FileFormat"}
              onChange={(e) => setVisible2(true)} onChangeCapture={onChangeHandle} />Annat
            <br />
            {isvisble2 && <div>
              <label className='headingb3'>Ange annat önskat filformat</label>
              <input className="textBox" type={"text"}
                onChange={(e) => updateArray({ FileFormat: e.target.value })} onChangeCapture={onChangeHandle} />
            </div>}
          </div>
          <div className="borderline" style={{ marginTop: "64px" }}></div>

          <div className='headingb2'>Till vem ska aktuell data levereras?</div>
          <br /><br /><br />
          <div>
            <input type={"radio"} defaultChecked={true} style={{ marginLeft: "0px" }} name={"NameOfPerson"} value={"Huvudansvarig forskare"}
              onChange={(e) => { updateArray({ DataDelivered: e.target.value }); setVisible(true); onChangeHandle(e) }} />
            <div className="r1"/* style={{ width: "559px", height: "auto", marginLeft: "20px", marginTop: "-22px" }} */>Huvudansvarig forskare</div>
            <br />
            <input type={"radio"} style={{ marginLeft: "0px" }} name={"NameOfPerson"} value={"Annan mottagare in forskningshuvudmannens organisation"}
              onChange={(e) => { updateArray({ DataDelivered: e.target.value }); setVisible(false) }} />
            <div className="r1"/* style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-22px" }} */>Annan mottagare inom forskningshuvudmannens organisation</div>
            <br />
            <input type={"radio"} style={{ marginLeft: "0px" }} name={"NameOfPerson"} value={"Handläggare på SCB/Socialstyrelsen (för samkörning)"}
              onChange={(e) => { updateArray({ DataDelivered: e.target.value }); setVisible(false) }} />
            <div className="r1"/* style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-22px" }} */>Handläggare på SCB/Socialstyrelsen (för samkörning)</div>
            <br />
            <input type={"radio"} style={{ marginLeft: "0px" }} name={"NameOfPerson"} value={"Mottagre utanför forskningshuvudmannens organisation på" +
              "uppdrag av forskningshuvudmannen (PUB-avtal krävs)"}
              onChange={(e) => { updateArray({ DataDelivered: e.target.value }); setVisible(false) }} />
            <div className="r2"/* style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-32px" }} */>Mottagare utanför forskningshuvudmannens organisation på
              uppdrag av forskningshuvudmannen (PUB-avtal krävs)</div>


          </div>

          
          {!isvisble && <div>
            <div className="headingb3" /* style={{ marginTop: "27px" }} */>För- och efternamn</div>

            <input
              className="textBox"
              type="text"

              name="Name" onChange={(e) => updateArray({ Name: e.target.value })}
            />



            {/* // onChange={e=>updateFields({Huvudans_Namn:e.target.value})}/> */}
            <br />
            <div className="headingb3">Organisation</div>

            <input className="textBox" type="text" name="Organization"
              onChange={(e) => updateArray({ Organization: e.target.value })} />
            {/* // onChange={e=>updateFields({Huvudans_Organisation:e.target.value})}/> */}
            <br />
            <div className="headingb3">E-post</div>

            <input className="textBox" type="text" name="Mail"
              onChange={(e) => updateArray({ Mail: e.target.value })} />
            {/* // onChange={e=>updateFields({Huvudans_Epostadress:e.target.value})}/> */}
            <br />
            <div className="headingb3">Mobiltelefon</div>

            <input className="textBox" type="text" name="Phone"
              onChange={(e) => { updateArray({ Phone: e.target.value }) }} />
            {/* // onChange={e=>updateFields({Huvudans_Mobiltelefon:e.target.value})}/> */}



          </div>}
          {isvisble && <div>
            <div className="headingb3" /* style={{ marginTop: "27px" }} */>För- och efternamn</div>

            <input
              className="textBox"
              type="text"
              value={Huvudans_Namn}

            />



            {/* // onChange={e=>updateFields({Huvudans_Namn:e.target.value})}/> */}
            <br />
            <div className="headingb3">Organisation</div>

            <input className="textBox" type="text" value={Huvudans_Organisation} name="Organization"
            />
            {/* // onChange={e=>updateFields({Huvudans_Organisation:e.target.value})}/> */}

            <div className="headingb3">E-post</div>

            <input className="textBox" type="text" value={Huvudans_Epostadress} name="Mail"
            />
            {/* // onChange={e=>updateFields({Huvudans_Epostadress:e.target.value})}/> */}

            <div className="headingb3">Mobiltelefon</div>

            <input className="textBox" type="text" value={Huvudans_Mobiltelefon} name="Phone"
            />
            {/* // onChange={e=>updateFields({Huvudans_Mobiltelefon:e.target.value})}/> */}



          </div>}

          <div className="borderline" style={{ marginTop: "64px" }}></div>
          <div className="headingb2">Länkning/Samkörning av data</div>
          <br />
          <div className="headingb3" /* style={{ width: "540px", height: "48px" }} */>Ska data från aktuellt register samköras med inkommande
            fil från beställaren?
          </div>

          <input type="radio" style={{ marginTop: "34px", marginLeft: "0px" }} value={"Nej"} name="SyncRegistersWithFile"
            onChange={(e) => updateArray({ SyncRegistersWithFile: e.target.value })} onChangeCapture={onChangeHandle} />
          <div className="r1"/* style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-20px" }} */>Nej</div>

          <input type="radio" style={{ marginTop: "24px", marginLeft: "0px" }} value={"Ja"} name="SyncRegistersWithFile" onChange={(e) => updateArray({ SyncRegistersWithFile: e.target.value })} onChangeCapture={onChangeHandle} />
          <div className="r1"/* style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-20px" }} */>Ja</div>
          <div className="headingb3">Ska data från aktuellt register samköras med andra datakällor?
          </div>
          <br />
          <input type="radio" style={{ marginTop: "34px", marginLeft: "0px" }} value={"Nej"} name="SyncRegisterFromOtherSources" onChange={(e) => {
            onChangeHandle; setVisible3(false); updateArray({
              SyncRegisterFromOtherSources: e.target.value
            })
          }} />
          <div className="r1"/* style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-20px" }} */>Nej</div>

          <input type="radio" style={{ marginTop: "24px", marginLeft: "0px" }} value={"Ja"} name="SyncRegisterFromOtherSources" onChange={(e) => {
            onChangeHandle; setVisible3(true); updateArray({
              SyncRegisterFromOtherSources: e.target.value
            })
          }} />
          <div className="r1"/* style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-20px" }} */>Ja</div>

          {isvisble3 && <div>
            <div className="headingb3">Ange datakällor</div>

            <input className="textBox" type="text" value={NameDatasources}
              onChange={(e) => updateArray({ NameDatasources: e.target.value })} onChangeCapture={onChangeHandle} />

            <div className="headingb3" style={{ marginTop: "37px" }}>Beskriv den tänkta processen kring samkörning</div>

            <textarea className="textArea" value={ProcessOfSync}
              onChange={(e) => updateArray({ ProcessOfSync: e.target.value })} onChangeCapture={onChangeHandle}></textarea>

            <div className="headingb3">Vilka variabler ska samkörningen göras på?
            </div>

            <textarea className="textArea" value={WhichVariables}
              onChange={(e) => updateArray({ WhichVariables: e.target.value })} onChangeCapture={onChangeHandle}></textarea>
            <br />

            <div className="headinga16" >Till exempel personnummer, operationsnummer etc</div>
            <div className="info" >Hänvisa till sida EPM. Referera till stycke i EPM.</div>
          </div>}
          <button style={{ marginLeft: "0px" }} className="secondaryButton" onClick={ClearData}>Rensa datauttag</button>
          {/* <button className="primaryButton" onClick={addData}>Lägg till detta */}
          {/* datauttag till ansökan</button> */}
          <button type="button" style={{ marginLeft: "10px", float: "none" }} className="primaryButton"
            onClick={AddData}>Lägg till detta datauttag till ansökan</button>


        </div>
      </div>
      <br />
      {Arra.length > 0 && <div className="Form">
        <div className="headdiv">
          <label className="headingb2">Tillagda datauttag</label>
          {Arra.length > 0 ?

            Arra.map((arra, index) => {
              //const a = Arra.findIndex(maps.FromDate);
              console.log(Arra.length);
              console.log(index + " = " + arra.ToDate + " = " + arra);
              return (
                <>
                  <AddData1 key={index} maps={arra} i={index} visible={false} />
                </>
              )
            })
            : ""}
        </div>
      </div>}
    </div>

  );

  function ShowContent() {
    setIsShowing(isShowing);
  }
  function AddData() {
    //datas.SelectSelection = "B";
    console.log(aa.DateInterval);
    //if (aa.FromDate === "") {
    //alert("Fyll i saknade uppgifter");
    //return;
    // }

    //setB((old)=>[...old, aa])
    console.log(aa.Name);
    // updateFields([Arra, bb])
    //Arra.push(aa);
    if (isvisble) {
      Name = INITIAL_DATA.Name;
      Organization = INITIAL_DATA.Organization;
      Mail = INITIAL_DATA.Mail;
      Phone = INITIAL_DATA.Phone;
    }
    count = count + 1;
    setCount(count)

    ID = count;
    //setA({ ...aa, Additional: "Additional" })
    Arra.push({
      ID, Goverment, Register, FromDate, ToDate, DateInterval, Gender, AgeFrom, AgeTo, AgeInterval, Additional,
      DescriptionOfVariables, V, FileFormat, DataDelivered, Name, Organization, Mail, Phone, SyncRegistersWithFile,
      SyncRegisterFromOtherSources, NameDatasources, ProcessOfSync, WhichVariables
    });

    const indexSection = isShowing.length;
    setIsShowing([...isShowing, {
      index: indexSection,
      show: false
    }])

    //setFileName(!fileName);


    // const indexSection = visibleSections.length;

    // setVisibleSections([...visibleSections, {
    //   index:indexSection,
    //   Visible:false,
    //   file:false
    // }


    reset();


  }



  function ClearData(e) {
    e.preventDefault();
    const newArra = [...Arra];
    newArra.pop();
    updateFields({ Arra: newArra });

  }

  function SelectReg() {


    //Get_Place(Place_ID);

    return (
      <div className="select" >
      <select onChange={(e) => updateArray({ Register: e.target.value })} value={Register}>
        <option>Välj datakälla</option>
        {register.map((maps) =>
          <>

            <option>{maps.Datauttagsnamn}</option>
          </>
        )}

      </select>
      </div>
    )



  }

  async function Get_Place(Place_ID: number) {



    try {
      const apiData = await GetRegister(Place_ID);
      setRegister(apiData);
    } catch (error) {
      // Handle the error here
    }
  }

  function SelectAgeFrom() {
    const onHandleChange = (e) => {
      const index = e.target.options[e.target.selectedIndex].getAttribute("age-id");
      setAgeIndex(index);
    }
    return (
      <div className="select" style={{ marginLeft: "0px" }}>
        <select style={{ marginLeft: "0px", width: "210px", marginTop: "6px" }} name={"AgeFrom"} onChange={(e) => { updateArray({ AgeFrom: e.target.value }); onHandleChange(e) }} value={AgeFrom}
          onChangeCapture={onChangeHandle}>
          {age.map((maps, index) =>
            <option age-id={index}>{maps}</option>
          )}
        </select>

      </div>
    )
  }
  function SelectAgeTo() {
    return (
      <div className="select" style={{ marginLeft: "225px" }}>
        <select style={{ marginLeft: "40px", width: "210px", marginTop: "6px" }} name={"AgeTo"} onChange={(e) => updateArray({ AgeTo: e.target.value })} value={AgeTo}
          onChangeCapture={onChangeHandle}>
          {age.map((maps, index) => {

            if (index >= ageIndex) {

              return <option key={index}>{maps}</option>
            }
          }
          )}
        </select>

      </div>
    )
  }

  function AddData1(props) {
    console.log('maps', props)
    let date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return (
      <div>
        <div className="datacollectio">
          <div className="datacollectionheading3">{props.maps.ID}Datauttag: {props.maps.Register}</div>
          <div className="datacollectionheading4">Skapat {date.toLocaleTimeString('sv-SE', options)}</div>
          <div className="datacollectionheading5" onClick={e => checkIndex(props.i, !isShowing[props.i].show)} typeof="button">Visa mer innehåll</div>
          <button className="buttonAndra secondaryButton" onClick={e => { change(props.i); e.preventDefault() }}>Ändra</button>
          {isShowing[props.i].show &&
            <div className="collection-container">
              <div className="datakalla">Datakälla:{props.maps.Goverment}</div>
              <div style={{ width: "432px" }}>
                <div className="urval">Urval</div>
                <div style={{ display: "flex", gap: "44px" }}>

                  <div className="headingb3">Från datum</div>
                  <div className="headingb3">Till datum</div>
                </div>
                <div style={{ display: "flex", gap: "50px" }}>
                  <div className="headingb">{props.maps.FromDate}</div>
                  <div className="headingb">{props.maps.ToDate}</div>
                </div>
                <div className="headingb3">Datumintervallet avser</div>
                <div className="headingb">{props.maps.DateInterval}</div>
                <div className="headingb3">Kön</div>
                <div className="headingb">{props.maps.Gender}</div>
                <div style={{ display: "flex", gap: "44px" }}>
                  <div className="headingb3">Ålder från</div>
                  <div className="headingb3">Ålder till</div>
                </div>
                <div style={{ display: "flex", gap: "104px" }}>
                  <div className="headingb">{props.maps.AgeFrom}</div>
                  <div className="headingb">{props.maps.AgeTo}</div>
                </div>
                <div className="headingb3">Ange vad datumintervallet avser</div>
                <div className="headingb">{props.maps.AgeInterval}</div>
                <div className="headingb3">Kompletterande beskrivning av urval</div>
                <div className="headingb">{props.maps.Additional}</div>
              </div>
              <div style={{ width: "432px" }}>
                <div className="variabler">Variabler</div>
                <div className="headingb3">Beskriv variabler</div>
                <div className="headingb">Beskriv variabler{props.maps.DescriptionOfVariables}</div>
              </div>
              {/* <div className="headingb3">Variabellista filformat{props.maps.V.name}</div> */}
              <div className="filformat">Vilket filformat önskas vid leverans av data?</div>
              <div className="filforma">{props.maps.FileFormat}</div>
              <div className="leverans">Till vem ska aktuell data levereras?</div>
              <div className="leveran">{props.maps.DataDelivered}</div>
              <div className="headingb3">För- och efternamn</div>
              <div className="headingb">{props.maps.Name}</div>
              <div className="headingb3">Organisation</div>
              <div className="headingb">{props.maps.Organization}</div>
              <div className="headingb3">Mobil</div>
              <div className="headingb">{props.maps.Phone}</div>
              <div className="headingb3">Epost</div>
              <div className="headingb">{props.maps.Mail}</div>
              <div style={{ width: "484px" }}>
                <div className="leverans">Samkörning av data</div>
                <div className="headingb3">Ska data från aktuellt register samköras med inkommande fil från beställaren?</div>
                <br/>
                <div className="headingb">{props.maps.SyncRegistersWithFile}</div>
                <div className="headingb3">Ska data från aktuellt register samköras med andra datakällor?</div>
                <div className="headingb">{props.maps.SyncRegisterFromOtherSources}</div>
                <div className="headingb3">Ange datakällor</div>
                <div className="headingb">{props.maps.NameDatasources}</div>
                <div className="headingb3">Beskriv den tänkta processen kring samkörning</div>
                <div className="headingb">{props.maps.ProcessOfSync}</div>
                <div className="headingb3">Vilka variabler ska samkörningen göras på ?
                  (t ex personnummer, operationsdatum</div>
                  <br/>
                  <div className="headingb">{props.maps.WhichVariables}</div>
              </div>
            </div>}


        </div>
        <br />

      </div>
    )
  }



  function SelectGov() {
    // MyComponent.jsx



    const [data1, setData] = useState([{
      Place_ID: 0,
      Omrade: ""
    }]);
    const [count, setCount] = useState(-1);
    let num = 0;
    useEffect(() => {

      const fetchDataFromApi = async () => {

        try {
          const apiData = await GetGoverment();
          setData(apiData);
        } catch (error) {
          // Handle the error here
        }
      };

      fetchDataFromApi();

    }, []);

    console.log("register " + data1);
    // Render the component based on the fetched data
    const handleOptionChange = (e) => {
      const selectedOption = e.target.value;
      console.log(e.currentTarget["data-id"])
      const selectedId = e.target.options[e.target.selectedIndex].getAttribute("data-id");
      Get_Place(selectedId);
    }


    //const fetchDataFromApi = async () => {
    //try {

    //} catch (error) {
    // Handle the error here
    //}
    //};

    //fetchDataFromApi();

    return (
      <div className="select" >
        <select name="Goverment" onChange={(e) => { updateArray({ Goverment: e.target.value }); handleOptionChange(e) }} value={Goverment}>
          <option>Välj förvaltning</option>
          {data1.map((maps, index) => {

            return <option key={maps.Place_ID} value={maps.Omrade} data-id={maps.Place_ID}>{maps.Omrade}</option>

          })};
        </select>



      </div>
    )

  }
  function Change() {
    return (
      <>
        <div className='datacollectionChange'>
          <div className='datacollectionChangeheaddiv'>
            <br /><br /><br />
            <div className='headingb2'>Ange datakälla</div>


            <div className='headingb3'>Välj datakälla</div>
            <SelectGov />
            <br /><br /><br />
            <SelectReg />

            <br />
            <br /><br />
            <Reg />


            <div className="borderline" style={{ marginTop: "64px" }}></div>
            <label className="headingb2">Urval</label>
            <br />
            <div className="headingb16" style={{ width: "592px", height: "120px" }}>Vilket urval ska gälla för data?
              Det kan handla om datumintervall, diagnoser, kön, region,
              ålder, och så vidare. Var så specifik som möjligt.
              Utsökningen underlättas om registrets variabelnamn och
              tillhörande variabelvärden används vid beskrivning av
              urvalet, tex Surg_Age &ge; 65 och Surg_County=Stockholm.
              Urvalet ska vara angivet i godkänd etikprövningsansökan.</div>

            <br />
            <label className='headingb3' >Från datum</label>
            <label className='headingb3' style={{ marginLeft: "203px" }}>Till datum</label>

            <input type="date" id="date" name={"FromDate"} onChange={(e) => { updateArray({ FromDate: e.target.value }); setFromDate(e.target.value) }} onChangeCapture={onChangeHandle} value={FromDate} />
            <input type="date" id="date" style={{ marginLeft: "41px" }} name={"ToDate"} onChange={handleToDateChange} onChangeCapture={onChangeHandle} value={ToDate} />
            {!validDate && <p className="paragraphRed">Datumet kan inte vara tidigare än det första valda datumet</p>}
            <br />
            <div className='headingb3' >Ange vad datumintervallet avser</div>

            <input className="textBox" type={"text"} name={"DateInterval"} onChange={(e) => updateArray({ DateInterval: e.target.value })} onChangeCapture={onChangeHandle} value={DateInterval} />
            <div className="headingb16" style={{
              marginTop: "-10px", marginLeft: "0px",
              backgroundColor: "white", color: "black"
            }}>Diagnosår, besök, m.m.</div>
            <br /><br />
            <div style={{ width: "245px", height: "100px" }}>
              <label className="headingb3" >Kön</label>
              <br />
              <label className="headingb16" htmlFor="all" ></label>
              <input onChange={(e) => updateArray({ Gender: e.target.value })} onChangeCapture={onChangeHandle} id="all"
                value={"Alla"} type={"radio"} name={"Gender"} style={{ marginTop: "16px", marginLeft: "0px" }} />Alla

              <br />
              <input value={"Kvinna"} onChange={(e) => updateArray({ Gender: e.target.value })} onChangeCapture={onChangeHandle} type={"radio"} name={"Gender"} style={{ marginLeft: "0px", marginTop: "20px" }} />Kvinna
              <br />
              <input value={"Man"} onChange={(e) => updateArray({ Gender: e.target.value })} onChangeCapture={onChangeHandle} type={"radio"} name={"Gender"} style={{ marginLeft: "0px", marginTop: "20px" }} />Man
            </div>
            <br /><br /><br />
            <label className='headingb3' style={{ marginLeft: "0px", marginTop: "40px" }}>Ålder från</label>
            <label className='headingb3' style={{ marginLeft: "189px" }}>Ålder till</label>
            <br />
            <SelectAgeFrom />
            <SelectAgeTo />
            <br /><br /><br />
            <div className='headingb3' style={{ marginTop: "37px" }}>Ange vad åldersintervallet avser</div>
            <input className="textBox" name={"AgeInterval"} onChange={(e) => updateArray({ AgeInterval: e.target.value })} type={"text"} value={AgeInterval}
              onChangeCapture={onChangeHandle} />
            <div className="headingb16" style={{ marginTop: "-10px" }}>Beskrivning</div>

            <div className='headingb3'>Kompletterande beskrivning av urval</div>

            <textarea className="textArea" name={"Additional"} value={Additional}
              onChange={(e) => updateArray({ Additional: e.target.value })} onChangeCapture={onChangeHandle}></textarea>
            <div className="info" style={{ marginTop: "0px", height: "38px" }}>Urvalet ska omfattas av
              etikprövningsansökan. Hänvisa till sida i EPM. Referera till stycke i EPM.</div>
            {/* <p className="info" style={{backgroundColor:"white", color:"black", marginTop:"10px", padding:"0px"}}>Om data ska samköras med data från annan myndighet, vilka
            variabler ska samkörningen göras på? (tex personnummer, 
            operationsdatum)
          </p> */}
            <div className="borderline" style={{ marginTop: "64px" }}></div>

            <label className='headingb2' >Variabler</label>
            <br />
            <div className="headingb16" style={{ width: "592px", height: "48px" }}>Önskade variabler ska vara angivna i godkänd etikprövningsansökan.
              De kan även bifogas som separat dokument. Om möjligt bifoga gärna maskininläsbar fil i excel.</div>

            <div className='headingb3' >Beskriv variabler (frivilligt)</div>
            <label></label>

            <textarea className="textArea" name={"DescriptionOfVariables"} value={DescriptionOfVariables}
              onChange={(e) => updateArray({ DescriptionOfVariables: e.target.value })} onChangeCapture={onChangeHandle}></textarea>
            <br />
            <div className="info" style={{ marginTop: "0px" }}>Hänvisa till sida i EPM. Referera till stycke i EPM.</div>
            <br /><br />
            <label className='headingb3' >Bifoga variabellista</label>
            <div className={fileName ? "backgroundFile" : 'backgroundFileNoFile'}>
              <label className="labelUploadFileLeft">{fileName ? Variabellista.name : "Ingen fil uppladdad"}</label>
              {!fileName && <label htmlFor={"inputTag"} className="labelUploadFileRight">Ladda upp fil</label>}
              {!fileName && <label id={"labelTag"} htmlFor={"inputTag"} ><input id="inputTag" multiple
                type="file" name="V" onChange={(e) => updateFields({ Variabellista: [...Variabellista, e.target.files[0]] })}
                onChangeCapture={e => setFileName(true)} />

                {!fileName && <div className="vector" style={{ marginLeft: "460px", marginTop: "10px" }}>
                  <div className="paperclip-1" >
                    <div className="paperclip-2">
                      <div className="paperclip-3" >
                        <div className="paperclip-4">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}

              </label>}
              {fileName && <label htmlFor="LabelTag" onClick={(e) => { onChangeHandle2(e); setFileName(!fileName); }}
                className="labelUploadFileRight">Ta bort fil
                <div className="gg-trash labelUploadFileRight" id="LabelTag" style={{ marginLeft: "-15px", marginTop: "-13px" }}></div>
              </label>}
            </div>
            <div className="borderline" style={{ marginTop: "64px" }}></div>

            <label className='headingb2'>Vilket filformat önskas vid leverans av data?</label>
            <br />
            <div className="headingb16" >
              <input type="radio" className="checkb" style={{ marginTop: "42px" }} value={"Textfil"} name={"FileFormat"}
                onChange={(e) => { updateArray({ FileFormat: e.target.value }); setVisible2(false) }} onChangeCapture={onChangeHandle} />Textfil
              <br /><br />
              <input type="radio" className="checkb" value={"Excel"} name={"FileFormat"}
                onChange={(e) => { updateArray({ FileFormat: e.target.value }); setVisible2(false) }} onChangeCapture={onChangeHandle} />Excel
              <br /><br />
              <input type="radio" className="checkb" value={"Annat"} name={"FileFormat"}
                onChange={(e) => setVisible2(true)} onChangeCapture={onChangeHandle} />Annat
              <br />
              {isvisble2 && <div>
                <label className='headingb3'>Ange annat önskat filformat</label>
                <input className="textBox" type={"text"}
                  onChange={(e) => updateArray({ FileFormat: e.target.value })} onChangeCapture={onChangeHandle} />
              </div>}
            </div>
            <div className="borderline" style={{ marginTop: "64px" }}></div>

            <label className='headingb2'>Till vem ska aktuell data levereras?</label>
            <br /><br /><br />
            <div>
              <input type={"radio"} defaultChecked={true} style={{ marginLeft: "0px" }} name={"NameOfPerson"} value={"Huvudansvarig forskare"}
                onChange={(e) => { updateArray({ DataDelivered: e.target.value }); setVisible(true); onChangeHandle(e) }} />
              <div style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-22px" }}>Huvudansvarig forskare</div>
              <br />
              <input type={"radio"} style={{ marginLeft: "0px" }} name={"NameOfPerson"} value={"Annan mottagare in forskningshuvudmannens organisation"}
                onChange={(e) => { updateArray({ DataDelivered: e.target.value }); setVisible(false) }} />
              <div style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-22px" }}>Annan mottagare inom forskningshuvudmannens organisation</div>
              <br />
              <input type={"radio"} style={{ marginLeft: "0px" }} name={"NameOfPerson"} value={"Handläggare på SCB/Socialstyrelsen (för samkörning)"}
                onChange={(e) => { updateArray({ DataDelivered: e.target.value }); setVisible(false) }} />
              <div style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-22px" }}>Handläggare på SCB/Socialstyrelsen (för samkörning)</div>
              <br />
              <input type={"radio"} style={{ marginLeft: "0px" }} name={"NameOfPerson"} value={"Mottagre utanför forskningshuvudmannens organisation på" +
                "uppdrag av forskningshuvudmannen (PUB-avtal krävs)"}
                onChange={(e) => { updateArray({ DataDelivered: e.target.value }); setVisible(false) }} />
              <div style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-32px" }}>Mottagare utanför forskningshuvudmannens organisation på
                uppdrag av forskningshuvudmannen (PUB-avtal krävs)</div>


            </div>

            <div>{aa.Name}</div>
            {!isvisble && <div>
              <div className="headingb3" style={{ marginTop: "27px" }}>För- och efternamn</div>

              <input
                className="textBox"
                type="text"

                name="Name" onChange={(e) => updateArray({ Name: e.target.value })}
              />



              {/* // onChange={e=>updateFields({Huvudans_Namn:e.target.value})}/> */}
              <br />
              <div className="headingb3">Organisation</div>

              <input className="textBox" type="text" name="Organization"
                onChange={(e) => updateArray({ Organization: e.target.value })} />
              {/* // onChange={e=>updateFields({Huvudans_Organisation:e.target.value})}/> */}
              <br />
              <div className="headingb3">E-post</div>

              <input className="textBox" type="text" name="Mail"
                onChange={(e) => updateArray({ Mail: e.target.value })} />
              {/* // onChange={e=>updateFields({Huvudans_Epostadress:e.target.value})}/> */}
              <br />
              <div className="headingb3">Mobiltelefon</div>

              <input className="textBox" type="text" name="Phone"
                onChange={(e) => { updateArray({ Phone: e.target.value }) }} />
              {/* // onChange={e=>updateFields({Huvudans_Mobiltelefon:e.target.value})}/> */}



            </div>}
            {isvisble && <div>
              <div className="headingb3" style={{ marginTop: "27px" }}>För- och efternamn</div>

              <input
                className="textBox"
                type="text"
                value={Huvudans_Namn}

              />



              {/* // onChange={e=>updateFields({Huvudans_Namn:e.target.value})}/> */}
              <br />
              <div className="headingb3">Organisation</div>

              <input className="textBox" type="text" value={Huvudans_Organisation} name="Organization"
              />
              {/* // onChange={e=>updateFields({Huvudans_Organisation:e.target.value})}/> */}

              <div className="headingb3">E-post</div>

              <input className="textBox" type="text" value={Huvudans_Epostadress} name="Mail"
              />
              {/* // onChange={e=>updateFields({Huvudans_Epostadress:e.target.value})}/> */}

              <div className="headingb3">Mobiltelefon</div>

              <input className="textBox" type="text" value={Huvudans_Mobiltelefon} name="Phone"
              />
              {/* // onChange={e=>updateFields({Huvudans_Mobiltelefon:e.target.value})}/> */}



            </div>}

            <div className="borderline" style={{ marginTop: "64px" }}></div>
            <div className="headingb2">Länkning/Samkörning av data</div>
            <br />
            <div className="headingb3" style={{ width: "540px", height: "48px" }}>Ska data från aktuellt register samköras med inkommande
              fil från beställaren?
            </div>

            <input type="radio" style={{ marginTop: "34px", marginLeft: "0px" }} value={"Nej"} name="SyncRegistersWithFile"
              onChange={(e) => updateArray({ SyncRegistersWithFile: e.target.value })} onChangeCapture={onChangeHandle} />
            <div style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-20px" }}>Nej</div>

            <input type="radio" style={{ marginTop: "24px", marginLeft: "0px" }} value={"Ja"} name="SyncRegistersWithFile" onChange={(e) => updateArray({ SyncRegistersWithFile: e.target.value })} onChangeCapture={onChangeHandle} />
            <div style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-20px" }}>Ja</div>
            <div className="headingb3">Ska data från aktuellt register samköras med andra datakällor?
            </div>
            <br />
            <input type="radio" style={{ marginTop: "34px", marginLeft: "0px" }} value={"Nej"} name="SyncRegisterFromOtherSources" onChange={(e) => {
              onChangeHandle; setVisible3(false); updateArray({
                SyncRegisterFromOtherSources: e.target.value
              })
            }} />
            <div style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-20px" }}>Nej</div>

            <input type="radio" style={{ marginTop: "24px", marginLeft: "0px" }} value={"Ja"} name="SyncRegisterFromOtherSources" onChange={(e) => {
              onChangeHandle; setVisible3(true); updateArray({
                SyncRegisterFromOtherSources: e.target.value
              })
            }} />
            <div style={{ width: "559px", height: "40px", marginLeft: "20px", marginTop: "-20px" }}>Ja</div>

            {isvisble3 && <div>
              <div className="headingb3">Ange datakällor</div>

              <input className="textBox" type="text" value={NameDatasources}
                onChange={(e) => updateArray({ NameDatasources: e.target.value })} onChangeCapture={onChangeHandle} />

              <div className="headingb3" style={{ marginTop: "37px" }}>Beskriv den tänkta processen kring samkörning</div>

              <textarea className="textArea" value={ProcessOfSync}
                onChange={(e) => updateArray({ ProcessOfSync: e.target.value })} onChangeCapture={onChangeHandle}></textarea>

              <div className="headingb3">Vilka variabler ska samkörningen göras på?
              </div>

              <textarea className="textArea" value={WhichVariables}
                onChange={(e) => updateArray({ WhichVariables: e.target.value })} onChangeCapture={onChangeHandle}></textarea>
              <br />

              <div className="headingb16" >Till exempel personnummer, operationsnummer etc</div>
              <div className="info" >Hänvisa till sida EPM. Referera till stycke i EPM.</div>
            </div>}
            <button style={{ marginLeft: "0px" }} className="secondaryButton" onClick={ClearData}>Avbryt</button>
            {/* <button className="primaryButton" onClick={addData}>Lägg till detta */}
            {/* datauttag till ansökan</button> */}
            <button type="button" style={{ marginLeft: "10px", float: "none" }} className="primaryButton"
              onClick={AddData}>Spara ändringar</button>
            <br /><br /><br /><br />

          </div>
        </div>
      </>
    )
  }


  function FF(value: Number) {

  }

  function Reg() {
    return (
      <div className='info' style={{ height: "100px", marginTop: "40px" }}>{/* <strong>Svenska artrosregistret</strong> */}

        <ul>
          {/* <li>Behöver du hjälp med din beställning av datauttag från Svenska artrosregistret, kontakta...</li>
          <li>Här hittar du variabellista för Svenska artrosregistret.</li> */}
        </ul>

        <br /><br />

      </div>
    )
  }

}
