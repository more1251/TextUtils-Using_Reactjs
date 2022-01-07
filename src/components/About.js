import React  from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
   
    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#5a5757':'white',
        // border: '2px solid',
        // borderColor: props.mode ==='dark'?'white':'#5a5757'
    }
    // const [btntext, setBtnText] = useState("Enable Dark Mode")


    // const toggleStyle = () =>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({

    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    // }

    return (
        <div className='container' style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What is Text-Utils?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <p>Text-Utils is simple text splitter,converter like Uppercase,Lowercase,String Split and Making Letter Capital of every word etc.</p>
                    </div>
                    </div>
                </div>

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What features we get in Text-Utils?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                       <p>Convert to Uppercase, Convert to Lowercase, Transform first leTTER Capital of every Word also we have Word Count, and it also shows how much time your text will take to get read.</p>
                    </div>
                    </div>
                </div>

            </div>

            {/* <button className="btn btn-secondary mt-4" onClick={toggleStyle}>{btntext}</button> */}
        </div>
    )
}

