//import { File } from "buffer";
import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { ChangeEvent, isValidElement, useRef, useState, useEffect } from "react";
import { idText } from "typescript";
import { Main } from "./Main";
//import Get from "./Api.ts";


type AboutByerData = {
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
    //A:FileList
}

// type HandleException = {
//     ForskningshuvudmanCheck1: boolean;
// }


type AboutByerProps = AboutByerData & {
    updateFields: (fields: Partial<AboutByerData>) => void
    setVa: (fields: i) => void;
}






export function AboutByer({ Forskningshuvudman, Bestallare_Namn, Bestallare_Titel_och_Roll, Bestallare_Epostadress,
    Bestallare_Mobiltelefon, Bestallare_Organisation, Huvudans_Namn,
    Huvudans_Epostadress, Huvudans_Mobiltelefon, Huvudans_Organisation,
    PUB_Avtal, Bestallare_Fak_Org, Bestallare_Fak_Adress, Bestallare_Postnummer,
    Bestallare_Postort, Bestallare_Fak_Referens, updateFields, i, setVa }: AboutByerProps) {
    const [fileName, setFileName] = useState(false)
    //console.log('props', props)
    //let  formf : FormData = props.formf;
    //console.log('formd first', formf)
    //formf.value = "hej"
    //formf.append("nisse", "Pisse");
    //console.log('formd second', formf.getAll("nisse"))
    //const formb = useRef(new FormData());
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [checkValidMail, setCheckValidMail] = useState('');
    const [checkValidMail2, setCheckValidMail2] = useState('');
    const [isValid, setValid] = useState({
        Forskningshuvudman: true,
        Bestallare_Namn1: true,
        Bestallare_Titel_och_Roll: true,
        Bestallare_Epostadress: true,
        Bestallare_Mobiltelefon: true,
        Bestallare_Organisation: true,
        Huvudans_Namn: true,
        Huvudans_Epostadress: true,
        Huvudans_Mobiltelefon: true,
        Huvudans_Organisation: true,
        Bestallare_Fak_Org: true,
        Bestallare_Fak_Adress: true,
        Bestallare_Postnummer: true,
        Bestallare_Postort: true,
        Bestallare_Fak_Referens: true,
    })
    const [s, setS] = useState(false);
    const initialRender = useRef(true);
    useEffect(() => {
        if (PUB_Avtal.size > 0) {
            setFileName(!fileName);
        }

        //return () => {
        // Clean up the state when the component is unmounted

        //setValid(preValid => ({...preValid, Forskningshuvudman:false}));

        window.scrollTo(0, 0);



    }, []);

    // useEffect(()=>{
    //     console.log('s state changed:', s);
    //     if(s===false){
    //     if(Forskningshuvudman===""){


    //         setValid(preValid =>({...preValid, Forskningshuvudman:false}))


    //     }
    // }
    // })






    //};


    // window.scrollTo(0,0);

    const handleKeyDown = (e) => {
        const { name, value } = e.target;

        if (e.keyCode >= 0) {
            //e.preventDefault();
            setVa({ [name]: value !== '' });
        }

        if (e.keyCode === 13) {
            e.preventDefault();
            //if(e.target.value===""){§

            //setValid(prevValid => ({
            //...prevValid, [name]: value !== ''
            // }));
            setVa({ [name]: value !== '' });




            //  }
            //else{
            //e.target.classList.add("noerror");
            //setValid(true);
            //}
        }


        if (e.keyCode === 1) {
            setVa({ [name]: value !== '' });
        }
        if (e.keyCode === 9) {
            setVa({ [name]: value !== '' });
        }


    }

    const checkvalidmail = (mail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(mail);
    }

    const handleEmail1 = (e) => {
        const mail = e.target.value;

        updateFields({ Bestallare_Epostadress: e.target.value });
        if (mail === "") {
            setCheckValidMail("");
        } else if (!checkvalidmail(mail)) {
            setCheckValidMail("E-postadressen är inte giltig");

        }
        else {
            setCheckValidMail("");

        }


    }

    const handleEmail2 = (e) => {
        const mail = e.target.value;

        updateFields({ Huvudans_Epostadress: e.target.value });
        if (mail === "") {
            setCheckValidMail2("");
        } else if (!checkvalidmail(mail)) {
            setCheckValidMail2("E-postadressen är inte giltig");

        }
        else {
            setCheckValidMail2("");

        }


    }

    function handleRemove(e) {
        e.preventDefault();
        alert("tabort");
        setFileName(!fileName);
        //updateFields([e.target.name]: e.target.value);
    }





    return (
        <div>
            <div className='heading1' >Om beställaren</div>
            {/* <div className='Form2'> */}

                <div className='headdiv'>

                    <div className='heading2'>Forskningshuvudman</div>

                    <div className="info" >Observera att forskningshuvudman och
                        behörig företrädare ska vara den samma som på
                        etikprövningsansökan.</div>
                    <div className="headingb3">Forskningshuvudman/Organisation</div>
                    <input autoFocus id="A" onClick={handleKeyDown} onKeyDown={handleKeyDown} 
                    className={!i.ForskningshuvudmanControl ? "error" : "textBox"} name="ForskningshuvudmanControl" type="text" value={Forskningshuvudman}
                        onChange={e => updateFields({ Forskningshuvudman: e.target.value })} />
                    {!i.ForskningshuvudmanControl && <p className="paragraphRed">*Ange Forskningshuvudman</p>}
                    <div className="borderline"></div>


                    <div className="headingb2">Behörig företrädare för forskningshuvudman</div>
                    <div className="headinga16">T.ex. prefekt, verksamhetschef, klinikchef, chef eller motsvarande</div>
                    <div className="headingb3">För- och efternamn</div>
                    <input onKeyDown={handleKeyDown} className={!i.Bestallare_NamnControl ? "error" : "textBox"} 
                    name="Bestallare_NamnControl" type="text" value={Bestallare_Namn}
                        onChange={e => updateFields({ Bestallare_Namn: e.target.value })} />
                    {!i.Bestallare_NamnControl && <p className="paragraphRed">*Ange För- och efternamn</p>}

                    <div className="headingb3">Titel/Yrkesroll</div>

                    <input className={!i.Bestallare_Titel_och_RollControl ? "error" : "textBox"} onKeyDown={handleKeyDown} 
                    name="Bestallare_Titel_och_RollControl" type="text" value={Bestallare_Titel_och_Roll}
                        onChange={e => updateFields({ Bestallare_Titel_och_Roll: e.target.value })} />
                    {!i.Bestallare_Titel_och_RollControl && <p className="paragraphRed">*Ange Titel och roll</p>}

                    <div className="headingb3">E-post</div>

                    <input className={!i.Bestallare_EpostadressControl ? "error" : "textBox"} onKeyDown={handleKeyDown} 
                    name="Bestallare_EpostadressControl" type="email" value={Bestallare_Epostadress}
                        // onChange={e => updateFields({ Bestallare_Epostadress: e.target.value })} />
                        onChange={handleEmail1} />
                    {checkValidMail && <div className="paragraphRed">{checkValidMail}</div>}
                    {!i.Bestallare_EpostadressControl && <p className="paragraphRed">*Ange Epostadress</p>}

                    <div className="headingb3">Mobiltelefon (frivilligt)</div>

                    <input className="textBox" name="Bestallare_Mobiltelefon" type="tel" value={Bestallare_Mobiltelefon}
                        onChange={e => updateFields({ Bestallare_Mobiltelefon: e.target.value })} />


                    <div className="headingb3">Organisation</div>

                    <input className={!i.Bestallare_OrganisationControl ? "error" : "textBox"} onKeyDown={handleKeyDown} 
                    name="Bestallare_OrganisationControl" type="text" value={Bestallare_Organisation}
                        onChange={e => updateFields({ Bestallare_Organisation: e.target.value })} />
                    {!i.Bestallare_OrganisationControl && <p className="paragraphRed">*Ange Organisation</p>}
                    <br /><br /><br />
                    {/* <input className="headingb3" type="checkbox" checked={false} />Huvudansvarig forskare */}
                    {/* är också mottagare av data */}
                    {/* <div className="info" style={{paddingBottom:"30px"}}>Personuppgiftsbiträdesavtal (PUB-avtal) krävs
                        om huvudansvarig forskare verkar i en annan
                        organisation än forskningshuvudmannens, och
                        bifogas som bilaga till denna ansökan.</div>
                        <button className="secondaryButton">
                        <input style={{marginLeft:"16px"}} type="file" placeholder="Bifoga" /></button>
                        <br />
                        
                        <button className="secondaryButton" style={{marginLeft:"16px"}}>Rensa alla fält</button>
                        <button className="primaryButton" style={{marginRight:"600px"}}>Klar</button>
                        <br/><br/> */}
                    {/* </div> */}


                    <br />
                    <div className="borderline" style={{ marginTop: "0px" }}></div>
                    <div className='headingb2'>Huvudansvarig forskare </div>


                    <div className="info" >Observera att huvudansvarig
                        forskare ska vara den samma som på
                        etikprövningsansökan. Personuppgiftsbiträdesavtal (PUB-avtal) krävs
                        om huvudansvarig forskare verkar i en annan
                        organisation än forskningshuvudmannens, och
                        bifogas som bilaga till denna ansökan.</div>
                    <div className="headingb3">För- och efternamn</div>
                    <input className={!i.Huvudans_NamnControl ? "error" : "textBox"} onKeyDown={handleKeyDown} 
                    name="Huvudans_NamnControl" type="text" value={Huvudans_Namn}
                        onChange={e => updateFields({ Huvudans_Namn: e.target.value })} />
                    {!i.Huvudans_NamnControl && <p className="paragraphRed">*Ange Namn</p>}

                    <div className="headingb3">E-post</div>

                    {/* <input className={!i.Huvudans_EpostadressControl ? "error" : "textBox"} onKeyDown={handleKeyDown} name="Huvudans_EpostadressControl" type="email" value={Huvudans_Epostadress}
                       onChange={e => updateFields({ Huvudans_Epostadress: e.target.value })} /> */}

                    <input className={!i.Huvudans_EpostadressControl ? "error" : "textBox"} onKeyDown={handleKeyDown} 
                    name="Huvudans_EpostadressControl" type="email" value={Huvudans_Epostadress}
                        onChange={handleEmail2} />
                    {checkValidMail2 && <div className="paragraphRed">{checkValidMail2}</div>}

                    {!i.Huvudans_EpostadressControl && <p className="paragraphRed">*Ange Epostadress</p>}

                    <div className="headingb3">Mobiltelefon (frivilligt)</div>

                    <input className="textBox" name="Huvudans_Mobiltelefon" type="tel" value={Huvudans_Mobiltelefon}
                        onChange={e => updateFields({ Huvudans_Mobiltelefon: e.target.value })} />


                    <div className="headingb3">Organisation</div>

                    <input className={!i.Huvudans_OrganisationControl ? "error" : "textBox"} onKeyDown={handleKeyDown} 
                    name="Huvudans_OrganisationControl" type="text" value={Huvudans_Organisation}
                        onChange={e => updateFields({ Huvudans_Organisation: e.target.value })} />
                    {!i.Huvudans_OrganisationControl && <p className="paragraphRed">*Ange Organisation</p>}
                    <br />
                    <br />
                    <br />
                    <label className="headingb3">Bifoga personuppgiftsbiträdesavtal eller datadelningsavtal</label>
                    <div className={fileName ? "backgroundFile" : 'backgroundFileNoFile'}>
                        <label className="labelUploadFileLeft">{fileName ? PUB_Avtal.name : "Ingen fil uppladdad"}</label>
                        {!fileName && <label htmlFor={"inputTag"} className="labelUploadFileRight">Ladda upp fil</label>}
                        {!fileName && <label id={"labelTag"} htmlFor={"inputTag"}><input id="inputTag"
                            type="file" onChange={e => { updateFields({ PUB_Avtal: e.target.files[0] }); setFileName(!fileName) }}
                        />


                            {!fileName && <div className="containerUpload">
                            <div className="vector" style={{marginLeft:"460px", marginTop:"-12px"}}>
                                <div className="paperclip-1" >
                                    <div className="paperclip-2">
                                        <div className="paperclip-3" >
                                            <div className="paperclip-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>}


                        </label>}

                        {fileName && <label htmlFor="LabelTag" onClick={e => { updateFields({ PUB_Avtal: {} }); setFileName(!fileName) }}
                            className="labelUploadFileRight">Ta bort fil
                            <div className="gg-trash labelUploadFileRight" id="LabelTag" style={{ marginLeft: "-15px", marginTop: "-13px" }}></div>
                        </label>}
                    </div>
                    
                    {/* {fileName && <div className="gg-trash" onClick={(e)=>updateFields({})}style={{marginLeft:"550px", marginTop:"-25px"}}></div>} */}
                    <br />

                    <br /><br />
                    {/* </div> */}


                    <br />
                    <div className="borderline" style={{ marginTop: "0px" }}></div>
                    <div className='headingb2' >Faktureringsadress</div>
                    <br />
                    <div className="headingb3" style={{ marginTop: "0px" }}>Organisationsnummer</div>
                    <input className={!i.Bestallare_Fak_OrgControl ? "error" : "textBox"} onKeyDown={handleKeyDown} 
                    name="Bestallare_Fak_OrgControl" type="text" value={Bestallare_Fak_Org}
                        onChange={e => updateFields({ Bestallare_Fak_Org: e.target.value })} />
                    {!i.Bestallare_Fak_OrgControl && <p className="paragraphRed">*Ange Organisationsnummer</p>}

                    <div className="headingb3">Faktureringsadress</div>

                    <input className={!i.Bestallare_Fak_AdressControl ? "error" : "textBox"} onKeyDown={handleKeyDown} 
                    name="Bestallare_Fak_AdressControl" type="text" value={Bestallare_Fak_Adress}
                        onChange={e => updateFields({ Bestallare_Fak_Adress: e.target.value })} />
                    {!i.Bestallare_Fak_AdressControl && <p className="paragraphRed">*Ange Faktueringsadress</p>}


                    <div className="groupPost">
                        <div>
                            <div className="headingb3Zip">Postnummer</div>

                            <input className={!i.Bestallare_PostnummerControl ? "errorZip" : "textBoxZip"}
                                onKeyDown={handleKeyDown}
                                name="Bestallare_PostnummerControl"
                                type="text"
                                value={Bestallare_Postnummer}
                                onChange={e => updateFields({ Bestallare_Postnummer: e.target.value })}
                            />
                            <br />
                            {!i.Bestallare_PostnummerControl && <span className="paragraphRed">*Ange Postnummer</span>}
                        </div>

                        <div>
                            <div className="headingb3City">Postort</div>
                            <input className={!i.Bestallare_PostortControl ? "errorCity" : "textBoxCity"}
                                onKeyDown={handleKeyDown}
                                name="Bestallare_PostortControl"
                                type="text"
                                value={Bestallare_Postort}
                                onChange={e => updateFields({ Bestallare_Postort: e.target.value })}
                            />

                            <br />
                            {!i.Bestallare_PostortControl && <span className="paragraphRed2" >*Ange Postort</span>}

                        </div>
                    </div>
                    <br />






                    <div className="headingb3">Fakturareferens / beställar-id</div>
                    <div>
                        <input className={!i.Bestallare_Fak_ReferensControl ? "error" : "textBox"} onKeyDown={handleKeyDown} 
                        name="Bestallare_Fak_ReferensControl" type="text" value={Bestallare_Fak_Referens}
                            onChange={e => updateFields({ Bestallare_Fak_Referens: e.target.value })} />
                        {!i.Bestallare_Fak_ReferensControl && <p className="paragraphRed">*Ange Fakturareferens / beställar-id</p>}
                    </div>




                </div>
            {/* </div> */}

        </div>
    );

}
