import React from "react";
//import { useMultistepForms } from "./useMultistepForms.ts";
//import { Main } from "./Main.tsx";
//import { Roll } from "./Roll.tsx";
//import { AboutByer } from "./AboutByer.tsx";

export function Preview(data, isValid1, Qupdate) {

    let date = new Date();
    window.scrollTo(0, 0);
    return (
        <>
            <div className='heading1' >Granska och skicka in</div>
            <div className="Form2">
                <div className='headdiv'>

                    <br /><br /><br />
                    <div className="headingb2" style={{ width: "592px", height: "44px", marginBottom: "10px" }}>Om beställaren


                        <button onClick={f} className='secondaryButton' value={1} style={{ float: "right", marginTop: "0px" }}>Gå till steg 1</button>
                    </div>
                    {!data.ForskningshuvudmanControl && <><div className="errorBackground"><p className="paragraphRed"
                        style={{ marginTop: "10px", marginLeft: "15px", position: "absolute" }}>Obligatoriska uppgifter saknas i steg 1</p></div><br /></>}
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









                    <div className="headingb2" style={{ marginTop: "0px", marginLeft: "0px" }}>Om forskningsprojektet
                        <button className='secondaryButton' onClick={f} value={2} style={{ float: "right", marginTop: "0px" }}>Gå till steg 2</button>
                    </div>

                    <br />
                    {!data.ProjekttitelControl && <><div className="errorBackground"><p className="paragraphRed"
                        style={{ marginTop: "10px", marginLeft: "15px", position: "absolute" }}>Obligatoriska uppgifter saknas i steg 2</p></div><br /></>}
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







                    <div className="headingb2" style={{ marginTop: "0px", marginLeft: "0px" }}>Tillagda datauttag
                        <button className='secondaryButton' onClick={f} value={3} style={{ marginTop: "0px", float: "right" }}>Gå till steg 3</button>
                    </div>
                    {data.Arra.map((maps, index) =>
                        <><div>
                            <div className="datacollection">
                                <div className="datacollectionheading3">{index + 1}. Datauttag: {maps.Goverment}</div>
                                <div className="datacollectionheading4">Skapat {date.toDateString()}</div>
                                <div className="datacollectionheading5" onClick={e => setIsShowing(!isShowing)} typeof="button">Visa mer innehåll</div>

                                <div>Datakälla:{maps.Register}</div>
                                <div>Från datum: {maps.FromDate}</div>
                                <div>Till datum: {maps.ToDate}</div>
                                <div>Datumintervallet avser: {maps.DateInterval}</div>
                                <div>Kön: {maps.Gender}</div>
                                <div>Ålder från: {maps.AgeFrom}</div>
                                <div>Ålder till: {maps.AgeTo}</div>
                                <div>Åldersintervallet avser: {maps.AgeInterval}</div>
                                <div>Kompletterande beskrivning av urval: {maps.Additional}</div>
                                <div>Beskrivning av variabler: {maps.DescriptionOfVariables}</div>
                                <div>Variabellista filformat{maps.V.name}</div>
                                <div>Filformat som önskas vid leverans: {maps.FileFormat}</div>
                                <div>Vem ska aktuell data levereras till: {maps.DataDelivered}</div>
                                <div>Namn: {maps.Name}</div>
                                <div>Organisation: {maps.Organization}</div>
                                <div>Epost: {maps.Mail}</div>
                                <div>Telefon: {maps.Phone}</div>
                                <div>Ska data från aktuellt register samköras med inkommande fil från beställaren? {maps.SyncRegistersWithFile}</div>
                                <div>Ska data från aktuellt register samköras med andra datakällor? {maps.SyncRegisterFromOtherSources}</div>
                                <div>Angivna datakälla: {maps.NameDatasources}</div>
                                <div>Beskrivning av den tänkta processen kring samkörning: {maps.ProcessOfSync}</div>
                                <div>Vilka variabler ska samkörningen göras på? {maps.WhichVariables}</div>
                            </div>


                        </div></>
                    )}


                    <div className="borderline" ></div>







                    <div className="flex_div">
                        <div className="headingb2" style={{ marginTop: "0px", marginLeft: "0px" }}>Samtliga bifogade filer</div>
                        {data.PUB_Avtal != null ? <div className="backgroundFileNoFile">{data.PUB_Avtal.name}</div> : ""}
                        <br />
                        {data.Kompletta_handlingar_Fil != null ? <div className="backgroundFileNoFile">
                            {data.Kompletta_handlingar_Fil.name}</div> : ""}
                        <br />
                        {data.Ansokan_Fil != null ? <div className="backgroundFileNoFile">{data.Ansokan_Fil.name}</div> : ""}
                        <br />
                        {data.Beslut_Fil != null ? <div className="backgroundFileNoFile">{data.Beslut_Fil.name}</div> : ""}
                        <br />
                        {data.Komplettering_Fil.map((file) => {
                            return (
                                <div className="backgroundFileNoFile">{file.name}</div>
                            )
                        })}
                        {data.Avtal_Industri != null ? <div className="backgroundFileNoFile">{data.Avtal_Industri.name}</div> : ""}
                        <br />
                        {data.Andringansokan_Fil != null ? <div className="backgroundFileNoFile">{data.Andringansokan_Fil.name}</div> : ""}
                        <br />
                        {data.Projektbeskrivning_Fil != null ? <div className="backgroundFileNoFile">{data.Projektbeskrivning_Fil.name}</div> : ""}
                        <br />

                        {data.Variabellista.map((list) => {
                            return (

                                <div className="backgroundFileNoFile">{list.name}</div>

                            )
                        })}

                        {/* {data.Arra[0].V !=null ? data.Arra[0].V.name: ""} */}

                    </div>
                    <br />


                </div>
            </div>
        </>
    )

    function f(e) {
        e.preventDefault();
        data.Qupdate(e.target.value);

    }

}