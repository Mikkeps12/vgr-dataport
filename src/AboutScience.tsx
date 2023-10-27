import React, { useTransition } from "react";
import { useState, useEffect } from "react";


type AboutScienceData = {
    Projekttitel: string,
    Projektbeskrivning: string,
    Projektbeskrivning_Fil: File,
    Diarienummer: string,
    Ansokan_Fil: File,
    Beslut_Fil: File,
    Komplettering_Fil: File[],
    Kompletta_handlingar_Fil: File,
    Andringansokan_Diarienummer: string,
    Andringansokan_Fil: File,
    Beslut_Andringansokan: File,
    Lakemedelstudier: string,
    Samarbete_Med_Industrin: string,
    Avtal_Industri: File,

}



type AboutScienceProps = AboutScienceData & {
    updateFields: (fields: Partial<AboutScienceData>) => void
    setVa: (fields: i) => void;
}


export function AboutScience({ Projekttitel, Projektbeskrivning,
    Projektbeskrivning_Fil,
    Diarienummer,
    Ansokan_Fil,
    Beslut_Fil,
    Kompletta_handlingar_Fil,
    Komplettering_Fil,
    Andringansokan_Diarienummer,
    Andringansokan_Fil,
    Beslut_Andringansokan,
    Lakemedelstudier,
    Samarbete_Med_Industrin,
    Avtal_Industri, updateFields, setVa, i }: AboutScienceProps) {

    const [fileName, setFileName] = useState(false)
    const [fileName2, setFileName2] = useState(false)
    const [fileName3, setFileName3] = useState(false)
    const [fileName4, setFileName4] = useState(false)
    const [fileName5, setFileName5] = useState(false)
    const [fileName6, setFileName6] = useState(false)
    const [fileName7, setFileName7] = useState(false)
    const [fileName8, setFileName8] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    const [isVisible3, setIsVisible3] = useState(false)
    const [isVisible4, setIsVisible4] = useState(false)
    const [fileIndex, setFileIndex] = useState(0);
    const [visibleSections, setVisibleSections] = useState([
        {
            index: 0,
            Visible: false,
            file: false,
            name: "",
            lastModified: 0
        }
    ]);


    const [fileSelect, setFileSelect] = useState([false]);

    const addSection = () => {

        const sectionIndex = visibleSections.length;
        setVisibleSections([...visibleSections, {
            index: sectionIndex,
            Visible: true,
            file: false,
            name: "",
            lastModified: 0
        }
        ])
    };

    const UpdateSection = (index, newValue, name, lastModified) => {
        const update = [...visibleSections];
        update[index].file = newValue;
        update[index].name = name;
        update[index].lastModified = lastModified;
        setVisibleSections(update);
    }



    const removeFile = (index, lastModified) => {
        const update = [...visibleSections];
        update[index].file = false;
        setVisibleSections(update);
        const updatedFiles1 = [...Komplettering_Fil]; // Create a copy of the array
        //updatedFiles[index] = null; // Set the specific index to null
        //let updatedFiles = Komplettering_Fil.filter((i) => i !== name);
        const KIndex = Komplettering_Fil.findIndex((File) => File.lastModified === lastModified);

        //Komplettering_Fil[KIndex] = {};
        Komplettering_Fil.splice(KIndex, 1);


    }
    useEffect(() => {
        //return () => {
        // Clean up the state when the component is unmounted
        if (Kompletta_handlingar_Fil.size > 0) {
            setFileName(!fileName);
        }

        if (Ansokan_Fil.size > 0) {
            setFileName2(!fileName2);
        }
        if (Beslut_Fil.size > 0) {
            setFileName3(!fileName3);
        }
        if (Komplettering_Fil.length > 0) {
            const newSections = [];
            let sectionIndex = 0;
            for (let i = 0; i < Komplettering_Fil.length; i++) {

                newSections.push({
                    index: sectionIndex,
                    Visible: true,
                    file: true,
                    name: Komplettering_Fil[i].name,
                    lastModified: Komplettering_Fil[i].lastModified,
                });
                sectionIndex++;
            }
            // Update the state with all files at once
            setVisibleSections([...visibleSections, ...newSections]);
        }

        //setFileName4(!fileName4);

        if (Andringansokan_Fil.size > 0) {
            setFileName5(!fileName5);
        }
        if (Beslut_Andringansokan.size > 0) {
            setFileName6(!fileName6);
        }
        if (Projektbeskrivning_Fil.size > 0) {
            setFileName7(!fileName7);
        }
        if (Avtal_Industri.size > 0) {
            setFileName8(!fileName8);
        }

        window.scrollTo(0, 0);

    }, []);

    const handleKeyDown = (e) => {
        const { name, value } = e.target;

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

    //window.scrollTo(0,0);
    return (
        <div>
            <div className='heading1'>Om forskningsprojektet</div>


            <div className='Form'>
                <div className='headdiv'>

                    <div className='heading2a' /* style={{ width: "428px", height: "70px" }} */>Beslut från etikprövningsmydigheten - Grundansökan</div>
                    <div className='headinga16' >Etikprövningsmyndighetens godkännande av den tänkta
                        personuppgiftsbehandlingen är en förutsättning för att ett datauttag för
                        forskning ska kunna godkännas och lämnas ut, men det ersätter inte den
                        sekretessprövning som den utlämnade myndigheten (CPUA) måste göra.
                        Bifoga kopia av ansökan och beslut.</div>


                    <div className="headingb3">Diarienummer för etikprövningsmyndighetens beslut</div>

                    <input className={!i.DiarienummerControl ? "error" : "textBox"} onKeyDown={handleKeyDown} name="DiarienummerControl" type="text" value={Diarienummer}
                        onChange={e => updateFields({ Diarienummer: e.target.value })} />
                    {!i.DiarienummerControl && <p className="paragraphRed">*Ange Diarenummer för etikprövningsmyndighetens beslut</p>}
                    <br />
                    <label className="switch">
                        <input type={"checkbox"} onChange={e => setIsVisible4(!isVisible4)} />
                        <span className="slider round"></span>
                    </label>
                    <div className="headingb16" >Jag bifogar komplett pdf med alla handlingar som är kopplade till aktuell etikansökan</div>
                    <br />
                    {isVisible4 && <div className={fileName ? "backgroundFile" : 'backgroundFileNoFile'}>
                        <label className="labelUploadFileLeft">{fileName ? Kompletta_handlingar_Fil.name : "Ingen fil uppladdad"}</label>
                        {!fileName && <label htmlFor="inputTag" className="labelUploadFileRight">Ladda upp fil</label>}
                        {!fileName && <label id={"labelTag"} htmlFor={"inputTag"} >
                            <input id="inputTag"
                                type="file" onChange={e => {
                                    updateFields({ Kompletta_handlingar_Fil: e.target.files[0] });
                                    updateFields({ Ansokan_Fil: {} })
                                    updateFields({ Beslut_Fil: {} })
                                    updateFields({ Komplettering_Fil: {} })
                                }}
                                onChangeCapture={e => setFileName(true)} />


                            {!fileName && <div>
                                <div className="vector" >
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
                        {fileName && <label htmlFor="LabelTag" onClick={e => { updateFields({ Kompletta_handlingar_Fil: {} }); setFileName(!fileName) }}
                            className="labelUploadFileRight">Ta bort fil
                            <div className="gg-trash" id="LabelTag" ></div>
                        </label>}
                    </div>}

                    {!isVisible4 && <div>
                        <label className="headingb3">Bifoga ansökan</label>
                        <div className={fileName2 ? "backgroundFile" : 'backgroundFileNoFile'}>
                            <label className="labelUploadFileLeft">{fileName2 ? Ansokan_Fil.name : "Ingen fil uppladdad"}</label>
                            {!fileName2 && <label htmlFor="inputTag2" className="labelUploadFileRight">Ladda upp fil</label>}
                            {!fileName2 && <label id={"labelTag"} htmlFor={"inputTag2"} >
                                <input id="inputTag2"
                                    type="file" onChange={e => {
                                        updateFields({ Ansokan_Fil: e.target.files[0] })
                                        updateFields({ Kompletta_handlingar_Fil: {} })
                                    }}
                                    onChangeCapture={e => setFileName2(true)} />


                                {!fileName2 && <div>
                                    <div className="vector" >
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
                            {fileName2 && <label htmlFor="LabelTag2" onClick={e => { updateFields({ Ansokan_Fil: {} }); setFileName2(!fileName2) }}
                                className="labelUploadFileRight">Ta bort fil
                                <div className="gg-trash" id="LabelTag2" ></div>
                            </label>}
                        </div>
                        <br/><br/>
                        
                        <label className="headingb3">Bifoga beslut</label>
                        

                        <div className={fileName3 ? "backgroundFile" : 'backgroundFileNoFile'}>
                            <label className="labelUploadFileLeft">{fileName3 ? Beslut_Fil.name : "Ingen fil uppladdad"}</label>
                            {!fileName3 && <label htmlFor={"inputTag3"} className="labelUploadFileRight">Ladda upp fil</label>}
                            {!fileName3 && <label id={"labelTag"} htmlFor={"inputTag3"} >
                                <input id="inputTag3"
                                    type="file" onChange={e => updateFields({ Beslut_Fil: e.target.files[0] })}
                                    onChangeCapture={e => setFileName3(true)} />


                                {!fileName3 && <div>
                                    <div className="vector" >
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
                            {fileName3 && <label htmlFor="LabelTag3" onClick={e => { updateFields({ Beslut_Fil: {} }); setFileName3(!fileName3) }}
                                className="labelUploadFileRight">Ta bort fil
                                <div className="gg-trash" id="LabelTag3" ></div>
                            </label>}
                        </div>
                    </div>}


                    <div>

                    

                        {visibleSections.map((maps, index) => (
                            
                            <>
                                    <br/><br/>
                                    
                                    
                                {maps.Visible && <label className="headingb3">Bifoga kompletterande handling{index}</label>}

                                {maps.Visible && <div className={maps.file ? "backgroundFile" : 'backgroundFileNoFile'}>
                                    
                                    <label className="labelUploadFileLeft">{maps.file ? maps.name : "Ingen fil uppladdad"}</label>
                                    
                                    {maps.Visible && !maps.file && <label htmlFor={"inputTag4"} className="labelUploadFileRight">Ladda upp fil</label>}
                                    {maps.Visible && !maps.file && <label id={"labelTag"} htmlFor={"inputTag4"} >
                                        <input id="inputTag4"
                                            type="file" onChange={e => {
                                                updateFields({
                                                    Komplettering_Fil: [...Komplettering_Fil, e.target.files[0]]
                                                })
                                                UpdateSection(index, !maps.file, e.target.files[0].name, e.target.files[0].lastModified);

                                            }
                                            }
                                            onChangeCapture={e => setFileName4(true)} />


                                        {maps.Visible && <div>
                                            <div className="vector" >
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
                                    {maps.file && <label htmlFor="LabelTag4" onClick={e => removeFile(index, maps.lastModified)}
                                        className="labelUploadFileRight">Ta bort fil
                                        <div className="gg-trash" id="LabelTag4" ></div>

                                    </label>}
                                    
                                </div>}
                            </>
                        ))}
                    </div>
                    {/* </div>} */}
                   

                    {!isVisible4 && <button type="button" className="secondaryButton" onClick={e => { addSection(); e.preventDefault(); }}>+ Lägg till kompletterande handling</button>}


                    {/* <br /><br /><br /> */}




                    <div className="borderline" ></div>



                    <div className='heading2'>Ändringsansökan</div>

                    {!isVisible && <div className='headinga16' /* style={{ marginTop: "8px", marginLeft: "0px" }} */>
                        Om du har ändringsansökan kan du lägga till det här.</div>}
                    {!isVisible && <button className="secondaryButton" onClick={e => { setIsVisible(true); e.preventDefault() }}>+ Lägg till ändringsansökan</button>}

                    {isVisible && <div className="headingb3" /* style={{ marginTop: "47px" }} */>Diarienummer för etikprövningsmyndighetens beslut</div>}
                    {isVisible && <input className="textBox" onKeyDown={handleKeyDown} type="text" value={Andringansokan_Diarienummer}
                        onChange={e => updateFields({ Andringansokan_Diarienummer: e.target.value })} />}

                    
                    {isVisible && <div className="headingb3">Bifoga ändringsansökan</div>}


                    {isVisible && <div className={fileName5 ? "backgroundFile" : 'backgroundFileNoFile'}>
                        <label className="labelUploadFileLeft">{fileName5 ? Andringansokan_Fil.name : "Ingen fil uppladdad"}</label>
                        {!fileName5 && <label htmlFor={"inputTag5"} className="labelUploadFileRight">Ladda upp fil</label>}
                        {!fileName5 && <label id={"labelTag"} htmlFor={"inputTag5"} >
                            <input id="inputTag5"
                                type="file" onChange={e => updateFields({ Andringansokan_Fil: e.target.files[0] })}
                                onChangeCapture={e => setFileName5(true)} />


                            {!fileName5 && <div>
                                <div className="vector" >
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
                        {fileName5 && <label htmlFor="LabelTag5" onClick={e => { updateFields({ Andringansokan_Fil: {} }); setFileName5(!fileName5) }}
                            className="labelUploadFileRight">Ta bort fil
                            <div className="gg-trash" id="LabelTag5" ></div>
                        </label>}
                    </div>}
                    {/* <br /><br /> */}

                    {isVisible && <div className="headingb3">Bifoga ändringsbeslut</div>}

                    {isVisible && <div className={fileName6 ? "backgroundFile" : 'backgroundFileNoFile'}>
                        <label className="labelUploadFileLeft">{fileName6 ? Beslut_Andringansokan.name : "Ingen fil uppladdad"}</label>
                        {!fileName6 && <label htmlFor={"inputTag6"} className="labelUploadFileRight">Ladda upp fil</label>}
                        {!fileName6 && <label id={"labelTag"} htmlFor={"inputTag6"} >
                            <input id="inputTag6"
                                type="file" onChange={e => updateFields({ Beslut_Andringansokan: e.target.files[0] })}
                                onChangeCapture={e => setFileName6(true)} />


                            {!fileName6 && <div>
                                <div className="vector" >
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
                        {fileName6 && <label htmlFor="LabelTag6" onClick={e => { updateFields({ Beslut_Andringansokan: {} }); setFileName6(!fileName6) }}
                            className="labelUploadFileRight">Ta bort fil
                            <div className="gg-trash" id="LabelTag6" ></div>
                        </label>}
                    </div>}

                    {/* <br /><br /><br /> */}

                    <div>
                        <div className="borderline" ></div>

                        <div className='heading2'>Beskrivning av forskningsprojektet</div>
                        {/* <br /> */}
                        <div className='headingb3'>Projektets titel (som i etikansökan)</div>

                        <textarea className="textArea"
                            onKeyDown={handleKeyDown} name="ProjekttitelControl" value={Projekttitel}
                            onChange={e => updateFields({ Projekttitel: e.target.value })} ></textarea>
                        {!i.ProjekttitelControl && <p className="paragraphRed">*Ange Projektets titel</p>}


                        {/* <br /><br /> */}
                        <div className="headingb3">Sammanfattande projektbeskrivning</div>

                        <textarea className="textArea"
                            onKeyDown={handleKeyDown} name="ProjektbeskrivningControl" value={Projektbeskrivning}
                            onChange={e => updateFields({ Projektbeskrivning: e.target.value })}></textarea>
                        {!i.ProjektbeskrivningControl && <p className="paragraphRed">*Ange Sammanfattande projektbeskrivning</p>}

                        <div className='headinga16'>
                            Bakgrund, vetenskaplig frågeställning och målsättning och arbetsplan.
                        </div>
                        <br />
                        <label className="headingb3">Bifoga projektbeskrivning</label>
                        {/* <br /> */}
                        <div className={fileName7 ? "backgroundFile" : 'backgroundFileNoFile'}>
                            <label className="labelUploadFileLeft">{fileName7 ? Projektbeskrivning_Fil.name : "Ingen fil uppladdad"}</label>
                            {!fileName7 && <label htmlFor={"inputTag7"} className="labelUploadFileRight">Ladda upp fil</label>}
                            {!fileName7 && <label id={"labelTag"} htmlFor={"inputTag7"} ><input id="inputTag7"
                                type="file" onChange={e => updateFields({ Projektbeskrivning_Fil: e.target.files[0] })}
                                onChangeCapture={e => setFileName7(true)} />

                                {!fileName7 && <div>
                                    <div className="vector" >
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
                            {fileName7 && <label htmlFor="LabelTag7" onClick={e => { updateFields({ Projektbeskrivning_Fil: {} }); setFileName7(!fileName7) }}
                                className="labelUploadFileRight">Ta bort fil
                                <div className="gg-trash" id="LabelTag7" ></div>
                            </label>}

                        </div>
                        




                    </div>


                    <div className="borderline" ></div>

                    <div>



                        <div className='heading2'>Gäller projektet läkemedelsstudier?</div>
                        <br /><br />
                        {!i.LakemedelstudierControl && <><div className="errorBackground"><p className="paragraphRed"
                            style={{ marginTop: "15px", marginLeft: "15px", position: "relative" }}>Välj någon av alternativen</p></div><br /></>}
                        <input type={"radio"} style={{ marginLeft: "0px" }} name="lakemedelstudier" value={"Nej"}
                            checked={Lakemedelstudier === "Nej"} onChange={(e) => updateFields({ Lakemedelstudier: e.target.value })} />
                        <div className="r1">Nej, projektet gäller inte
                            läkemedelsstudier.</div>



                        <input type={"radio"} style={{ marginTop: "34px", marginLeft: "0px" }} name="lakemedelstudier" value={"Ja"}
                            checked={Lakemedelstudier === "Ja"} onChange={(e) => updateFields({ Lakemedelstudier: e.target.value })} />
                        <div className="r2">Ja, projektet gäller läkemedelsstudier.
                            Jag bekräftar med min ansökan om datauttag att det finns ett godkännandefrån Läkemedelsverket</div>
                        



                    </div>
                    <div className="borderline" ></div>
                    <div>



                        <div className='heading2' >Genomförs projektet i samarbete med industrin?</div>
                        <div className="eadinga3" style={{ maxWidth: "591px", width: "100%", height: "auto", marginLeft: "0px" }}>Om forskningsprojektet genomförs i
                            samarbete med industrin behöver avtal mellan företaget och berörd huvudman bifogas
                            <br /><br />
                            <u>

                                Överenskommelse om samverkan mellan SKR och industrin om kvalitetsregister</u>
                        </div>
                        <br />






                        {!i.Samarbete_Med_IndustrinControl && <><br /><br /><div className="errorBackground"><p className="paragraphRed"
                            style={{ marginTop: "15px", marginLeft: "15px", position: "relative" }}>Välj någon av alternativen</p></div><br /></>}

                        <input type={"radio"} className="r3"/* style={{ marginLeft: "0px", marginTop: "42px" }} */ name="Samarbete_Med_Industrin" value={"Ja"}
                            checked={Samarbete_Med_Industrin === "Ja"} onChange={(e) => { updateFields({ Samarbete_Med_Industrin: e.target.value }); setIsVisible3(false) }} />Nej, projektet genomförs inte i
                        samarbete med industrin

                        <br /><br /><br />
                        <input type={"radio"} className="r4"/* style={{ marginLeft: "0px" }} */ name="Samarbete_Med_Industrin" value={"Nej"}
                            checked={Samarbete_Med_Industrin === "Nej"} onChange={(e) => { updateFields({ Samarbete_Med_Industrin: e.target.value }); setIsVisible3(true) }} />Ja, projektet genomförs i samarbete
                        med industrin. Avtal bifogas.
                        <br /><br />

                        {isVisible3 && <div>
                            <label className="headingb3">Bifoga avtal</label>
                            <div className={fileName8 ? "backgroundFile" : 'backgroundFileNoFile'}>
                                <label className="labelUploadFileLeft">{fileName8 ? Avtal_Industri.name : "Ingen fil uppladdad"}</label>
                                {!fileName8 && <label htmlFor={"inputTag8"} className="labelUploadFileRight">Ladda upp fil</label>}
                                {!fileName8 && <label id={"labelTag"} htmlFor={"inputTag8"} >
                                    <input id="inputTag8" type="file" onChange={e => updateFields({ Avtal_Industri: e.target.files[0] })}
                                        onChangeCapture={e => setFileName8(true)} />

                                    {!fileName8 && <div>
                                        <div className="vector" >
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
                                {fileName8 && <label htmlFor="LabelTag8" onClick={e => { updateFields({ Avtal_Industri: {} }); setFileName8(!fileName8) }}
                                    className="labelUploadFileRight">Ta bort fil
                                    <div className="gg-trash" id="LabelTag8" ></div>
                                </label>}


                            </div>
                        </div>}



                    </div>
                </div>
            </div>

        </div>

    );


    function AddKompletterandeHandling() {

        setIsVisible2(true);
        return (
            <button>Test</button>
        )



    }





}