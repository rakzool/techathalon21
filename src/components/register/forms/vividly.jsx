import React,{useState} from 'react'
import classes from "../register.module.scss";
import QueueAnim from 'rc-queue-anim';
import editing from "../images/video.jpg"
import axios from 'axios'
import { Col, Row, Input, Button} from "antd";

export default function Vividly() {

    
   const [name,setName] = useState("");
   const [college,setCollege] = useState("");
   const [year,setYear] = useState("");
   const [branch,setBranch] = useState("");
   const [email,setEmail] = useState("");
   const [mobileNumber,setMobileNumber] = useState("");
   const [transNumber,setTransNumber] = useState("");
   const [error, setError] = useState(false)


   
   const onChangeHandler = (e, type) => {
    if (type === "name") {
        setName(e.target.value);
    } 
    else if (type === "college") {
        setCollege(e.target.value);
    }
    else if (type === "year") {
        setYear(e.target.value);
    }
    else if (type === "branch") {
        setBranch(e.target.value);
    }
    else if (type === "email") {
        setEmail(e.target.value)
    }
    else if (type === "contact") {
        setMobileNumber(e.target.value)
    }
    else if (type === "transNumber") {
        setTransNumber(e.target.value)
    }
    };


    
    const SubmitHandler = () =>{
   
        const data = {
            name,
            college,
            year,
            branch,
            emailID:email,
            contactNumber:mobileNumber,
            transactionId:transNumber
        }

       const showError = (error)=>{
        setError(error)
        // To remove error after 3 sec 
        setTimeout(()=>{
            setError(false)
        }, 3000)
       }
        

        axios.post("https://techathlon21.herokuapp.com/registerVividly",data).then(response => {
            console.log(response);

            if(!response.data.done){
                console.log("helo")
                showError(response.data.error.details[0].message)

            }   
        }).catch(e => console.log(e.details ,"error"))
    } 


    return (
        <Row justify="center" >
        <Col lg={8} sm={16} xs={23}>
            <div className={classes.body}>
                <Row className={classes.formBox}>

                    <div className={classes.header}>
                        <h3 className={classes.headerText}>Register for Vividly</h3>
                        <img src={editing} className={classes.headerImage} alt="Editor" />
                    </div>

                {/* animation */}
                <div className={classes.fieldsBox}>
                    <QueueAnim delay={300} className="queue-simple">
                        <div key='a' className={classes.formField}>
                            <p className={classes.title}>Full Name</p>
                            <Input
                                value={name}
                                onChange={(e) => onChangeHandler(e,"name")}
                                type='text'
                                className={classes.inputField}
                                placeholder='Enter your Name'
                            />
                        </div>
                        <div key='b' className={classes.formField}>
                            <p className={classes.title}>College</p>
                            <Input
                                value={college}
                                onChange={(e) => onChangeHandler(e,"college")}
                                type='text'
                                className={classes.inputField}
                                placeholder='Enter your College'
                            />
                        </div>
                        <div key='c' className={classes.formField}>
                            <p className={classes.title}>Year</p>
                            <Input
                                value={year}
                                type='text'
                                onChange={(e) => onChangeHandler(e,"year")}
                                className={classes.inputField}
                                placeholder='Enter your Year'
                            />
                        </div>
                        <div key='d' className={classes.formField}>
                            <p className={classes.title}>Branch</p>
                            <Input
                                type='text'
                                value={branch}
                                onChange={(e) => onChangeHandler(e,"branch")}
                                className={classes.inputField}
                                placeholder='Enter your Mobile Number'
                            />
                        </div>

                        <div key='e' className={classes.formField}>
                            <p className={classes.title}>E-Mail ID</p>
                            <Input
                                type='email'
                                onChange={(e) => onChangeHandler(e,"email")}
                                value={email}
                                className={classes.inputField}
                                placeholder='Enter your Email'
                            />
                        </div>

                        <div key='f' className={classes.formField}>
                            <p className={classes.title}>Contact Number</p>
                            <Input
                                type='text'
                                onChange={(e) => onChangeHandler(e,"contact")}
                                value={mobileNumber}
                                className={classes.inputField}
                                placeholder='Enter Contact Number'
                            />
                        </div>

                        <div key='g' className={classes.formField}>
                            <p className={classes.title}>Transaction Number</p>
                            <Input
                                type='text'
                                value={transNumber}
                                onChange={(e) => onChangeHandler(e,"transNumber")}
                                className={classes.inputField}
                                placeholder='Enter Transaction Number'
                            />
                        </div>
                        <Button onClick={()=> SubmitHandler()} key = 'z' block className={classes.Button} >Register Now</Button>
                         {error && <div className={classes.errorNotification}>
                             <p style={{color:"white", fontSize:"13px",flexWrap: "wrap",margin:'0 6px'}}>{error}</p>
                             <p style={{color:"white",zIndex:"10", cursor:"pointer"}} onClick={()=>setError(false)} >X</p>
                             </div>}
                        </QueueAnim>

                        <br /><br />
                        </div>
                </Row>
            </div>
        </Col>
    </Row>
    )
}
