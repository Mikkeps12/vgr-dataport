import { useState } from "react";
// @ts-ignore
import { AboutByer } from "./AboutByer.tsx";
// @ts-ignore
import { Roll } from "./Roll.tsx";
// @ts-ignore
import { AboutScience } from "./AboutScience.tsx";
// @ts-ignore
import { AddData } from "./AddData.tsx";
// @ts-ignore
import { useMultistepForms } from "./useMultistepForms.ts";
// @ts-ignore
import { Preview } from "./Preview.tsx";
// @ts-ignore
import { End } from "./End.tsx";
// @ts-ignore
import { Post } from "./Api.ts"
import React from "react";
//import { arrayBuffer } from "node:stream/consumers";

const HandleException: Array1 = {
  ForskningshuvudmanControl: true,
  Bestallare_NamnControl: true,
  Bestallare_Titel_och_RollControl: true,
  Bestallare_EpostadressControl: true,
  Bestallare_MobiltelefonControl: true,
  Bestallare_OrganisationControl: true,
  Huvudans_NamnControl: true,
  Huvudans_EpostadressControl: true,
  Huvudans_MobiltelefonControl: true,
  Huvudans_OrganisationControl: true,
  PUB_AvtalControl: true,
  Bestallare_Fak_OrgControl: true,
  Bestallare_Fak_AdressControl: true,
  Bestallare_PostnummerControl: true,
  Bestallare_PostortControl: true,
  Bestallare_Fak_ReferensControl: true,
  DiarienummerControl: true,
  ProjekttitelControl: true,
  ProjektbeskrivningControl: true,
  LakemedelstudierControl: true,
  Samarbete_Med_IndustrinControl: true,
}

type Array1 = {
  ForskningshuvudmanControl: boolean
  Bestallare_NamnControl: boolean,
  Bestallare_Titel_och_RollControl: boolean,
  Bestallare_EpostadressControl: boolean,
  Bestallare_MobiltelefonControl: boolean,
  Bestallare_OrganisationControl: boolean,
  Huvudans_NamnControl: boolean,
  Huvudans_EpostadressControl: boolean,
  Huvudans_MobiltelefonControl: boolean,
  Huvudans_OrganisationControl: boolean,
  PUB_AvtalControl: boolean,
  Bestallare_Fak_OrgControl: boolean,
  Bestallare_Fak_AdressControl: boolean,
  Bestallare_PostnummerControl: boolean,
  Bestallare_PostortControl: boolean,
  Bestallare_Fak_ReferensControl: boolean,
  DiarienummerControl: boolean,
  ProjekttitelControl: boolean,
  ProjektbeskrivningControl: boolean,
  LakemedelstudierControl: boolean,
  Samarbete_Med_IndustrinControl: boolean,
}


const hh: Array = {
  //a:"",
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
  WhichVariables: "",

}

type Array = {
  //a:string,
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
  WhichVariables: string,

}
type FormData = {
  Forskningshuvudman: string,
  ForskningshuvudmanCheck: boolean,
  Bestallare_Namn: string,
  Bestallare_Titel_och_Roll: string,
  Bestallare_Epostadress: string,
  Bestallare_Mobiltelefon: string,
  Bestallare_Organisation: string,
  Huvudans_Namn: string,
  Huvudans_Epostadress: string,
  Huvudans_Mobiltelefon: string,
  Huvudans_Organisation: string,
  PUB_Avtal: File,
  Bestallare_Fak_Org: string,
  Bestallare_Fak_Adress: string,
  Bestallare_Postnummer: string,
  Bestallare_Postort: string,
  Bestallare_Fak_Referens: string,


  Ansokan_Fil: File,
  Beslut_Fil: File,
  Kompletta_handlingar_Fil: File,
  Komplettering_Fil: File[],
  Projekttitel,
  Projektbeskrivning: string,
  Projektbeskrivning_Fil: File,
  Diarienummer: string,
  Andringansokan_Diarienummer: string,
  Andringansokan_Fil: File,
  Beslut_Andringansokan: File,
  Lakemedelstudier: string,
  Samarbete_Med_Industrin: string,
  Avtal_Industri: File,
  Variabellista: File[],
  Arra: Array
}

