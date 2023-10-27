import React from "react";
//import { useMultistepForms } from "./useMultistepForms.ts";
//import { Main } from "./Main.tsx";
//import { Roll } from "./Roll.tsx";
//import { AboutByer } from "./AboutByer.tsx";
import { AddData1 } from "./AddData.tsx";

export function Preview(data, isValid1, Qupdate) {

    let date = new Date();
    window.scrollTo(0, 0);
    return (
        <>
            <div className='heading1' >Granska och skicka in</div>
            
                <div className='headdiv'>

                    
                    <div className="headingb2" >Om beställaren

                    <button className='secondaryButton' onClick={f} value={2} style={{ float: "right", marginTop: "0px" }}>Gå till steg 1</button>
                        
                    </div>
                    <br/>
                    {!data.ForskningshuvudmanControl && <><div className="errorBackground"><p className="paragraphRed"
                        style={{ marginTop: "15px", marginLeft: "15px", position: "relative" }}>Obligatoriska uppgifter saknas i steg 1</p></div><br /></>}
                    <div className="headingb3">Forskningshuvudman</div>

                    {data.ForskningshuvudmanControl ? <div className="text_buyer">{data.Forskningshuvudman}</div> : <div className="paragraphRed">(!) Forskningshuvudman saknas</div>}


                    <div className="headingb3">Behörig företrädare för forskningshuvudman</div>

                    {data.Bestallare_NamnControl ? <div className="text_buyer">{data.Bestallare_Namn}</div> : <div className="paragraphRed">(!) Bestallares namn saknas</div>}

                    {data.Bestallare_Titel_och_RollControl ? <div className="text_buyer">{data.Bestallare_Titel_och_Roll}</div> : <div className="paragraphRed">(!) Titel saknas</div>}

                    {data.ForskningshuvudmanControl ? <div className="text_buyer">{data.Forskningshuvudman}</div> : <div className="paragraphRed">(!) Forskningshuvudman saknas</div>}

                    {data.Bestallare_EpostadressControl ? <div className="text_buyer">{data.Bestallare_Epostadress}</div> : <div className="paragraphRed">(!) E-post saknas</div>}
                    <div className="text_buyer">{data.Bestallare_Mobiltelefon}</div>


                    <div className="headingb3">Huvudansvarig forskare</div>


                    {data.Huvudans_NamnControl ? <div className="text_buyer">{data.Huvudans_Namn}</div> : <div className="paragraphRed">(!) Namn saknas</div>}

                    {data.Huvudans_OrganisationControl ? <div className="text_buyer">{data.Huvudans_Organisation}</div> : <div className="paragraphRed">(!) Organisation saknas</div>}

                    {data.Huvudans_EpostadressControl ? <div className="text_buyer">{data.Huvudans_Epostadress}</div> : <div className="paragraphRed">(!) E-post saknas</div>}
                    <div className="text_buyer">{data.Huvudans_Mobiltelefon}</div>

                    <div className="headingb3">Faktureringsadress</div>


                    {data.Bestallare_Fak_OrgControl ? <div className="text_buyer">{data.Bestallare_Fak_Org}</div> : <div className="paragraphRed">(!) Organisationnummer saknas</div>}

                    {data.Bestallare_Fak_AdressControl ? <div className="text_buyer">{data.Bestallare_Fak_Adress}</div> : <div className="paragraphRed">(!) Faktureringsadress saknas</div>}
                    {/* {data.Bestallare_NamnControl ? <div className="text_buyer">{data.Bestallare_Namn}</div>: <div className="paragraphRed">(!) Namn saknas</div>} */}

                    {data.Bestallare_PostnummerControl ? <div className="text_buyer">{data.Bestallare_Postnummer}</div> : <div className="paragraphRed">(!) Postnummer saknas</div>}

                    {data.Bestallare_PostortControl ? <div className="text_buyer">{data.Bestallare_Postort}</div> : <div className="paragraphRed">(!) Postort saknas</div>}

                    {data.Bestallare_Fak_ReferensControl ? <div className="text_buyer">{data.Bestallare_Fak_Referens}</div> : <div className="paragraphRed">(!) Fakturareferens saknas</div>}

                    <div className="borderline" ></div>




                    <div className="headingb2" >Om forskningsprojektet
                        <button className='secondaryButton' onClick={f} value={2} style={{ float: "right", marginTop: "0px" }}>Gå till steg 2</button>
                    </div>

                    <br />
                    {!data.ProjekttitelControl && <><div className="errorBackground"><p className="paragraphRed"
                        style={{ marginTop: "15px", marginLeft: "15px", position: "relative" }}>Obligatoriska uppgifter saknas i steg 2</p></div><br /></>}
                    <div className="headingb3">Projektets titel</div>
                    {data.ProjekttitelControl ? <div className="text_buyer">{data.Projekttitel}</div> : <div className="paragraphRed">(!) Projektets titel saknas</div>}
                    <div className="headingb3">Beskrivning av forskningprojektet</div>



                    {data.ProjektbeskrivningControl ? <div className="text_buyer">{data.Projektbeskrivning}</div> : <div className="paragraphRed">(!) Projektbeskrivning saknas</div>}


                    <div className="headingb3">Beslut från etikprövningsmydigheten - Grundansökan</div>
                    {data.DiarienummerControl ? <div className="text_buyer">{data.Diarienummer}</div> : <div className="paragraphRed">(!) Diarienummer saknas</div>}


                    <div className="headingb3">Ändringsansökan</div>



                    <div className="headingb3">Gäller projektet läkemedelsstudier?</div>

                    {data.LakemedelstudierControl ? <div className="text_buyer">{data.Lakemedelstudier === "Nej" ? data[0] : data[1]}</div> : <div className="paragraphRed">(!) Inget val har gjorts</div>}



                    <div className="headingb3">Genomförs projektet i samarbete med industrin?</div>

                    {data.Samarbete_Med_IndustrinControl ? <div className="text_buyer">{data.Samarbete_Med_Industrin === "Nej" ? data[3] : data[2]}</div> : <div className="paragraphRed">(!) Inget val har gjorts</div>}



                    <div className="borderline" ></div>



                    <div className="headingb2" >Tillagda datauttag
                        <button className='secondaryButton' onClick={f} value={3} style={{ marginTop: "0px", float: "right" }}>Gå till steg 3</button>
                    </div>
                    <br/>
                    {!data.DataCollectArrayControl && <><div className="errorBackground"><p className="paragraphRed"
                        style={{ marginTop: "15px", marginLeft: "15px", position: "relative" }}>Obligatoriska uppgifter saknas i steg 3</p></div><br /></>}
                    {data.Arra.map((maps, index) =>
                    <>
                    <AddData1 key={index} maps={maps} i={index} visible={false}/>
                    </>
                        
                    )}


                    <div className="borderline" ></div>



                    <div className="flex_div">
                        <div className="headingb2" >Samtliga bifogade filer</div>
                        {data.PUB_Avtal.size >0 && <div className="backgroundFileNoFilePreview" >{data.PUB_Avtal.name} </div>}
                        
                        {data.Kompletta_handlingar_Fil.size >0  && <div className="backgroundFileNoFilePreview" >
                            {data.Kompletta_handlingar_Fil.name}</div>}
                        
                        {data.Ansokan_Fil.size >0 && <div className="backgroundFileNoFilePreview">{data.Ansokan_Fil.name}</div>}
                        
                        {data.Beslut_Fil.size >0 && <div className="backgroundFileNoFilePreview">{data.Beslut_Fil.name}</div>}
                        
                        {data.Andringansokan_Fil.size >0  && <div className="backgroundFileNoFilePreview">{data.Andringansokan_Fil.name}</div>}
                        
                        {data.Beslut_Andringansokan.size >0  && <div className="backgroundFileNoFilePreview">{data.Beslut_Andringansokan.name}</div>}
                        {data.Komplettering_Fil.map((file) => {
                            return (
                                <div className="backgroundFileNoFilePreview">{file.name}</div>
                            )
                        })}
                        {data.Avtal_Industri.size >0  && <div className="backgroundFileNoFilePreview">{data.Avtal_Industri.name}</div>}
                        
                        {data.Projektbeskrivning_Fil.size >0  && <div className="backgroundFileNoFilePreview">{data.Projektbeskrivning_Fil.name}</div>}
                        

                        {data.Variabellista.map((list) => {
                            return (

                                <div className="backgroundFileNoFilePreview">{list.name}</div>

                            )
                        })}

                        

                    </div>
                    <br />


                </div>
            
        </>
    )

    function f(e) {
        e.preventDefault();
        data.Qupdate(e.target.value);

    }

}