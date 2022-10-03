import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineBgColors } from "react-icons/ai"
const Tables = () => {
    const [cols, setCols] = useState(5);
    const [colsList, setColList] = useState([])
    const [header, setHeader] = useState(null)
    const [hColor, setColor] = useState(null)
    const [tColor, setTColor] = useState(null)
    const [border, setBorder] = useState(null)
    const [rows, setRows] = useState(5);
    const [react, setReact] = useState(false)
    const [rowList, setRowList] = useState([])
    useEffect(() => {
        let data = [];
        for (let i = 1; i <= cols; i++) {
            data.push(i)
            setColList(data)

        }

    }, [cols])

    useEffect(() => {
        let data = [];
        for (let i = 1; i <= rows; i++) {
            data.push(i)
            setRowList(data)

        }

    }, [rows])


    return <div>
        <a id="tables"></a>
        <div className="  w-scrren bg-[rgba(255,255,255,.8)] rounded-md p-4 m-4  ">
            <div className="flex flex-wrap gap-4">
                <div className="flex gap-4">
                    <label htmlFor="" className="shadow-lg p-4">Enter Rows</label>
                    <input type="number" className="p-4 bg-transparent outline-none shadow-md" onChange={(e) => setRows(e.target.value)} />
                </div>
                <div className="flex gap-4">
                    <label htmlFor="" className="shadow-lg p-4">Enter Cols</label>
                    <input type="number" className="p-4 bg-transparent outline-none shadow-md" min={0} onChange={(e) => setCols(e.target.value)} />
                </div>
                <div className="flex gap-4 h-[fit-content] items-center">
                    <label htmlFor="" className="shadow-lg p-4">Header Background Color</label>
                    <input type="color" className="hidden" id="color1" min={0} onChange={(e) => setHeader(e.target.value)} />

                    <label htmlFor="color1">
                        <AiOutlineBgColors className="text-3xl" />
                    </label>
                </div>
                <div className="flex gap-4 h-[fit-content] items-center">
                    <label htmlFor="" className="shadow-lg p-4">Header Text Color</label>
                    <input type="color" className="hidden" id="color2" min={0} onChange={(e) => setColor(e.target.value)} />

                    <label htmlFor="color2">
                        <AiOutlineBgColors className="text-3xl" />
                    </label>
                </div>
                <div className="flex gap-4 h-[fit-content] items-center">
                    <label htmlFor="" className="shadow-lg p-4">Table Border Color</label>
                    <input type="color" className="hidden" id="color4" min={0} onChange={(e) => setBorder(e.target.value)} />

                    <label htmlFor="color4">
                        <AiOutlineBgColors className="text-3xl" />
                    </label>
                </div>
                <div className="flex gap-4 h-[fit-content] items-center">
                    <label htmlFor="" className="shadow-lg p-4">Table Body Text Color</label>
                    <input type="color" className="hidden" id="color5" min={0} onChange={(e) => setTColor(e.target.value)} />

                    <label htmlFor="color5">
                        <AiOutlineBgColors className="text-3xl" />
                    </label>
                </div>
            </div>
            <div className="my-8 justify-center w-full overflow-scroll max-h-[300px] pb-8">
                <table>
                    <thead style={{ background: header }}>
                        {colsList.map((col, index) => {
                            return <th key={index} className="border border-black px-4" style={{ color: hColor, borderColor: border }}>{`Heading ${index + 1}`}</th>
                        })}

                    </thead>
                    <tbody>
                        {rowList.map((col, i) => {
                            return <tr key={i} >

                                {colsList.map((col, index) => {
                                    return <td key={index} className="border border-black px-4" style={{ color: tColor, borderColor: border }}>{`Cell ${i}, ${index + 1}`}</td>
                                })}

                            </tr>
                        })}

                    </tbody>
                </table>
            </div>


        </div>
        <div className="">
            <div className="h-screen overflow-scroll  bg-[rgba(255,255,255,.8)] rounded-md p-4 m-4  ">
                <div className="flex w-full justify-center gap-8 cursor-pointer"><h1 className="text-center font-semibold border-b" onClick={() => setReact(false)}
                    style={{
                        color: !react ? 'blue' : 'black',
                        borderBottom: !react ? '2px solid blue' : 'none',
                    }}>HTML CODE</h1> <h1 className="text-center font-semibold border-b"
                        style={{
                            color: react ? 'blue' : 'black',
                            borderBottom: react ? '2px solid blue' : 'none',
                        }}
                        onClick={() => setReact(true)}
                    >REACT CODE</h1></div>
                {
                    !react ? <div className="flex flex-wrap gap-4">
                        <pre>
                            &lt;table&gt;
                            <div className="pl-4">

                                &lt;thead&gt;
                                {colsList.map((col, index) => {
                                    return <ul className="pl-4">
                                        <li key={index} >
                                            &lt;th&gt;
                                            {`Heading ${index + 1}`}
                                            &lt;/th&gt;
                                        </li>
                                        <button></button>
                                    </ul>
                                })}
                                &lt;/thead&gt;
                            </div>

                            <div className="pl-4">

                                &lt;tbody&gt;
                                {rowList.map((col, i) => {
                                    return <div key={i} className="pl-4">

                                        &lt;tr&gt;
                                        {colsList.map((col, index) => {

                                            return <ul className="pl-4">
                                                <li key={index} >
                                                    &lt;td&gt;
                                                    {`Cell ${i}, ${index + 1}`}
                                                    &lt;/td&gt;
                                                </li>
                                                <button></button>
                                            </ul>
                                        })}
                                        &lt;/tr&gt;


                                    </div>
                                })}
                                &lt;/tbody;&gt;
                            </div>
                            <br />

                            &lt;/table&gt;
                        </pre>
                    </div>
                        : <div className="flex flex-wrap gap-4">
                            <pre>
                                import React from "react"
                                <br />
                                <code ng-non-bindable>
                                    const Table =()={`>`}{`{`}
                                    <br />
                                    return
                                    &lt;table&gt;
                                    <div className="pl-4">

                                        &lt;thead&gt;
                                        {colsList.map((col, index) => {
                                            return <ul className="pl-4">
                                                <li key={index} >
                                                    &lt;th&gt;
                                                    {`Heading ${index + 1}`}
                                                    &lt;/th&gt;
                                                </li>
                                                <button></button>
                                            </ul>
                                        })}
                                        &lt;/thead&gt;
                                    </div>

                                    <div className="pl-4">

                                        &lt;tbody&gt;
                                        {rowList.map((col, i) => {
                                            return <div key={i} className="pl-4">

                                                &lt;tr&gt;
                                                {colsList.map((col, index) => {

                                                    return <ul className="pl-4">
                                                        <li key={index} >
                                                            &lt;td&gt;
                                                            {`Cell ${i}, ${index + 1}`}
                                                            &lt;/td&gt;
                                                        </li>
                                                        <button></button>
                                                    </ul>
                                                })}
                                                &lt;/tr&gt;


                                            </div>
                                        })}
                                        &lt;/tbody;&gt;
                                    </div>
                                    <br />

                                    &lt;/table&gt;


                                    <br />

                                    {`}`}
                                    <br />
                                    export default Table
                                </code>

                            </pre>
                        </div>
                }


            </div>

        </div>



        <div className="  w-scrren bg-[rgba(255,255,255,.8)] rounded-md p-4 m-4  ">
            <h1 className="text-center text-2xl font-semibold">CSS</h1>
            table,th,td {`{`}
            <br />
            border:{border ? `1px solid ${border}` : '1px solid black'};
            <br />

            <br />

            {`}`}
            <br />
            thead {`{`}
            <br />
            background-color:{header ? header : 'transparent'};
            <br />
            color:{hColor ? hColor : 'black'}
            <br />

            {`}`}
            <br />
            tbody {`{`}
            <br />

            color:{tColor ? tColor : 'black'}
            <br />

            {`}`}

        </div>
    </div>
};

export default Tables;
