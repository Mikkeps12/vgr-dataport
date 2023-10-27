import React, { useState } from "react";
import axios from "axios";
import { Console } from "console";

export const Api = function () {
}


export function Post(fd: any) {


    const data = new FormData();


    for (let i = 0; i < fd.Variabellista.length; i++) {
        data.append('Variabellista', fd.Variabellista[i]);
    }

    for (let i = 0; i < fd.Komplettering_Fil.length; i++) {
        data.append('Komplettering_Fil', fd.Komplettering_Fil[i]);
    }

    
    data.append('Forskningshuvudman', fd.Forskningshuvudman);
    data.append('Bestallare_Namn', fd.Bestallare_Namn);
    data.append('Bestallare_Titel_och_Roll', fd.Bestallare_Titel_och_Roll);
    data.append('Bestallare_Epostadress', fd.Bestallare_Epostadress);
    data.append('Bestallare_Mobiltelefon', fd.Bestallare_Mobiltelefon);
    data.append('Bestallare_Organisation', fd.Bestallare_Organisation);
    data.append('Huvudans_Namn', fd.Huvudans_Namn);
    data.append('Huvudans_Epostadress', fd.Huvudans_Epostadress);
    data.append('Huvudans_Mobiltelefon', fd.Huvudans_Mobiltelefon);
    data.append('Huvudans_Organisation', fd.Huvudans_Organisation);
    data.append('PUB_Avtal', fd.PUB_Avtal);
    data.append('Bestallare_Fak_Org', fd.Bestallare_Fak_Org);
    data.append('Bestallare_Fak_Adress', fd.Bestallare_Fak_Adress);
    data.append('Bestallare_Postnummer', fd.Bestallare_Postnummer);
    data.append('Bestallare_Postort', fd.Bestallare_Postort);
    data.append('Bestallare_Fak_Referens', fd.Bestallare_Fak_Referens);
    data.append('Ansokan_Fil', fd.Ansokan_Fil);
    data.append('Beslut_Fil', fd.Beslut_Fil);
    data.append('Kompletta_handlingar_Fil', fd.Kompletta_handlingar_Fil);
    
    data.append('Projekttitel', fd.Projekttitel);
    data.append('Projektbeskrivning', fd.Projektbeskrivning);
    data.append('Projektbeskrivning_Fil', fd.Projektbeskrivning_Fil);
    data.append('Diarienummer', fd.Diarienummer);
    data.append('Andringansokan_Diarienummer', fd.Andringansokan_Diarienummer);
    data.append('Andringansokan_Fil', fd.Andringansokan_Fil);
    data.append('Beslut_Andringansokan', fd.Beslut_Andringansokan);
    data.append('Lakemedelstudier', fd.Lakemedelstudier);
    data.append('Samarbete_Med_Industrin', fd.Samarbete_Med_Industrin);
    data.append('Avtal_Industri', fd.Avtal_Industri);
    data.append('Sokanden', 'Forskare');
    let json = JSON.stringify(fd.Arra);
    console.log("JSON", json);
    for (let i = 0; i < fd.Arra.length; i++) {
        data.append('Array', JSON.stringify(fd.Arra[i]));
    }


    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }


    const url = "http://vgdb1572.vgregion.se:820/backend/VGR/PostRequest";
    const url2 = "http://localhost:5196/vgr/PostRequest";
    axios.post(url2, data, config).then((res) => {
        if (res.status === 200)
            alert("Ansökan är skickad");
    })
}




export async function GetRegister(id: number) {
    const url = "http://vgdb1572.vgregion.se:820/backend/VGR/GetRegister/" + id;
    const response = await axios.get(url);

    return response.data;
};

export async function GetGoverment() {
    const url = "http://vgdb1572.vgregion.se:820/backend/VGR/GetGoverment";
    const response = await axios.get(url);

    return response.data;

};