const INITIAL_DATA: FormData = {
  Forskningshuvudman: "",
  ForskningshuvudmanCheck: true,
  Bestallare_Namn: "",
  Bestallare_Titel_och_Roll: "",
  Bestallare_Epostadress: "",
  Bestallare_Mobiltelefon: "",
  Bestallare_Organisation: "",
  Huvudans_Namn: "",
  Huvudans_Epostadress: "",
  Huvudans_Mobiltelefon: "",
  Huvudans_Organisation: "",
  PUB_Avtal: [],
  Bestallare_Fak_Org: "",
  Bestallare_Fak_Adress: "",
  Bestallare_Postnummer: "",
  Bestallare_Postort: "",
  Bestallare_Fak_Referens: "",

  Projekttitel: "",
  Projektbeskrivning: "",
  Projektbeskrivning_Fil: {
    lastModified: 0,
    name: '',
    size: 0,
    webkitRelativePath: '',
    type: 'file',
    arrayBuffer: () => new ArrayBuffer(),
    slice: () => new Blob(),
    stream: () => new ReadableStream(),
    text: () => Promise.resolve(''),
    prototype: Object.create(File.prototype)
  },
  Diarienummer: "",
  Ansokan_Fil: {},
  Beslut_Fil: {},
  Kompletta_handlingar_Fil: {},
  Komplettering_Fil: [],
  Andringansokan_Diarienummer: "",
  Andringansokan_Fil: {},
  Beslut_Andringansokan: {
    lastModified: 0,
    name: '',
    size: 0,
    webkitRelativePath: '',
    type: 'file',
    arrayBuffer: () => new ArrayBuffer(),
    slice: () => new Blob(),
    stream: () => new ReadableStream(),
    text: () => Promise.resolve(''),
    prototype: Object.create(File.prototype)
  },
  Lakemedelstudier: "",
  Samarbete_Med_Industrin: "",
  Avtal_Industri: {
    lastModified: 0,
    name: '',
    size: 0,
    webkitRelativePath: '',
    type: 'file',
    arrayBuffer: () => new ArrayBuffer(),
    slice: () => new Blob(),
    stream: () => new ReadableStream(),
    text: () => Promise.resolve(''),
    prototype: Object.create(File.prototype)
  },
  Variabellista: [],

  Arra: []
};

const rowLakemedelsindustri = ["Nej, projektet gäller inte läkemedelsstudier",
  "Ja, projektet gäller läkemedelsstudier. Jag bekräftar med min ansökan om datauttag att det finns ett godkännandefrån Läkemedelsverket.",
  "Nej, projektet genomförs inte i samarbete med industrin",
  "Ja, projektet genomförs i samarbete med industrin. Avtal bifogas."
]

