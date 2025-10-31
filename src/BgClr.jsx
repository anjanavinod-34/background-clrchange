import React, { useState } from 'react'

function BgClr() {


   
     const[Bg,setBg]=useState("")


    
    return (
        <div style={{ minHeight: '100vh', backgroundColor:Bg}} className='container-fluid'>
            <h1 className='text-center text-dark p-5'>BACKGROUND COLOR CHANGER</h1>


            <div className='d-flex  justify-content-evenly align-items-center p-5 mt-5'>


                <div onClick={() => {
                    setBg("red")
                }} className=" btn btn-danger">RED</div>

                <div onClick={() => {
                    setBg("blue")
                }} className="btn btn-primary">BLUE</div>

                <div onClick={() => {
                    setBg("green")
                }} className="btn btn-success">GREEN</div>

                <div onClick={() => {
                    setBg("yellow")
                }} className=" btn btn-warning">YELLOW</div>



            </div>


        </div>
    )
}

export default BgClr