export function Main() {
  const [enableButton, setEnableButton] = useState(true)
  const [data, setdata] = useState(INITIAL_DATA);
  const [last, setLast] = useState(false);
  const [isValid1, setValid1] = useState(HandleException);
  const [A, setA] = useState('')


  const [array, setArray] = useState(hh);
  function updateArray(field: Partial<Array>) {
    setArray(pre => {
      return { ...pre, ...field }
    })
  }

  function updateFields(fields: Partial<FormData>) {
    setdata(prev => {
      return { ...prev, ...fields }
    })
  }

  function setVal11(fields: Partial<Array1>) {
    setValid1(pr => {
      return { ...pr, ...fields }
    })
  }

  function setPageFromPreview(value) {

    if (value === '1') {
      setpage(1);
    }
    if (value === '2') {
      setpage(2);
    }
    if (value === '3') {
      setpage(3);
    }

  }

  function resetAddData() {
    setArray({
      //a:'',
      Goverment: '',
      Register: '',
      FromDate: '',
      ToDate: '',
      DateInterval: '',
      Gender: '',
      AgeFrom: '',
      AgeTo: '',
      AgeInterval: '',
      Additional: '',
      DescriptionOfVariables: '',
      V: {},
      FileFormat: '',
      DataDelivered: '',
      Name: '',
      Organization: '',
      Mail: '',
      Phone: '',
      SyncRegistersWithFile: '',
      SyncRegisterFromOtherSources: '',
      NameDatasources: '',
      ProcessOfSync: '',
      WhichVariables: '',
    });
  }

  const { steps, currentStepIndex, step, isFirststep, back, next, page, backpage, setpage } = useMultistepForms([
    <Roll />,
    <AboutByer {...data} updateFields={updateFields} i={isValid1} setVa={setVal11} />,
    <AboutScience {...data} updateFields={updateFields} i={isValid1} setVa={setVal11} />,
    <AddData {...data} updateFields={updateFields} {...array} updateArray={updateArray} reset={resetAddData} />,
    <Preview {...data} {...rowLakemedelsindustri} {...isValid1} Qupdate={setPageFromPreview} />,
    <End />
  ])



  function onSubmit1(e) {
    e.preventDefault();
    if (currentStepIndex === 0) {
      next();
    }

    if (currentStepIndex === 1) {
      if (data.Forskningshuvudman === "") {
        isValid1.ForskningshuvudmanControl = false;
      }
      else {
        isValid1.ForskningshuvudmanControl = true;
      }

      if (data.Bestallare_Namn === "") {
        isValid1.Bestallare_NamnControl = false;
      }
      else {
        isValid1.Bestallare_NamnControl = true;
      }

      if (data.Bestallare_Titel_och_Roll === "") {
        isValid1.Bestallare_Titel_och_RollControl = false;
      }
      else {
        isValid1.Bestallare_Titel_och_RollControl = true;
      }
      if (data.Bestallare_Epostadress === "") {
        isValid1.Bestallare_EpostadressControl = false;
      }
      else {
        isValid1.Bestallare_EpostadressControl = true;
      }

      if (data.Bestallare_Mobiltelefon === "") {
        isValid1.Bestallare_MobiltelefonControl = false;
      }


      if (data.Bestallare_Organisation === "") {
        isValid1.Bestallare_OrganisationControl = false;
      }
      else {
        isValid1.Bestallare_OrganisationControl = true;
      }
      if (data.Huvudans_Namn === "") {
        isValid1.Huvudans_NamnControl = false;
      }
      else {
        isValid1.Huvudans_NamnControl = true;
      }
      if (data.Huvudans_Epostadress === "") {
        isValid1.Huvudans_EpostadressControl = false;
      }
      else {
        isValid1.Huvudans_EpostadressControl = true;
      }

      if (data.Huvudans_Mobiltelefon === "") {
        isValid1.Huvudans_MobiltelefonControl = false;
      }
      else {
        isValid1.Bestallare_EpostadressControl = true;
      }

      if (data.Huvudans_Organisation === "") {
        isValid1.Huvudans_OrganisationControl = false;
      }
      else {
        isValid1.Huvudans_OrganisationControl = true;
      }
      // if(data.PUB_Avtal===null){
      //   isValid1.PUB_AvtalControl=false;
      // }
      // else{
      //   isValid1.PUB_AvtalControl=true;
      // }
      if (data.Bestallare_Fak_Org === "") {
        isValid1.Bestallare_Fak_OrgControl = false;
      }
      else {
        isValid1.Bestallare_Fak_OrgControl = true;
      }
      if (data.Bestallare_Fak_Adress === "") {
        isValid1.Bestallare_Fak_AdressControl = false;
      }
      else {
        isValid1.Bestallare_Fak_AdressControl = true;
      }
      if (data.Bestallare_Postnummer === "") {
        isValid1.Bestallare_PostnummerControl = false;
      }
      else {
        isValid1.Bestallare_PostnummerControl = true;
      }
      if (data.Bestallare_Postort === "") {
        isValid1.Bestallare_PostortControl = false;
      }
      else {
        isValid1.Bestallare_PostortControl = true;
      }
      if (data.Bestallare_Fak_Referens === "") {
        isValid1.Bestallare_Fak_ReferensControl = false;
      }
      else {
        isValid1.Bestallare_Fak_ReferensControl = true;
      }
      next();
    }

    if (currentStepIndex === 2 || currentStepIndex === 4) {
      if (data.Diarienummer === "") {
        isValid1.DiarienummerControl = false;
      }
      else {
        isValid1.DiarienummerControl = true;
      }

      if (data.Projekttitel === "") {
        isValid1.ProjekttitelControl = false;
      }
      else {
        isValid1.ProjekttitelControl = true;
      }

      if (data.Projektbeskrivning === "") {
        isValid1.ProjektbeskrivningControl = false;
      }
      else {
        isValid1.ProjektbeskrivningControl = true;
      }
      if (data.Lakemedelstudier === "") {
        isValid1.LakemedelstudierControl = false;
      }
      else {
        isValid1.LakemedelstudierControl = true;
      }

      next();
    }

    if (currentStepIndex === 3 || currentStepIndex === 4) {
      const allTrue = [isValid1.ForskningshuvudmanControl,
      isValid1.Bestallare_NamnControl,
      isValid1.Bestallare_Titel_och_RollControl,
      isValid1.Bestallare_EpostadressControl,
      //isValid1.Bestallare_MobiltelefonControl,
      isValid1.Bestallare_OrganisationControl,
      isValid1.Huvudans_NamnControl,
      isValid1.Huvudans_EpostadressControl,
      //isValid1.Huvudans_MobiltelefonControl,
      isValid1.Huvudans_OrganisationControl,
      isValid1.PUB_AvtalControl,
      isValid1.Bestallare_Fak_OrgControl,
      isValid1.Bestallare_Fak_AdressControl,
      isValid1.Bestallare_PostnummerControl,
      isValid1.Bestallare_PostortControl,
      isValid1.Bestallare_Fak_ReferensControl,

      ].every((value) => value === true);
      console.log(allTrue);
      if (!allTrue) {
        setEnableButton(false);
      }
      else {
        setEnableButton(true);
      }
      next();
    }

    if (currentStepIndex === 4) {

      if (!enableButton) {
        alert("Saknas uppgifter som måste vara ifyllda. Gå tillbaka och lägg till saknade uppgifter");
        return;
      }
      next();
      Post(data);
      setLast(true);
      page(currentStepIndex - 4);


    }
    if(currentStepIndex === 5){
      window.location.reload();
    }
  }
  function setPage(page:any): void {
    if(last!==true){
      setpage(page);
      a();
    }



  }
  function a() {

    if (currentStepIndex === 0) {

    }

    if (currentStepIndex === 1) {
      if (data.Forskningshuvudman === "") {
        isValid1.ForskningshuvudmanControl = false;
      }
      else {
        isValid1.ForskningshuvudmanControl = true;
      }

      if (data.Bestallare_Namn === "") {
        isValid1.Bestallare_NamnControl = false;
      }
      else {
        isValid1.Bestallare_NamnControl = true;
      }

      if (data.Bestallare_Titel_och_Roll === "") {
        isValid1.Bestallare_Titel_och_RollControl = false;
      }
      else {
        isValid1.Bestallare_Titel_och_RollControl = true;
      }
      if (data.Bestallare_Epostadress === "") {
        isValid1.Bestallare_EpostadressControl = false;
      }
      else {
        isValid1.Bestallare_EpostadressControl = true;
      }

      if (data.Bestallare_Mobiltelefon === "") {
        isValid1.Bestallare_MobiltelefonControl = false;
      }


      if (data.Bestallare_Organisation === "") {
        isValid1.Bestallare_OrganisationControl = false;
      }
      else {
        isValid1.Bestallare_OrganisationControl = true;
      }
      if (data.Huvudans_Namn === "") {
        isValid1.Huvudans_NamnControl = false;
      }
      else {
        isValid1.Huvudans_NamnControl = true;
      }
      if (data.Huvudans_Epostadress === "") {
        isValid1.Huvudans_EpostadressControl = false;
      }
      else {
        isValid1.Huvudans_EpostadressControl = true;
      }

      if (data.Huvudans_Mobiltelefon === "") {
        isValid1.Huvudans_MobiltelefonControl = false;
      }
      else {
        isValid1.Bestallare_EpostadressControl = true;
      }

      if (data.Huvudans_Organisation === "") {
        isValid1.Huvudans_OrganisationControl = false;
      }
      else {
        isValid1.Huvudans_OrganisationControl = true;
      }
      if (data.PUB_Avtal === {}) {
        isValid1.PUB_AvtalControl = false;
      }
      else {
        isValid1.PUB_AvtalControl = true;
      }
      if (data.Bestallare_Fak_Org === "") {
        isValid1.Bestallare_Fak_OrgControl = false;
      }
      else {
        isValid1.Bestallare_Fak_OrgControl = true;
      }
      if (data.Bestallare_Fak_Adress === "") {
        isValid1.Bestallare_Fak_AdressControl = false;
      }
      else {
        isValid1.Bestallare_Fak_AdressControl = true;
      }
      if (data.Bestallare_Postnummer === "") {
        isValid1.Bestallare_PostnummerControl = false;
      }
      else {
        isValid1.Bestallare_PostnummerControl = true;
      }
      if (data.Bestallare_Postort === "") {
        isValid1.Bestallare_PostortControl = false;
      }
      else {
        isValid1.Bestallare_PostortControl = true;
      }
      if (data.Bestallare_Fak_Referens === "") {
        isValid1.Bestallare_Fak_ReferensControl = false;
      }
      else {
        isValid1.Bestallare_Fak_ReferensControl = true;
      }

    }

    if (currentStepIndex >= 1) {
      if (data.Diarienummer === "") {
        isValid1.DiarienummerControl = false;
      }
      else {
        isValid1.DiarienummerControl = true;
      }

      if (data.Projekttitel === "") {
        isValid1.ProjekttitelControl = false;
      }
      else {
        isValid1.ProjekttitelControl = true;
      }

      if (data.Projektbeskrivning === "") {
        isValid1.ProjektbeskrivningControl = false;
      }
      else {
        isValid1.ProjektbeskrivningControl = true;
      }
      if (data.Lakemedelstudier === "") {
        isValid1.LakemedelstudierControl = false;
      }
      else {
        isValid1.LakemedelstudierControl = true;
      }
      if (data.Samarbete_Med_Industrin === "") {
        isValid1.Samarbete_Med_IndustrinControl = false;
      }
      else {
        isValid1.Samarbete_Med_IndustrinControl = true;
      }

    }

    if (currentStepIndex === 1 || currentStepIndex === 2 || currentStepIndex === 3 || currentStepIndex === 4) {
      const allTrue = [isValid1.ForskningshuvudmanControl,
      isValid1.Bestallare_NamnControl,
      isValid1.Bestallare_Titel_och_RollControl,
      isValid1.Bestallare_EpostadressControl,
      //isValid1.Bestallare_MobiltelefonControl,
      isValid1.Bestallare_OrganisationControl,
      isValid1.Huvudans_NamnControl,
      isValid1.Huvudans_EpostadressControl,
      //isValid1.Huvudans_MobiltelefonControl,
      isValid1.Huvudans_OrganisationControl,
      isValid1.PUB_AvtalControl,
      isValid1.Bestallare_Fak_OrgControl,
      isValid1.Bestallare_Fak_AdressControl,
      isValid1.Bestallare_PostnummerControl,
      isValid1.Bestallare_PostortControl,
      isValid1.Bestallare_Fak_ReferensControl,
      isValid1.DiarienummerControl,
      isValid1.ProjekttitelControl,
      isValid1.ProjektbeskrivningControl,
      isValid1.LakemedelstudierControl,
      isValid1.Samarbete_Med_IndustrinControl

      ].every((value) => value === true);
      console.log(allTrue);
      if (!allTrue) {
        setEnableButton(false);
      }
      else {
        setEnableButton(true);
      }

    }

    // if(currentStepIndex === 4){

    //   if(!enableButton){
    //     alert("Saknas uppgifter som måste vara ifyllda. Gå tillbaka och lägg till saknade uppgifter");
    //     return;
    //   }
    //   next();
    //   Post(data);
    //   setLast(true);
    //   page(currentStepIndex -4)

    // }
  }

  return (






    <div className="container">
       {/* <div className={currentStepIndex === 0 ? "firstpage" : ""}>
        <div style={{ display: "flex" }} >
          <div style={{ position: "relative", marginLeft: "0px", width: "138px", height: "10px", marginTop: "0px" }}>
            <label className={currentStepIndex === 1 ? "dotFull" : "dot"} style={{ marginLeft: "60px" }} onClick={e => { setpage(1); a(); }}>1</label>
            <label style={{ position: "relative", marginTop: "0px", marginLeft: "22px" }}>Om beställaren</label>
          </div>
          <div className="line1"></div>
          <div style={{ position: "relative", marginLeft: "0px", marginTop: "0px", width: "178px", height: "10px" }}>
            <label className={currentStepIndex === 2 ? "dotFull" : "dot"} style={{ position: "absolute", marginLeft: "65px" }} onClick={e => { setpage(2); a(); }}>2</label>
            <label style={{ position: "absolute", marginTop: "34px", marginLeft: "1px" }}>Om forskningsprojektet</label>
          </div>
          <div className="line2"></div>
          <div style={{ position: "relative", marginLeft: "0px", marginTop: "0px", width: "128px", height: "10px" }}>
            <label className={currentStepIndex === 3 ? "dotFull" : "dot"} style={{ position: "absolute", marginLeft: "45px" }} onClick={e => { setpage(3); a(); }}>3</label>
            <label style={{ position: "absolute", marginTop: "34px", marginLeft: "25px" }}>Datauttag</label>
          </div>
          <div className="line3"></div>
          <div style={{ position: "relative", marginLeft: "0px", marginTop: "0px", width: "150px", height: "10px" }}>
            <label className={currentStepIndex === 4 ? "dotFull" : "dot"} style={{ position: "absolute", marginLeft: "65px" }} onClick={e => { setpage(4); a(); }}>4</label>
            <label style={{ position: "absolute", marginTop: "34px", marginLeft: "45px" }}>Kontrollera</label>
          </div>
          <div className="line4"></div>
          <div style={{ position: "relative", marginLeft: "0px", marginTop: "0px", width: "178px", height: "10px" }}>
            <label className={currentStepIndex === 5 ? "dotFull" : "dotDisable"} style={{ position: "absolute", marginLeft: "65px" }}>5</label>
            <label style={{ position: "absolute", marginTop: "34px", marginLeft: "40px" }}>Bekräftelse</label>
          </div>
        </div>
      </div> 


 */}

     ///// {/* <div style={{paddingTop:"100px"}} className={currentStepIndex === 0 ? "firstpage" : ""}> 

        <div style={{ paddingLeft:"30px", display: "flex", flexWrap:"wrap" }} >
          <div style={{ marginRight:"2px", display: "flex", flexDirection:"column", alignItems:"center"  }}>
            <label className={currentStepIndex === 1 ? "dotFull" : "dot"}  onClick={e => { setPage(1); a(); }}>1</label>
            <label >Om beställaren</label>
          </div>
          <div className="line1"></div>
          <div  style={{  width:"178px", marginLeft:"2px", marginRight:"2px", display: "flex", flexDirection:"column", alignItems:"center"  }}>
            <label className={currentStepIndex === 2 ? "dotFull" : "dot"}  onClick={e => { setPage(2);  }}>2</label>
            <label >Om forskningsprojektet</label>
          </div>
          <div className="line2"></div>
          <div  style={{ width:"135px", marginLeft:"2px",marginRight:"2px", display: "flex", flexDirection:"column", alignItems:"center"  }}>
            <label className={currentStepIndex === 3 ? "dotFull" : "dot"}  onClick={e => { setPage(3);  }}>3</label>
            <label >Datauttag</label>
          </div>
          <div className="line3"></div>
          <div  style={{   width:"145px",marginLeft:"2px", marginRight:"2px", display: "flex", flexDirection:"column", alignItems:"center"  }}>
            <label className={currentStepIndex === 4 ? "dotFull" : "dot"}  onClick={e => { setPage(4);  }}>4</label>
            <label >Kontrollera</label>
          </div>
          <div className="line4"></div>
          <div  style={{  width:"145px", marginRight:"2px", display: "flex", flexDirection:"column", alignItems:"center"  }}>
            <label className={currentStepIndex === 5 ? "dotFull" : "dotDisable"} >5</label>
            <label >Bekräftelse</label>
          </div>
        </div>
      </div> */}



      <br /><br /><br />
      {/* <div className={currentStepIndex===0 ? "firstpage":""}>
        <div style={{display:"flex"}} >
          <div style={{position:"relative", marginLeft:"0px", width:"138px", height:"10px", marginTop:"0px"}}>
          <label className={currentStepIndex ===1 ? "dotFull" :"dot"} style={{marginLeft:"60px"}} onClick={e=>{setpage(1); a();}}>1</label>
        <label style={{position:"relative", marginTop:"0px", marginLeft:"22px"}}>Om beställaren</label>
        </div>
        <div className="line1"></div>
        <div style={{position:"relative", marginLeft:"0px", marginTop:"0px", width:"178px", height:"10px"}}>
          <label className={currentStepIndex ===2 ? "dotFull" :"dot"} style={{position:"absolute", marginLeft:"65px"}} onClick={e=>{setpage(2); a();}}>2</label>
        <label style={{position:"absolute", marginTop:"34px", marginLeft:"1px"}}>Om forskningsprojektet</label>
        </div>
        <div className="line2"></div>
        <div style={{position:"relative", marginLeft:"0px", marginTop:"0px", width:"128px", height:"10px"}}>
          <label className={currentStepIndex ===3 ? "dotFull" :"dot"} style={{position:"absolute", marginLeft:"45px"}} onClick={e=>{setpage(3); a();}}>3</label>
        <label style={{position:"absolute", marginTop:"34px", marginLeft:"25px"}}>Datauttag</label>
        </div>
        <div className="line3"></div>
        <div style={{position:"relative", marginLeft:"0px", marginTop:"0px", width:"150px", height:"10px"}}>
          <label className={currentStepIndex ===4 ? "dotFull" :"dot"} style={{position:"absolute", marginLeft:"65px"}} onClick={e=>{setpage(4); a();}}>4</label>
        <label style={{position:"absolute", marginTop:"34px", marginLeft:"45px"}}>Kontrollera</label>
        </div>
        <div className="line4"></div>
        <div style={{position:"relative", marginLeft:"0px", marginTop:"0px", width:"178px", height:"10px"}}>
          <label className={currentStepIndex ===5 ? "dotFull" :"dotDisable"} style={{position:"absolute", marginLeft:"65px"}}>5</label>
        <label style={{position:"absolute", marginTop:"34px", marginLeft:"40px"}}>Bekräftelse</label>
        </div>
        </div>
        </div> */}

      


      <form style={{marginTop:"5vh"}}>

        {step}
        {currentStepIndex !== 5 && !isFirststep && <button className='secondaryButton'
          type="button" onClick={back}>{backpage(currentStepIndex)}</button>}
        {/* <button type="button" onClick={next}>
         {isLaststep ? "Done": "Next"}
         </button> */}

        {currentStepIndex === 4 && enableButton === false ? <button className="primaryButton" onClick={(e) => { e.preventDefault() }}
          style={{ backgroundColor: "gray" }}  >{page(currentStepIndex)}</button> : <button className='primaryButton' onClick={onSubmit1}>

          {page(currentStepIndex)}
        </button>}

      </form>
    </div>


  )

}




